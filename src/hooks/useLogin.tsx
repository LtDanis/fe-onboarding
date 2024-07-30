import { FormEventHandler } from "react"
import { BASE_URL } from "../data/constants.tsx"
import { useNavigate } from "react-router-dom"
import useUser from "./useUser.tsx"
import { LOGIN_STATE } from "../data/enum.tsx"

//should be deleted on real app
async function delayToSeeLoader(ms: number) {
  const delay = async (ms: number) => new Promise((res) => setTimeout(res, ms))
  await delay(ms)
}

export default function useLogin() {
  const navigate = useNavigate()
  const userStore = useUser()
  const LOGIN_URL = BASE_URL + "/auth/login"

  const onSignIn: FormEventHandler<HTMLFormElement> = async (form) => {
    userStore.login(LOGIN_STATE.loading, null)
    form.preventDefault()

    const formData = new FormData(form.currentTarget)
    const username = formData.get("username")
    const password = formData.get("password")

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    }

    const data = await fetch(LOGIN_URL, requestOptions)

    const access = await data.json()
    const token = access.access_token

    if (token) {
      await delayToSeeLoader(700)
      userStore.login(LOGIN_STATE.success, token)
      navigate("/users")
    } else {
      userStore.login(LOGIN_STATE.error, null)
    }
  }

  const handleLogout = () => {
    userStore.logout()
    navigate(LOGIN_URL)
  }

  return { onSignIn, handleLogout }
}

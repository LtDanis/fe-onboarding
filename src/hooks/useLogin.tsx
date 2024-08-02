import { FormEventHandler } from "react"
import { BASE_URL, USERS_LIST_URL } from "../data/constants.tsx"
import { useNavigate } from "react-router-dom"
import useUserStore from "./useUserStore.tsx"
import { LOGIN_STATE } from "../data/enum.tsx"

export default function useLogin() {
  const navigate = useNavigate()
  const { login, logout } = useUserStore()
  const LOGIN_URL = BASE_URL + "/auth/login"

  const onSignIn: FormEventHandler<HTMLFormElement> = async (form) => {
    login(LOGIN_STATE.loading, null)
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
      login(LOGIN_STATE.success, token)
      navigate(USERS_LIST_URL)
    } else {
      login(LOGIN_STATE.error, null)
    }
  }

  const handleLogout = () => {
    logout()
    navigate(LOGIN_URL)
  }

  return { onSignIn, handleLogout }
}

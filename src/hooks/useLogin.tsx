import { FormEventHandler, useState } from "react"
import { LOGIN_STATE } from "../enum.tsx"

export default function useLogin() {
  const currentState = Boolean(localStorage.getItem("accessToken"))
  const [loggedIn, setLoggedIn] = useState(currentState)
  const [state, setState] = useState(LOGIN_STATE.none)

  const LOGIN_URL = "http://localhost:3002/auth/login"

  const onSignIn: FormEventHandler<HTMLFormElement> = (form) => {
    setState(LOGIN_STATE.loading)
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
    fetch(LOGIN_URL, requestOptions)
      .then((res) => {
        res.status === 200
          ? setState(LOGIN_STATE.success)
          : setState(LOGIN_STATE.error)
        return res.json()
      })
      .then((data) => {
        const access = data.access_token
        if (access) {
          localStorage.setItem("accessToken", access)
          setLoggedIn(true)
        }
      })
  }

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    setLoggedIn(false)
  }

  return { onSignIn, handleLogout, loggedIn, state }
}

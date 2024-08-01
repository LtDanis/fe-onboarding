import { BASE_URL, LOGIN_URL } from "../data/constants.tsx"
import { useNavigate } from "react-router-dom"
import useUserStore from "./useUserStore.tsx"

export default function useFetch() {
  const navigate = useNavigate()
  const { logout, token } = useUserStore()

  const onFetch: any = async (
    requestUrl: string,
    method: string,
    body: string | null,
  ) => {
    const requestOptions = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }

    const res = await fetch(BASE_URL + requestUrl, requestOptions)
    if (res.status === 401) {
      logout()
      navigate(LOGIN_URL)
      return null
    }
    return await res.json()
  }

  return { onFetch }
}

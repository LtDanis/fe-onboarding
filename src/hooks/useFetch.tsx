import { BASE_URL, ITEMS_PER_PAGE, LOGIN_URL } from "../data/constants.tsx"
import { useNavigate } from "react-router-dom"
import useLoginStore from "./store/useLoginStore.tsx"

export default function useFetch() {
  const navigate = useNavigate()
  const { logout, token } = useLoginStore()

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

  const onFetchPage: any = async (requestUrl: string, page: number) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }

    const fullUrl: string =
      BASE_URL +
      requestUrl +
      "?" +
      new URLSearchParams({
        _page: page.toString(),
        _limit: ITEMS_PER_PAGE.toString(),
      }).toString()

    const res = await fetch(fullUrl, requestOptions)
    if (res.status === 401) {
      logout()
      navigate(LOGIN_URL)
      return null
    }
    const data = await res.json()
    return {
      data: data,
      numberOfItems: Number(res.headers.get("X-Total-Count")),
    }
  }

  return { onFetch, onFetchPage }
}

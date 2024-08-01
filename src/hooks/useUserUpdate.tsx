import { useNavigate } from "react-router-dom"
import { USERS_LIST_URL } from "../data/constants.tsx"
import { FormEventHandler } from "react"
import useFetch from "./useFetch.tsx"
import useUserStore from "./useUserStore.tsx"
import { UPDATE_STATE } from "../data/enum.tsx"

export default function useUserUpdate() {
  const navigate = useNavigate()
  const { updateUserState } = useUserStore()
  const { onFetch } = useFetch()

  const onUserRegister: FormEventHandler<HTMLFormElement> = async (form) => {
    form.preventDefault()

    const formData = new FormData(form.currentTarget)
    const body = {
      name: formData.get("name"),
      surname: formData.get("surname"),
      positionId: Number(formData.get("position")),
      departmentId: Number(formData.get("department")),
      image: formData.get("image"),
      comment: formData.get("comment"),
    }

    await onFetch("/api/user", "POST", body)
    updateUserState(UPDATE_STATE.created)
    navigate(USERS_LIST_URL)
  }

  const onUserEdit = async (formData: FormData, userId: string | undefined) => {
    const body = {
      name: formData.get("name"),
      surname: formData.get("surname"),
      positionId: Number(formData.get("position")),
      departmentId: Number(formData.get("department")),
      image: formData.get("image"),
      comment: formData.get("comment"),
    }

    await onFetch("/api/user/" + userId, "PUT", body)
    updateUserState(UPDATE_STATE.edited)
    navigate(USERS_LIST_URL)
  }

  return { onUserRegister, onUserEdit }
}

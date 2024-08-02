import { useNavigate } from "react-router-dom"
import { USERS_LIST_URL } from "../data/constants.tsx"
import { FormEvent, FormEventHandler } from "react"
import useFetch from "./useFetch.tsx"
import useUserStore from "./useUserStore.tsx"
import { UPDATE_STATE } from "../data/enum.tsx"

export default function useUserUpdate() {
  const navigate = useNavigate()
  const { updateUserState } = useUserStore()
  const { onFetch } = useFetch()

  const onUserRegister: FormEventHandler<HTMLFormElement> = async (form) => {
    const body = await createRequestBody(form)
    await onFetch("/api/user", "POST", body)
    updateUserState(UPDATE_STATE.created)
    navigate(USERS_LIST_URL)
  }

  const onUserEdit = async (
    form: FormEvent<HTMLFormElement>,
    userId: string | undefined,
  ) => {
    const body = await createRequestBody(form)
    await onFetch("/api/user/" + userId, "PUT", body)
    updateUserState(UPDATE_STATE.edited)
    navigate(USERS_LIST_URL)
  }

  const createRequestBody = async (form: FormEvent<HTMLFormElement>) => {
    form.preventDefault()
    const formData = new FormData(form.currentTarget)
    const image = await convertBase64(formData.get("image"))
    return {
      name: formData.get("name"),
      surname: formData.get("surname"),
      positionId: Number(formData.get("position")),
      departmentId: Number(formData.get("department")),
      image: image,
      comment: formData.get("comment"),
    }
  }

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  return { onUserRegister, onUserEdit }
}

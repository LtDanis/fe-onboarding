import { useNavigate } from "react-router-dom"
import { DEPARTMENTS_LIST_URL } from "../data/constants.tsx"
import { FormEvent, FormEventHandler } from "react"
import useFetch from "./useFetch.tsx"
import useUserStore from "./useUserStore.tsx"
import { UPDATE_STATE } from "../data/enum.tsx"

export default function useDepartmentUpdate() {
  const navigate = useNavigate()
  const { updateDepartmentState } = useUserStore()
  const { onFetch } = useFetch()

  const onDepartmentRegister: FormEventHandler<HTMLFormElement> = async (
    form,
  ) => {
    const body = await createRequestBody(form)
    await onFetch("/api/department", "POST", body)
    updateDepartmentState(UPDATE_STATE.created)
    navigate(DEPARTMENTS_LIST_URL)
  }

  const onDepartmentEdit = async (
    form: FormEvent<HTMLFormElement>,
    departmentId: number | undefined,
  ) => {
    const body = await createRequestBody(form)
    await onFetch("/api/department/" + departmentId, "PUT", body)
    updateDepartmentState(UPDATE_STATE.edited)
    navigate(DEPARTMENTS_LIST_URL)
  }

  const createRequestBody = async (form: FormEvent<HTMLFormElement>) => {
    form.preventDefault()
    const formData = new FormData(form.currentTarget)
    return {
      name: formData.get("name"),
    }
  }

  return { onDepartmentRegister, onDepartmentEdit }
}

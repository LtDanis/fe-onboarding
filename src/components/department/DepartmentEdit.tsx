import "./DepartmentEdit.css"
import { FormEventHandler, useEffect, useState } from "react"
import { Department } from "../../data/classes.tsx"
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch.tsx"
import DepartmentForm from "./DepartmentForm.tsx"
import { DEPARTMENTS_LIST_URL } from "../../data/constants.tsx"
import useDepartmentUpdate from "../../hooks/update/useDepartmentUpdate.tsx"
import { UPDATE_STATE } from "../../data/enum.tsx"
import useDepartmentStore from "../../hooks/store/useDepartmentStore.tsx"

export default function DepartmentEdit() {
  const [department, setDepartment] = useState<Department | null>(null)
  const params = useParams()
  const navigate = useNavigate()
  const { updateDepartmentState } = useDepartmentStore()
  const { onDepartmentEdit } = useDepartmentUpdate()
  const { onFetch } = useFetch()

  useEffect(() => {
    const fetchDepartment = async () => {
      const result = await onFetch("/api/department/" + params.id, "GET")
      if (result) {
        setDepartment(result)
      } else {
        navigate(DEPARTMENTS_LIST_URL)
      }
    }
    fetchDepartment()
  }, [])

  const onSubmitForm: FormEventHandler<HTMLFormElement> = async (form) => {
    await onDepartmentEdit(form, department?.id)
  }

  const deleteDepartment = async () => {
    await onFetch("/api/department/" + params.id, "DELETE")
    updateDepartmentState(UPDATE_STATE.deleted)
    navigate(DEPARTMENTS_LIST_URL)
  }
  return (
    <>
      <p>{(department && department.name) || "-"}</p>
      <div className="wrap">
        <button onClick={deleteDepartment} className="button">
          Delete Department
        </button>
      </div>
      {department && (
        <DepartmentForm onSubmitForm={onSubmitForm} department={department} />
      )}
    </>
  )
}

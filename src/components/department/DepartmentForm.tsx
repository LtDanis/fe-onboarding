import "./DepartmentForm.css"
import { FormEventHandler, useState } from "react"
import { DEPARTMENTS_LIST_URL } from "../../data/constants.tsx"
import { useNavigate } from "react-router-dom"
import { Department } from "../../data/classes.tsx"

export default function DepartmentForm({
  onSubmitForm,
  department,
}: {
  onSubmitForm: FormEventHandler<HTMLFormElement>
  department: Department | null
}) {
  const [departmentName, setDepartmentName] = useState(department?.name || "")
  const navigate = useNavigate()
  const cancelAction = () => navigate(DEPARTMENTS_LIST_URL)

  return (
    <>
      <form className="form-input" onSubmit={onSubmitForm}>
        <div className="p-5 form-header">General information</div>
        {department && <div className="p-5 form-header">Users</div>}

        <div className="p-5">
          <input
            className="w-full"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={departmentName}
            required
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </div>

        <div className="wrap">
          <button type="submit" className="button">
            Save
          </button>
        </div>
        <div className="wrap">
          <button type="button" onClick={cancelAction} className="button">
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}

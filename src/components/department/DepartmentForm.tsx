import "./DepartmentForm.css"
import { FormEventHandler, useState } from "react"
import { DEPARTMENTS_LIST_URL } from "../../data/constants.tsx"
import { useNavigate } from "react-router-dom"
import { Department } from "../../data/classes.tsx"
import UserList from "../user/UserList.tsx"

export default function DepartmentForm({
  onSubmitForm,
  department,
}: {
  onSubmitForm: FormEventHandler<HTMLFormElement>
  department: Department | null
}) {
  const [departmentName, setDepartmentName] = useState(department?.name || "")
  const [usersListSelected, setUsersListSelected] = useState(false)
  const navigate = useNavigate()
  const cancelAction = () => navigate(DEPARTMENTS_LIST_URL)

  const selectGeneralInfo = () => setUsersListSelected(false)
  const selectUserList = () => setUsersListSelected(true)

  return (
    <>
      <form className="form-input" onSubmit={onSubmitForm}>
        <div className="p-5 form-header">
          <button type="button" onClick={selectGeneralInfo}>
            General information
          </button>
        </div>
        <div className="p-5 form-header">
          <button type="button" onClick={selectUserList}>
            Users
          </button>
        </div>

        {department && usersListSelected ? (
          <UserList userListUrl={`/api/department/${department.id}/user`} />
        ) : (
          <>
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
              <button type="submit" className="submit-button">
                Save
              </button>
            </div>
            <div className="wrap">
              <button
                type="button"
                onClick={cancelAction}
                className="cancel-button"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </form>
    </>
  )
}

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
      <form className="form-header" onSubmit={onSubmitForm}>
        <div className="flex flex-row">
          <div
            className={`p-5 form-header ${!usersListSelected && "orange-top-form-header"}`}
          >
            <button type="button" onClick={selectGeneralInfo}>
              General information
            </button>
          </div>
          <div
            className={`p-5 form-header ${usersListSelected && "orange-top-form-header"} ${!department && "hidden"}`}
          >
            <button type="button" onClick={selectUserList}>
              Users
            </button>
          </div>
        </div>

        {department && usersListSelected ? (
          <UserList userListUrl={`/api/department/${department.id}/user`} />
        ) : (
          <>
            <div className="flex flex-row">
              <div className="flex-grow">
                <div className="p-5">
                  {department && <label htmlFor="name">Department name</label>}
                  <input
                    className="w-full"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Department name"
                    value={departmentName}
                    onChange={(e) => setDepartmentName(e.target.value)}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row">
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
            </div>
          </>
        )}
      </form>
    </>
  )
}

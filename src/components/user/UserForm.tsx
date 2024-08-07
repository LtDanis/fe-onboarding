import "./UserForm.css"
import { FormEventHandler, useEffect, useState } from "react"
import { USERS_LIST_URL } from "../../data/constants.tsx"
import { useNavigate } from "react-router-dom"
import { PAGE_STATE } from "../../data/enum.tsx"
import useFetch from "../../hooks/useFetch.tsx"
import { Department, Position, User } from "../../data/classes.tsx"
import Avatar from "../generic/Avatar.tsx"

export default function UserForm({
  onSubmitForm,
  user,
}: {
  onSubmitForm: FormEventHandler<HTMLFormElement>
  user: User | null
}) {
  const [userName, setUserName] = useState(user?.name || "")
  const [userSurname, setUserSurname] = useState(user?.surname || "")

  const [generalInfoSelected, setGeneralInfoSelected] = useState(true)

  const [pageState, setPageState] = useState(PAGE_STATE.loading)
  const [departments, setDepartments] = useState<Department[]>([])
  const [selectedDepartment, setSelectedDepartment] = useState(false)
  const [positions, setPositions] = useState<Position[]>([])
  const [selectedPosition, setSelectedPosition] = useState(false)
  const navigate = useNavigate()
  const { onFetch } = useFetch()
  const cancelAction = () => navigate(USERS_LIST_URL)

  useEffect(() => {
    const fetchUser = async () => {
      const departments = await onFetch("/api/department", "GET")
      const positions = await onFetch("/api/position", "GET")
      if (departments && positions) {
        setDepartments(departments)
        setPositions(positions)
        setPageState(PAGE_STATE.completed)
      } else {
        setPageState(PAGE_STATE.error)
      }
    }
    fetchUser()
  }, [])

  useEffect(() => {
    setUserName(user?.name || "")
    setUserSurname(user?.surname || "")
  }, [user])

  const selectGeneralInformation = () => setGeneralInfoSelected(true)
  const selectComments = () => setGeneralInfoSelected(false)
  const setSelectedDep = () => setSelectedDepartment(true)
  const setSelectedPos = () => setSelectedPosition(true)

  const imageInput = (cssClassName: string) => (
    <div className={cssClassName}>
      <label className="label-text" htmlFor="image">
        <p>Image</p>
        <Avatar image={user?.image} />
      </label>
      <input
        className="w-full hidden"
        type="file"
        accept="image/*"
        id="image"
        name="image"
        placeholder="Image"
        autoComplete="off"
      />
    </div>
  )

  return (
    <>
      {pageState === PAGE_STATE.completed ? (
        <form className="form-header" onSubmit={onSubmitForm}>
          <div className="flex flex-row">
            <div
              className={`p-5 form-header ${generalInfoSelected && "orange-top-form-header"}`}
            >
              <button type="button" onClick={selectGeneralInformation}>
                General information
              </button>
            </div>
            <div
              className={`p-5 form-header desktop-only ${!generalInfoSelected && "orange-top-form-header"}`}
            >
              <button type="button" onClick={selectComments}>
                Comments
              </button>
            </div>
          </div>

          <div className={`flex flex-row ${!generalInfoSelected && "hidden"}`}>
            <div className="flex-grow">
              <div className="p-5">
                {user && (
                  <label className="label-text" htmlFor="name">
                    Name
                  </label>
                )}
                <input
                  className="w-full"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="p-5">
                {user && (
                  <label className="label-text" htmlFor="surname">
                    Surname
                  </label>
                )}
                <input
                  className="w-full"
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Surname"
                  value={userSurname}
                  onChange={(e) => setUserSurname(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="p-5">
                {user && (
                  <label className="label-text" htmlFor="position">
                    Position
                  </label>
                )}
                <select
                  className={`w-full ${!selectedPosition && !user && "disabled-option"}`}
                  id="position"
                  name="position"
                  required
                  autoComplete="off"
                  onChange={setSelectedPos}
                >
                  {!user && (
                    <option disabled selected value="">
                      Position
                    </option>
                  )}
                  {positions.map((position: Position) => (
                    <option value={position.id}>{position.name}</option>
                  ))}
                </select>
              </div>

              <div className="p-5">
                {user && (
                  <label className="label-text" htmlFor="department">
                    Department
                  </label>
                )}
                <select
                  className={`w-full ${!selectedDepartment && !user && "disabled-option"}`}
                  id="department"
                  name="department"
                  required
                  autoComplete="off"
                  onChange={setSelectedDep}
                >
                  {!user && (
                    <option disabled selected value="">
                      Department
                    </option>
                  )}
                  {departments.map((department: Department) => (
                    <option value={department.id}>{department.name}</option>
                  ))}
                </select>
              </div>
              {imageInput("p-5 mobile-only")}
            </div>
            {imageInput("p-5 flex-grow desktop-only")}
          </div>

          <div className={`p-5 ${generalInfoSelected && "mobile-only"}`}>
            {user && (
              <label className="label-text" htmlFor="comment">
                Comments
              </label>
            )}
            <input
              className="w-full"
              type="text"
              id="comment"
              name="comment"
              placeholder="Comments"
              autoComplete="off"
            />
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
        </form>
      ) : (
        "Loading"
      )}
    </>
  )
}

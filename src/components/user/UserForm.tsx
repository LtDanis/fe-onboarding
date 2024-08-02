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

  const [pageState, setPageState] = useState(PAGE_STATE.loading)
  const [departments, setDepartments] = useState<Department[]>([])
  const [positions, setPositions] = useState<Position[]>([])
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

  return (
    <>
      {pageState === PAGE_STATE.completed ? (
        <form className="form-input" onSubmit={onSubmitForm}>
          <div className="p-5 form-header">General information</div>
          <div className="p-5 form-header">Comments</div>

          <div className="p-5">
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
            <select
              className="w-full"
              id="position"
              name="position"
              required
              autoComplete="off"
            >
              {positions.map((position: Position) => (
                <option value={position.id}>{position.name}</option>
              ))}
            </select>
          </div>

          <div className="p-5">
            <select
              className="w-full"
              id="department"
              name="department"
              required
              autoComplete="off"
            >
              {departments.map((department: Department) => (
                <option value={department.id}>{department.name}</option>
              ))}
            </select>
          </div>

          <div className="p-5">
            <label htmlFor="image">Image</label>
            <input
              className="w-full"
              type="file"
              accept="image/*"
              id="image"
              name="image"
              placeholder="Image"
              autoComplete="off"
            />
            <Avatar image={user?.image} />
          </div>

          <div className="p-5">
            <input
              className="w-full"
              type="text"
              id="comment"
              name="comment"
              placeholder="Comments"
              autoComplete="off"
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
      ) : (
        "Loading"
      )}
    </>
  )
}

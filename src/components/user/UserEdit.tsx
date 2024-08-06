import "./UserEdit.css"
import { Link, useNavigate, useParams } from "react-router-dom"
import {
  USERS_DELETE_URL_WITH_ID,
  USERS_LIST_URL,
} from "../../data/constants.tsx"
import { FormEventHandler, useEffect, useState } from "react"
import { User } from "../../data/classes.tsx"
import useFetch from "../../hooks/useFetch.tsx"
import useUserUpdate from "../../hooks/update/useUserUpdate.tsx"
import UserForm from "./UserForm.tsx"

export default function UserEdit() {
  const [user, setUser] = useState<User | null>(null)
  const params = useParams()
  const navigate = useNavigate()
  const { onUserEdit } = useUserUpdate()
  const { onFetch } = useFetch()

  useEffect(() => {
    const fetchUser = async () => {
      const result = await onFetch("/api/user/" + params.id, "GET")
      if (result) {
        setUser(result)
      } else {
        navigate(USERS_LIST_URL)
      }
    }
    fetchUser()
  }, [])

  const onSubmitForm: FormEventHandler<HTMLFormElement> = async (form) => {
    await onUserEdit(form, user?.id)
  }
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-row list-header">
        <div className="header">
          {(user && user.name) || "-"} {(user && user.surname) || "-"}
        </div>
        <button className="cancel-button align-right">
          <Link to={USERS_DELETE_URL_WITH_ID(params.id)}>Delete user</Link>
        </button>
      </div>
      <div className="m-5">
        <UserForm onSubmitForm={onSubmitForm} user={user} />
      </div>
    </div>
  )
}

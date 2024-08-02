import "./UserEdit.css"
import { Link, useNavigate, useParams } from "react-router-dom"
import {
  USERS_DELETE_PARTIAL_URL,
  USERS_LIST_URL,
} from "../../data/constants.tsx"
import { FormEventHandler, useEffect, useState } from "react"
import { User } from "../../data/classes.tsx"
import useFetch from "../../hooks/useFetch.tsx"
import useUserUpdate from "../../hooks/useUserUpdate.tsx"
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
    <>
      <p>
        {(user && user.name) || "-"} {(user && user.surname) || "-"}
      </p>
      <Link to={USERS_DELETE_PARTIAL_URL + params.id}>DELETE</Link>
      <UserForm onSubmitForm={onSubmitForm} user={user} />
    </>
  )
}

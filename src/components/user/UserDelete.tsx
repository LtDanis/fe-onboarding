import "./UserDelete.css"
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch.tsx"
import { useEffect, useState } from "react"
import { User } from "../../data/classes.tsx"
import { USERS_LIST_URL } from "../../data/constants.tsx"
import { UPDATE_STATE } from "../../data/enum.tsx"
import useUserStore from "../../hooks/store/useUserStore.tsx"

export default function UserDelete() {
  const [user, setUser] = useState<User | null>(null)
  const params = useParams()
  const navigate = useNavigate()
  const { updateUserState } = useUserStore()
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

  const deleteUser = async () => {
    await onFetch("/api/user/" + params.id, "DELETE")
    updateUserState(UPDATE_STATE.deleted)
    navigate(USERS_LIST_URL)
  }

  const cancelAction = () => navigate(USERS_LIST_URL)

  return (
    <div className="flex flex-col flex-grow m-5">
      <div className="header">
        {(user && user.name) || "-"} {(user && user.surname) || "-"}
      </div>
      <div className="p-3 orange-top-form-header">
        Are you sure you want to delete user
        <b>
          &nbsp;
          {(user && user.name) || "-"} {(user && user.surname) || "-"}
        </b>
        ?
      </div>
      <div className="flex flex-row">
        <div>
          <button onClick={deleteUser} className="caution-button">
            Delete User
          </button>
        </div>
        <div>
          <button onClick={cancelAction} className="cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

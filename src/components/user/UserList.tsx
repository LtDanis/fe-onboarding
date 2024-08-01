import "./UserList.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { User } from "../../data/classes.tsx"
import useFetch from "../../hooks/useFetch.tsx"
import {
  USERS_EDIT_PARTIAL_URL,
  USERS_REGISTER_URL,
} from "../../data/constants.tsx"

export default function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const { onFetch } = useFetch()

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await onFetch("/api/user", "GET")
      if (result) setUsers(result)
    }
    fetchUsers()
  }, [])

  return (
    <div className="flex">
      <div>
        <p>Users</p>
        &nbsp;
        <Link className="font-bold" to={USERS_REGISTER_URL}>
          New user
        </Link>
      </div>
      <div className="container">
        <ul>
          {users && users.length > 0 ? (
            users.map((user: User) => (
              <li className="min-w-full" key={user.id}>
                <Link to={USERS_EDIT_PARTIAL_URL + user.id}>
                  {user.name} {user.surname}
                </Link>
              </li>
            ))
          ) : (
            <>
              <div>There are no data to show currently.</div>
              <Link className="text-orange-600" to={USERS_REGISTER_URL}>
                Create new user.
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

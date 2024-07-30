import "./UserList.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { User } from "../../data/classes.tsx"
import useFetch from "../../hooks/useFetch.tsx"

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
    <>
      <div className="flex">
        <p>Users</p>
        <Link to="/users/register">New user</Link>
      </div>
      <div className="flex-row">
        <ul>
          {users && users.length > 0
            ? users.map((user: User) => (
                <li key={user.id}>
                  {user.name} {user.surname}
                </li>
              ))
            : ""}
        </ul>
      </div>
    </>
  )
}

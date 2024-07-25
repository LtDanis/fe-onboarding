import "./UserList.css"
import { Link } from "react-router-dom"

export default function UserList() {
  return (
    <>
      <p>Users</p>
      <Link to="/users/register">New user</Link>
    </>
  )
}

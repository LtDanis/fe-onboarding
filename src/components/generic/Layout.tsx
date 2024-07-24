import "./Layout.css"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Layout({
  loggedIn,
  handleLogout,
}: {
  loggedIn: boolean
  handleLogout: () => void
}) {
  if (!loggedIn) {
    const navigate = useNavigate()
    useEffect(() => {
      navigate("/login")
    })
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/user">Users</Link>
          </li>
          <li>
            <Link to="/departments">Departments</Link>
          </li>
          <li>
            <Link to="/positions">Positions</Link>
          </li>

          <li>
            <Link to="/" onClick={handleLogout}>
              Log out
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

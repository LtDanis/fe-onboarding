import "./Layout.css"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import CommandLineSvg from "../../assets/CommandLine.tsx"
import UserSvg from "../../assets/User.tsx"
import FriendsSvg from "../../assets/Friends.tsx"
import LogoutSvg from "../../assets/Logout.tsx"
import PositionSvg from "../../assets/Position.tsx"
import useUser from "../../hooks/useUser.tsx"
import { LOGIN_URL } from "../../data/constants.tsx"

export default function Layout({ handleLogout }: { handleLogout: () => void }) {
  const navigate = useNavigate()
  const { token } = useUser()
  useEffect(() => {
    if (!token) {
      navigate(LOGIN_URL)
    }
  }, [token])

  return (
    <>
      <div className="flex flex-row">
        <div className="flex menu-bar">
          <nav>
            <div className="flex flex-row">
              <CommandLineSvg />
              &nbsp;OnBoarding
            </div>
            <ul>
              <li>
                <Link to="/users" className="flex flex-row">
                  <UserSvg />
                  &nbsp;Users
                </Link>
              </li>
              <li>
                <Link to="/departments" className="flex flex-row">
                  <FriendsSvg />
                  &nbsp;Departments
                </Link>
              </li>
              <li>
                <Link to="/positions" className="flex flex-row">
                  <PositionSvg />
                  &nbsp;Positions
                </Link>
              </li>

              <li>
                <Link to="/" className="flex flex-row" onClick={handleLogout}>
                  <LogoutSvg />
                  &nbsp;Log out
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex">
          <Outlet />
        </div>
      </div>
    </>
  )
}

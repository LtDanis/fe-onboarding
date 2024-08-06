import "./Layout.css"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import CommandLineSvg from "../../assets/CommandLine.tsx"
import UserSvg from "../../assets/User.tsx"
import FriendsSvg from "../../assets/Friends.tsx"
import LogoutSvg from "../../assets/Logout.tsx"
import PositionSvg from "../../assets/Position.tsx"
import useUserStore from "../../hooks/store/useUserStore.tsx"
import {
  DEPARTMENTS_LIST_URL,
  LOGIN_URL,
  POSITIONS_LIST_URL,
  USERS_LIST_URL,
} from "../../data/constants.tsx"
import useLogin from "../../hooks/useLogin.tsx"
import { UPDATE_STATE } from "../../data/enum.tsx"
import useLoginStore from "../../hooks/store/useLoginStore.tsx"

export default function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const { handleLogout } = useLogin()
  const { token } = useLoginStore()
  const { userState, updateUserState } = useUserStore()
  useEffect(() => {
    if (!token) {
      navigate(LOGIN_URL)
    }
  }, [token])

  const closeUpdateStateMessage = () => {
    updateUserState(null)
  }

  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="menu-bar">
          <nav>
            <div className="flex flex-row menu-item">
              <CommandLineSvg />
              &nbsp;OnBoarding
            </div>
            <ul>
              <li>
                <Link
                  to={USERS_LIST_URL}
                  className={`flex flex-row menu-item ${location.pathname.startsWith(USERS_LIST_URL) && "selected"}`}
                >
                  <UserSvg />
                  &nbsp;Users
                </Link>
              </li>
              <li>
                <Link
                  to={DEPARTMENTS_LIST_URL}
                  className={`flex flex-row menu-item ${location.pathname.startsWith(DEPARTMENTS_LIST_URL) && "selected"}`}
                >
                  <FriendsSvg />
                  &nbsp;Departments
                </Link>
              </li>
              <li>
                <Link
                  to={POSITIONS_LIST_URL}
                  className={`flex flex-row menu-item ${location.pathname.startsWith(POSITIONS_LIST_URL) && "selected"}`}
                >
                  <PositionSvg />
                  &nbsp;Positions
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="flex flex-row menu-item bottom-item"
                  onClick={handleLogout}
                >
                  <LogoutSvg />
                  &nbsp;Log out
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Outlet />
        {userState === UPDATE_STATE.created && (
          <div className="status-notification-container">
            <div className="status-update-message">
              New user successfully created
              <button className="ml-2" onClick={closeUpdateStateMessage}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

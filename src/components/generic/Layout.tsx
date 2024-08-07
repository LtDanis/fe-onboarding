import "./Layout.css"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import CommandLineSvg from "../../assets/CommandLine.tsx"
import UserSvg from "../../assets/User.tsx"
import FriendsSvg from "../../assets/Friends.tsx"
import LogoutSvg from "../../assets/Logout.tsx"
import PositionSvg from "../../assets/Position.tsx"
import useUserStore from "../../hooks/store/useUserStore.tsx"
import { Squash as Hamburger } from "hamburger-react"
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
  const [menuVisible, setMenuVisible] = useState(false)
  useEffect(() => {
    if (!token) {
      navigate(LOGIN_URL)
    }
  }, [token])

  const closeUpdateStateMessage = () => {
    updateUserState(null)
  }

  const toggleHide = () => setMenuVisible(!menuVisible)

  return (
    <>
      <div className="flex flex-row h-screen">
        <div className={`menu-bar ${!menuVisible && "desktop-only"}`}>
          <nav>
            <div className="flex flex-row menu-item">
              <CommandLineSvg />
              &nbsp;OnBoarding
              <div className="align-right mobile-only negative-margin-hamburger-button">
                <Hamburger
                  toggled={menuVisible}
                  size={25}
                  toggle={toggleHide}
                />
              </div>
            </div>
            <ul>
              <li>
                <Link
                  onClick={toggleHide}
                  to={USERS_LIST_URL}
                  className={`flex flex-row menu-item ${location.pathname.startsWith(USERS_LIST_URL) && "selected"}`}
                >
                  <UserSvg />
                  &nbsp;Users
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleHide}
                  to={DEPARTMENTS_LIST_URL}
                  className={`flex flex-row menu-item ${location.pathname.startsWith(DEPARTMENTS_LIST_URL) && "selected"}`}
                >
                  <FriendsSvg />
                  &nbsp;Departments
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleHide}
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

        <div
          className={`flex flex-col flex-1 ${menuVisible && "desktop-only"}`}
        >
          <Outlet
            context={{
              hamburgerMenu: (
                <div className="mobile-only">
                  <Hamburger
                    toggled={menuVisible}
                    size={30}
                    toggle={toggleHide}
                  />
                </div>
              ),
            }}
          />
        </div>
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

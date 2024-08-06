import "./UserList.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Department, Position, User } from "../../data/classes.tsx"
import useFetch from "../../hooks/useFetch.tsx"
import {
  ITEMS_PER_PAGE,
  USERS_EDIT_URL_WITH_ID,
  USERS_REGISTER_URL,
} from "../../data/constants.tsx"
import { PAGE_STATE } from "../../data/enum.tsx"
import ReactPaginate from "react-paginate"
import Avatar from "../generic/Avatar.tsx"

export default function UserList({ userListUrl }: { userListUrl?: string }) {
  const [pageState, setPageState] = useState(PAGE_STATE.loading)
  const [currentPage, setCurrentPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(1)
  const [users, setUsers] = useState<User[]>([])
  const [departments, setDepartments] = useState<Department[]>([])
  const [positions, setPositions] = useState<Position[]>([])
  const { onFetch, onFetchPage } = useFetch()
  const defaultUserListUrl = "/api/user"

  useEffect(() => {
    const fetchUsers = async () => {
      const usersPage = await onFetchPage(
        userListUrl || defaultUserListUrl,
        currentPage,
      )
      setUsers(usersPage.data)
      const departmentsList = await onFetch("/api/department", "GET")
      setDepartments(departmentsList)
      const positionsList = await onFetch("/api/position", "GET")
      setPositions(positionsList)
      if (pageState === PAGE_STATE.loading) {
        setNumberOfPages(Math.ceil(usersPage.numberOfItems / ITEMS_PER_PAGE))
        setPageState(PAGE_STATE.completed)
      }
    }
    fetchUsers()
  }, [currentPage])

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1)
  }

  const hasUsers = users && users.length > 0

  const findDepartment = (id: number) =>
    departments.find((d) => d.id === id)?.name || "-"

  const findPosition = (id: number) =>
    positions.find((p) => p.id === id)?.name || "-"

  return (
    <>
      {pageState === PAGE_STATE.loading ? (
        <div className="text-gray-600">Loading...</div>
      ) : (
        <div className="flex flex-col flex-1">
          <div className="flex flex-row list-header">
            <div className="content-evenly header">Users</div>
            <Link className="align-right submit-button" to={USERS_REGISTER_URL}>
              New user
            </Link>
          </div>
          <div className="users-list flex-col">
            {hasUsers && (
              <div className="grid grid-cols-6 user-item column-header">
                <div>Photo</div>
                <div>Name</div>
                <div>Surname</div>
                <div>Position</div>
                <div>Department</div>
                <div>Comments</div>
              </div>
            )}
            {hasUsers ? (
              users.map((user: User) => (
                <Link
                  className="min-w-full flex-1 content-evenly user-item"
                  to={USERS_EDIT_URL_WITH_ID(user.id)}
                >
                  <div className="grid grid-cols-6">
                    <Avatar image={user?.image} width={25} height={25} />
                    <div>{user.surname}</div>
                    <div>{user.name}</div>
                    <div>{findPosition(user.positionId)}</div>
                    <div>{findDepartment(user.departmentId)}</div>
                    <div>{user.comment}</div>
                  </div>
                </Link>
              ))
            ) : (
              <>
                <div>There are no data to show currently.</div>
                <Link className="text-orange-600" to={USERS_REGISTER_URL}>
                  Create new user.
                </Link>
              </>
            )}
          </div>
          <ReactPaginate
            className="flex paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            pageCount={numberOfPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </>
  )
}

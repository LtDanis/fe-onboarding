import "./UserList.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { User } from "../../data/classes.tsx"
import useFetch from "../../hooks/useFetch.tsx"
import {
  ITEMS_PER_PAGE,
  USERS_EDIT_URL_WITH_ID,
  USERS_REGISTER_URL,
} from "../../data/constants.tsx"
import { PAGE_STATE } from "../../data/enum.tsx"
import ReactPaginate from "react-paginate"

export default function UserList({ userListUrl }: { userListUrl?: string }) {
  const [pageState, setPageState] = useState(PAGE_STATE.loading)
  const [currentPage, setCurrentPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(1)
  const [users, setUsers] = useState<User[]>([])
  const { onFetchPage } = useFetch()
  const defaultUserListUrl = "/api/user"

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await onFetchPage(
        userListUrl || defaultUserListUrl,
        currentPage,
      )
      setUsers(result.data)
      if (pageState === PAGE_STATE.loading) {
        setNumberOfPages(Math.ceil(result.numberOfItems / ITEMS_PER_PAGE))
        setPageState(PAGE_STATE.completed)
      }
    }
    fetchUsers()
  }, [currentPage])

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1)
  }

  return (
    <>
      {pageState === PAGE_STATE.loading ? (
        <div className="text-gray-600">Loading...</div>
      ) : (
        <div className="flex flex-col flex-1">
          <div className="flex flex-row list-header">
            <div className="content-evenly">Users</div>
            <Link className="align-right submit-button" to={USERS_REGISTER_URL}>
              New user
            </Link>
          </div>
          <div className="users-list flex-col">
            {users && users.length > 0 ? (
              users.map((user: User) => (
                <Link
                  className="min-w-full flex-1 content-evenly user-item"
                  to={USERS_EDIT_URL_WITH_ID(user.id)}
                >
                  {user.name} {user.surname}
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

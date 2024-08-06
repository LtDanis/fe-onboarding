import "./DepartmentList.css"
import { useEffect, useState } from "react"
import { PAGE_STATE } from "../../data/enum.tsx"
import { Department } from "../../data/classes.tsx"
import useFetch from "../../hooks/useFetch.tsx"
import {
  DEPARTMENTS_EDIT_URL,
  DEPARTMENTS_EDIT_URL_WITH_ID,
  DEPARTMENTS_REGISTER_URL,
} from "../../data/constants.tsx"
import { Link } from "react-router-dom"

export default function DepartmentList() {
  const [pageState, setPageState] = useState(PAGE_STATE.loading)
  const [departments, setDepartments] = useState<Department[]>([])
  const { onFetch } = useFetch()

  useEffect(() => {
    const fetchDepartments = async () => {
      const result = await onFetch("/api/department", "GET")
      setDepartments(result)
      setPageState(PAGE_STATE.completed)
    }
    fetchDepartments()
  }, [])

  const hasDepartments = departments && departments.length > 0

  return (
    <>
      {pageState === PAGE_STATE.loading ? (
        <div className="text-gray-600">Loading...</div>
      ) : (
        <div className="flex flex-col flex-1">
          <div className="flex flex-row list-header">
            <div className="content-evenly header">Departments</div>
            <Link
              className="align-right submit-button"
              to={DEPARTMENTS_REGISTER_URL}
            >
              New department
            </Link>
          </div>
          <div className="departments-list flex-col">
            {hasDepartments && (
              <div className="grid grid-cols-1 department-item column-header">
                <div>Department</div>
              </div>
            )}
            {hasDepartments ? (
              departments.map((department: Department) => (
                <Link
                  className="min-w-full content-evenly department-item"
                  to={DEPARTMENTS_EDIT_URL_WITH_ID(department.id)}
                >
                  <div className="grid grid-cols-1">
                    <div>{department.name}</div>
                  </div>
                </Link>
              ))
            ) : (
              <>
                <div>There are no data to show currently.</div>
                <Link className="text-orange-600" to={DEPARTMENTS_EDIT_URL}>
                  Create new department.
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

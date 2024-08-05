import "./DepartmentList.css"
import { useEffect, useState } from "react"
import { PAGE_STATE } from "../../data/enum.tsx"
import { Department } from "../../data/classes.tsx"
import useFetch from "../../hooks/useFetch.tsx"
import {
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

  return (
    <>
      {pageState === PAGE_STATE.loading ? (
        <div className="text-gray-600">Loading...</div>
      ) : (
        <div className="flex flex-col">
          <div>
            <p>Departments</p>
            &nbsp;
            <Link className="font-bold" to={DEPARTMENTS_REGISTER_URL}>
              New department
            </Link>
          </div>
          <div className="container">
            <ul>
              {departments && departments.length > 0 ? (
                departments.map((department: Department) => (
                  <li className="min-w-full" key={department.id}>
                    <Link to={DEPARTMENTS_EDIT_URL_WITH_ID(department.id)}>
                      {department.name}
                    </Link>
                  </li>
                ))
              ) : (
                <>
                  <div>There are no data to show currently.</div>
                  <Link
                    className="text-orange-600"
                    to={DEPARTMENTS_REGISTER_URL}
                  >
                    Create new department.
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

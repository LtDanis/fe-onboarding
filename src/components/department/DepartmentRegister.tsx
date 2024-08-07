import "./DepartmentRegister.css"
import useDepartmentUpdate from "../../hooks/update/useDepartmentUpdate.tsx"
import DepartmentForm from "./DepartmentForm.tsx"
import { useOutletContext } from "react-router-dom"

export default function DepartmentRegister() {
  const { onDepartmentRegister } = useDepartmentUpdate()
  const context: any = useOutletContext()

  return (
    <>
      <div className="flex flex-col flex-1">
        <div className="flex flex-row list-header">
          <div>{context.hamburgerMenu}</div>
          <div className="header">New department</div>
        </div>
        <div className="m-5">
          <DepartmentForm
            onSubmitForm={onDepartmentRegister}
            department={null}
          />
        </div>
      </div>
    </>
  )
}

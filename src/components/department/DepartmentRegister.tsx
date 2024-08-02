import "./DepartmentRegister.css"
import useDepartmentUpdate from "../../hooks/update/useDepartmentUpdate.tsx"
import DepartmentForm from "./DepartmentForm.tsx"

export default function DepartmentRegister() {
  const { onDepartmentRegister } = useDepartmentUpdate()
  return (
    <>
      <h1>New Department</h1>
      <DepartmentForm onSubmitForm={onDepartmentRegister} department={null} />
    </>
  )
}

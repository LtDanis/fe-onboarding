import "./UserRegister.css"
import useUserUpdate from "../../hooks/update/useUserUpdate.tsx"
import UserForm from "./UserForm.tsx"
import { useOutletContext } from "react-router-dom"

export default function UserRegister() {
  const { onUserRegister } = useUserUpdate()
  const context: any = useOutletContext()

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-row list-header">
        <div>{context.hamburgerMenu}</div>
        <div className="header">New user</div>
      </div>
      <div className="m-5">
        <UserForm onSubmitForm={onUserRegister} user={null} />
      </div>
    </div>
  )
}

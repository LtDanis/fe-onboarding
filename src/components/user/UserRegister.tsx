import "./UserRegister.css"
import useUserUpdate from "../../hooks/update/useUserUpdate.tsx"
import UserForm from "./UserForm.tsx"

export default function UserRegister() {
  const { onUserRegister } = useUserUpdate()
  return (
    <>
      <h1>New User</h1>
      <UserForm onSubmitForm={onUserRegister} user={null} />
    </>
  )
}

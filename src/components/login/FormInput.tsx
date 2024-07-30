import "./FormInput.css"
import useUser from "../../hooks/useUser.tsx"
import { LOGIN_STATE } from "../../data/enum.tsx"

type FormInputProps = {
  id: string
  name: string
  type: string
  placeholder: string
}

export default function FormInput({
  id,
  name,
  type,
  placeholder,
}: FormInputProps) {
  const { loginState } = useUser()
  return (
    <>
      <div className="p-5">
        <input
          className="w-full login-input-field"
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required
          autoComplete={type === "password" ? "current-password" : "off"}
          disabled={loginState === LOGIN_STATE.loading}
        />
      </div>
    </>
  )
}

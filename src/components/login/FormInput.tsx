import "./FormInput.css"
import { LOGIN_STATE } from "../../data/enum.tsx"
import useLoginStore from "../../hooks/store/useLoginStore.tsx"

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
  const { loginState } = useLoginStore()
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

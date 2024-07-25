import "./FormInput.css"
import { LOGIN_STATE } from "../../enum.tsx"

type FormInputProps = {
  id: string
  name: string
  type: string
  placeholder: string
  state: LOGIN_STATE
}

export default function FormInput({
  id,
  name,
  type,
  placeholder,
  state,
}: FormInputProps) {
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
          disabled={state === LOGIN_STATE.loading}
        />
      </div>
    </>
  )
}

import "./FormInput.css"

type FormInputProps = {
  id: string
  name: string
  type: string
  placeholder: string
  state: string
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
          disabled={state === "loading"}
        />
      </div>
    </>
  )
}

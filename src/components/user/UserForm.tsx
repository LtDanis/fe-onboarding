import "./UserForm.css"
import { FormEventHandler } from "react"
import { USERS_LIST_URL } from "../../data/constants.tsx"
import { useNavigate } from "react-router-dom"

export default function UserForm({
  onSubmitForm,
}: {
  onSubmitForm: FormEventHandler<HTMLFormElement>
}) {
  const navigate = useNavigate()
  const cancelAction = () => navigate(USERS_LIST_URL)
  return (
    <form className="form-input" onSubmit={onSubmitForm}>
      <div className="p-5 form-header">General information</div>
      <div className="p-5 form-header">Comments</div>

      <div className="p-5">
        <input
          className="w-full"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          autoComplete="off"
        />
      </div>

      <div className="p-5">
        <input
          className="w-full"
          type="text"
          id="surname"
          name="surname"
          placeholder="Surname"
          required
          autoComplete="off"
        />
      </div>

      <div className="p-5">
        <input
          className="w-full"
          type="number"
          id="position"
          name="position"
          placeholder="Position"
          required
          autoComplete="off"
        />
      </div>

      <div className="p-5">
        <input
          className="w-full"
          type="number"
          id="department"
          name="department"
          placeholder="Department"
          required
          autoComplete="off"
        />
      </div>

      <div className="p-5">
        <input
          className="w-full"
          type="text"
          id="image"
          name="image"
          placeholder="Image"
          autoComplete="off"
        />
      </div>

      <div className="p-5">
        <input
          className="w-full"
          type="text"
          id="comment"
          name="comment"
          placeholder="Comments"
          autoComplete="off"
        />
      </div>

      <div className="wrap">
        <button type="submit" className="button">
          Save
        </button>
      </div>
      <div className="wrap">
        <button type="button" onClick={cancelAction} className="button">
          Cancel
        </button>
      </div>
    </form>
  )
}

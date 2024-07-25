import "./Button.css"
import { LOGIN_STATE } from "../../enum.tsx"

type ButtonInput = {
  title: string
  state: LOGIN_STATE
}

export default function Button({ title, state }: ButtonInput) {
  return (
    <>
      {state === LOGIN_STATE.loading ? (
        <div className="wrap">
          <button type="button" disabled className="disabled-button">
            <div className="loader"></div>
            &nbsp;Loading...
          </button>
        </div>
      ) : (
        <div className="wrap">
          <button type="submit" className="button">
            {title}
          </button>
        </div>
      )}
    </>
  )
}

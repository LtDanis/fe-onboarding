import "./Button.css"
import { LOGIN_STATE } from "../../data/enum.tsx"
import useUser from "../../hooks/useUser.tsx"

type ButtonInput = {
  title: string
}

export default function Button({ title }: ButtonInput) {
  const { loginState } = useUser()
  return (
    <>
      {loginState === LOGIN_STATE.loading ? (
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

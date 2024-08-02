import "./Button.css"
import { LOGIN_STATE } from "../../data/enum.tsx"
import useLoginStore from "../../hooks/store/useLoginStore.tsx"

type ButtonInput = {
  title: string
}

export default function Button({ title }: ButtonInput) {
  const { loginState } = useLoginStore()
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

import "./LoginForm.css"
import FormInput from "./FormInput.tsx"
import Button from "./Button.tsx"
import CommandLineSvg from "../../assets/CommandLine.tsx"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LOGIN_STATE } from "../../data/enum.tsx"
import useLogin from "../../hooks/useLogin.tsx"
import useLoginStore from "../../hooks/store/useLoginStore.tsx"

export default function LoginForm({ redirectTo }: { redirectTo: string }) {
  const { token, loginState } = useLoginStore()
  const navigate = useNavigate()
  const { onSignIn } = useLogin()

  useEffect(() => {
    if (token) {
      navigate(redirectTo)
    }
  }, [token])

  return (
    <div className="flex flex-col min-w-[350px] login-form">
      <h1 className="text-xl flex">
        <CommandLineSvg />
        &nbsp;OnBoarding
      </h1>
      <form className="form-input" onSubmit={onSignIn}>
        <div className="p-5 form-header">Log In</div>
        {loginState === LOGIN_STATE.error && (
          <div className="form-error">
            ⚠ Username or password is incorrect{" "}
          </div>
        )}

        <FormInput
          id={"username"}
          name={"username"}
          type={"text"}
          placeholder={"Username"}
        />

        <FormInput
          id={"password"}
          name={"password"}
          type={"password"}
          placeholder={"Password"}
        />

        <Button title={"Log In"} />
      </form>
    </div>
  )
}

import "./LoginForm.css"
import FormInput from "./FormInput.tsx"
import Button from "../generic/Button.tsx"
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
    <div className="login-form">
      <div className="flex flex-col min-w-[350px]">
        <div className="text-xl flex">
          <CommandLineSvg />
          &nbsp;OnBoarding
        </div>
        <form className="orange-top-form-header" onSubmit={onSignIn}>
          <div className="p-5 form-header">Log In</div>
          {loginState === LOGIN_STATE.error && (
            <div className="login-form-error">
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

          <Button
            title={"Log In"}
            isLoading={loginState === LOGIN_STATE.loading}
          />
        </form>
      </div>
    </div>
  )
}

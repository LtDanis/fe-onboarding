import "./LoginForm.css"
import FormInput from "./FormInput.tsx"
import Button from "./Button.tsx"
import CommandLineSvg from "../../assets/CommandLine.tsx"
import { FormEventHandler } from "react"
import { useNavigate } from "react-router-dom"
import { LOGIN_STATE } from "../../enum.tsx"

export default function LoginForm({
  onSignIn,
  state,
  redirectTo,
}: {
  onSignIn: FormEventHandler
  state: LOGIN_STATE
  redirectTo: string
}) {
  const navigate = useNavigate()
  if (state === LOGIN_STATE.success) {
    navigate(redirectTo)
  }
  return (
    <div className="flex flex-col min-w-[350px] login-form">
      <h1 className="text-xl flex">
        <CommandLineSvg />
        &nbsp;OnBoarding
      </h1>
      <form className="form-input" action="" onSubmit={onSignIn}>
        <div className="p-5 form-header">Log In</div>
        {state === LOGIN_STATE.error ? (
          <div className="form-error">
            ⚠ Username or password is incorrect{" "}
          </div>
        ) : (
          ""
        )}

        <FormInput
          id={"username"}
          name={"username"}
          type={"text"}
          placeholder={"Username"}
          state={state}
        />

        <FormInput
          id={"password"}
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          state={state}
        />

        <Button title={"Log In"} state={state} />
      </form>
    </div>
  )
}

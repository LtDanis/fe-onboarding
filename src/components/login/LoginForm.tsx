import "./LoginForm.css"
import FormInput from "./FormInput.tsx"
import Button from "./Button.tsx"
import CommandLineSvg from "../../assets/CommandLine.tsx"
import { FormEventHandler } from "react"

export default function LoginForm() {
  const onSignIn: FormEventHandler<HTMLFormElement> = (form) => {
    form.preventDefault()
    const formData = new FormData(form.currentTarget)
    const username = formData.get("username")
    const password = formData.get("password")

    console.log(username)
    console.log(password)
  }

  return (
    <div className="flex flex-col min-w-[350px] login-form">
      <h1 className="text-xl flex">
        <CommandLineSvg />
        &nbsp;OnBoarding
      </h1>
      <form className="form-input" action="" onSubmit={onSignIn}>
        <div className="p-5 form-header">Log In</div>

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

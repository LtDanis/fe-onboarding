import "./App.css"
import LoginForm from "./components/login/LoginForm.tsx"
import UserList from "./components/UserList.tsx"
import useLogin from "./hooks/useLogin.tsx"

export default function App() {
  const { onSignIn, loggedIn, state } = useLogin()
  return loggedIn ? (
    <UserList />
  ) : (
    <LoginForm onSignIn={onSignIn} state={state} />
  )
}

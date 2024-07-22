import "./App.css"
import LoginForm from "./components/login/LoginForm.tsx"
import UserList from "./components/UserList.tsx"

export default function App() {
  const isLoggedIn = false

  return isLoggedIn ? <UserList /> : <LoginForm />
}

import "./App.css"
import LoginForm from "./components/login/LoginForm.tsx"
import useLogin from "./hooks/useLogin.tsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DepartmentList from "./components/department/DepartmentList.tsx"
import UserList from "./components/user/UserList.tsx"
import Layout from "./components/generic/Layout.tsx"

export default function App() {
  const { onSignIn, handleLogout, loggedIn, state } = useLogin()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<LoginForm onSignIn={onSignIn} state={state} />}
        />
        <Route
          path="/"
          element={<Layout loggedIn={loggedIn} handleLogout={handleLogout} />}
        >
          <Route path="users" element={<UserList />} />
          <Route path="departments" element={<DepartmentList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

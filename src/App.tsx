import "./App.css"
import LoginForm from "./components/login/LoginForm.tsx"
import useLogin from "./hooks/useLogin.tsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DepartmentList from "./components/department/DepartmentList.tsx"
import UserList from "./components/user/UserList.tsx"
import Layout from "./components/generic/Layout.tsx"
import NonExistentPage from "./components/generic/NonExistentPage.tsx"
import UserRegister from "./components/user/UserRegister.tsx"
import UserEdit from "./components/user/UserEdit.tsx"
import UserDelete from "./components/user/UserDelete.tsx"
import DepartmentEdit from "./components/department/DepartmentEdit.tsx"
import DepartmentRegister from "./components/department/DepartmentRegister.tsx"

export default function App() {
  const { onSignIn, handleLogout, loggedIn, state } = useLogin()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginForm onSignIn={onSignIn} state={state} redirectTo="/users" />
          }
        />
        <Route
          path="/"
          element={<Layout loggedIn={loggedIn} handleLogout={handleLogout} />}
        >
          <Route path="users" element={<UserList />} />
          <Route path="users/register" element={<UserRegister />} />
          <Route path="users/edit" element={<UserEdit />} />
          <Route path="users/delete" element={<UserDelete />} />
          <Route path="departments" element={<DepartmentList />} />
          <Route path="departments/register" element={<DepartmentRegister />} />
          <Route path="departments/edit" element={<DepartmentEdit />} />
          <Route path="*" element={<NonExistentPage redirectTo={"/users"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

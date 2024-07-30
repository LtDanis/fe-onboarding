import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LOGIN_URL } from "./data/constants.tsx"
import LoginForm from "./components/login/LoginForm.tsx"
import Layout from "./components/generic/Layout.tsx"
import UserList from "./components/user/UserList.tsx"
import UserRegister from "./components/user/UserRegister.tsx"
import UserEdit from "./components/user/UserEdit.tsx"
import UserDelete from "./components/user/UserDelete.tsx"
import DepartmentList from "./components/department/DepartmentList.tsx"
import DepartmentRegister from "./components/department/DepartmentRegister.tsx"
import DepartmentEdit from "./components/department/DepartmentEdit.tsx"
import NonExistentPage from "./components/generic/NonExistentPage.tsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN_URL} element={<LoginForm redirectTo="/users" />} />
        <Route path="/" element={<Layout />}>
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

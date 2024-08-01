import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
  DEPARTMENTS_EDIT_URL,
  DEPARTMENTS_LIST_URL,
  DEPARTMENTS_REGISTER_URL,
  LOGIN_URL,
  USERS_DELETE_URL,
  USERS_EDIT_URL,
  USERS_LIST_URL,
  USERS_REGISTER_URL,
} from "./data/constants.tsx"
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
        <Route
          path={LOGIN_URL}
          element={<LoginForm redirectTo={USERS_LIST_URL} />}
        />
        <Route path="" element={<Layout />}>
          <Route path={USERS_LIST_URL} element={<UserList />} />
          <Route path={USERS_REGISTER_URL} element={<UserRegister />} />
          <Route path={USERS_EDIT_URL} element={<UserEdit />} />
          <Route path={USERS_DELETE_URL} element={<UserDelete />} />
          <Route path={DEPARTMENTS_LIST_URL} element={<DepartmentList />} />
          <Route
            path={DEPARTMENTS_REGISTER_URL}
            element={<DepartmentRegister />}
          />
          <Route path={DEPARTMENTS_EDIT_URL} element={<DepartmentEdit />} />
          <Route
            path="*"
            element={<NonExistentPage redirectTo={USERS_LIST_URL} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

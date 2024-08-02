export const BASE_URL = "http://localhost:3002"
export const LOGIN_URL = "/login"
export const USERS_LIST_URL = "/users"
export const USERS_REGISTER_URL = "/users/register"
export const USERS_EDIT_URL = "/users/:id/edit"
export const USERS_DELETE_URL = "/users/:id/delete"
export const USERS_EDIT_URL_WITH_ID = (id: any) => `/users/${id}/edit`
export const USERS_DELETE_URL_WITH_ID = (id: any) => `/users/${id}/delete`
export const DEPARTMENTS_LIST_URL = "/departments"
export const DEPARTMENTS_REGISTER_URL = "/departments/register"
export const DEPARTMENTS_EDIT_URL = "/departments/:id/edit"
export const DEPARTMENTS_EDIT_URL_WITH_ID = (id: any) =>
  `/departments/${id}/edit`
export const POSITIONS_LIST_URL = "/positions"

export const ITEMS_PER_PAGE = 10

import { create } from "zustand"
import { LOGIN_STATE, UPDATE_STATE } from "../data/enum.tsx"

type Store = {
  loginState: LOGIN_STATE | null
  token: string | null
  login: (loginState: LOGIN_STATE, token: string | null) => void
  logout: () => void

  userState: UPDATE_STATE | null
  updateUserState: (userState: UPDATE_STATE | null) => void
}

const useUserStore = create<Store>((set) => ({
  loginState: null,
  token: null,
  login: (loginState: LOGIN_STATE, token: string | null) =>
    set({ loginState: loginState, token: token, userState: null }),
  logout: () => set({ loginState: null, token: null, userState: null }),
  userState: null,
  updateUserState: (userState: UPDATE_STATE | null) =>
    set({
      userState: userState,
    }),
}))

export default useUserStore

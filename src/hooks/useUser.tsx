import { create } from "zustand"
import { LOGIN_STATE } from "../data/enum.tsx"

type Store = {
  loginState: LOGIN_STATE | null
  token: string | null
  login: (loginState: LOGIN_STATE, token: string | null) => void
  logout: () => void
}

const useAuthStore = create<Store>((set) => ({
  loginState: null,
  token: null,
  login: (loginState: LOGIN_STATE, token: string | null) =>
    set({ loginState: loginState, token: token }),
  logout: () => set({ loginState: null, token: null }),
}))

export default useAuthStore

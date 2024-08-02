import { create } from "zustand"
import { LOGIN_STATE } from "../../data/enum.tsx"
import { persist } from "zustand/middleware"

type LoginStore = {
  loginState: LOGIN_STATE | null
  token: string | null
  login: (loginState: LOGIN_STATE, token: string | null) => void
  logout: () => void
}

const useLoginStore = create<LoginStore>()(
  persist(
    (set) => ({
      loginState: null,
      token: null,
      login: (loginState: LOGIN_STATE, token: string | null) =>
        set({ loginState: loginState, token: token }),
      logout: () => set({ loginState: null, token: null }),
    }),
    {
      name: "zustand-login-state-storage",
    },
  ),
)

export default useLoginStore

import { create } from "zustand"
import { UPDATE_STATE } from "../../data/enum.tsx"
import { persist } from "zustand/middleware"

type UserStore = {
  userState: UPDATE_STATE | null
  updateUserState: (userState: UPDATE_STATE | null) => void
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userState: null,
      updateUserState: (userState: UPDATE_STATE | null) =>
        set({
          userState: userState,
        }),
    }),
    {
      name: "zustand-user-state-storage",
    },
  ),
)

export default useUserStore

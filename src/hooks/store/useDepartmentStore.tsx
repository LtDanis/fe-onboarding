import { create } from "zustand"
import { UPDATE_STATE } from "../../data/enum.tsx"
import { persist } from "zustand/middleware"

type DepartmentStore = {
  departmentState: UPDATE_STATE | null
  updateDepartmentState: (userState: UPDATE_STATE | null) => void
}

const useDepartmentStore = create<DepartmentStore>()(
  persist(
    (set) => ({
      departmentState: null,
      updateDepartmentState: (departmentState: UPDATE_STATE | null) =>
        set({
          departmentState: departmentState,
        }),
    }),
    {
      name: "zustand-department-state-storage",
    },
  ),
)

export default useDepartmentStore

export interface User {
  id: string
  name: string
  surname: string
  image: string
  positionId: number
  departmentId: number
  comment: string
}

export interface Department {
  id: number
  name: string
}

export interface Position {
  id: number
  name: string
}

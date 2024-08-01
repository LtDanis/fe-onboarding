import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function NonExistentPage({
  redirectTo,
}: {
  redirectTo: string
}) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(redirectTo)
  })
  return <>404 Not found</>
}

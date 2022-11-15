import { Navigate, useLocation } from "react-router-dom"

export default function Redirect() {
  const location = useLocation()
  console.log(location, 128282)
  const pathname = location.pathname.slice("/redirect".length) || "/"
  // 还需要传递 路径参数
  return <Navigate to={pathname} replace />
}

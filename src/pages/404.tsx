import { Result, Button } from "antd"
import { useNavigate } from "react-router-dom"
export default function Page400() {
  const navigate = useNavigate()
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => navigate("/", { replace: true })}>
          Back Home
        </Button>
      }
    />
  )
}

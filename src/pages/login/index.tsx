import { Input, Button, message, notification, Checkbox, Divider, Dropdown, Menu } from "antd"

import { User, Lock, TwitterLogo, FacebookLogo, GoogleLogo, GithubLogo, Eye, EyeSlash, Translate } from "phosphor-react"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"
import { StaffApi } from "../../api"
import ChangeLanguage from "../../components/changeLanguage"
import { createFormItems } from "../../components/form/formConfig"
import { useThemeContext } from "../../context"

export function timeFix() {
  const hour = new Date().getHours()
  return hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening"
}

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("admin")
  const [password, setPassword] = useState("admin")
  const [showPassword, setShowPassword] = useState(false)
  const [phone] = useState("")
  const [code] = useState("")

  const [loading] = useState(false) // login button loading
  const [tabKey] = useState("username")

  const { theme } = useThemeContext()
  const { primaryColor } = theme

  const iconSize = 26
  const thirdParty = [{ icon: GoogleLogo }, { icon: TwitterLogo }, { icon: FacebookLogo }, { icon: GithubLogo }]

  const handleLogin = async () => {
    let res: any //{ accessToken: string; refreshToken: string }
    try {
      if (tabKey == "username") {
        if (!username) {
          return message.error("Please Input Username")
        }
        if (!password) {
          return message.error("Please Input Password")
        }
        res = await StaffApi.login({ type: "username", username, password })
      } else {
        if (!phone) {
          return message.error("Please Input Phone")
        }
        if (!code) {
          return message.error("Please Input Code")
        }
        res = await StaffApi.login({ type: "phone", phone, code })
      }
      localStorage.setItem("accessToken", res.accessToken)
      localStorage.setItem("refreshToken", res.refreshToken)
      navigate("/", { replace: true })
      setTimeout(() => {
        notification.success({
          message: "👏👏👏Welcome👏👏👏",
          description: `${timeFix()},  Welcome Back `,
        })
      }, 1000)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    // userlayout
    <div
      className="w-full h-full flex items-center justify-center relative"
      style={{
        background: "linear-gradient(180deg, #a1dff5 0%, #e4eff8 100%)",
      }}
    >
      <div className="absolute top-0 right-0 w-full flex items-center justify-end ">
        <ChangeLanguage>
          <div className="p-3 mr-4 flex items-center cursor-pointer">
            <Translate size={32} weight="fill" />
          </div>
        </ChangeLanguage>
      </div>

      {/* login content */}
      <div className="m-3 md:m-0 w-full md:w-max p-10 px-4 sm:px-10 rounded-2xl bg-white">
        {createFormItems([
          {
            children: <h1 className=" text-center text-3xl">Gganbu Admin</h1>,
          },
          {
            required: true,
            children: (
              <Input
                className=" md:w-[350px] max-w-full"
                allowClear
                size="large"
                placeholder="Username"
                prefix={<User size={20} />}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onPressEnter={() => handleLogin()}
              />
            ),
          },
          {
            required: true,
            children: (
              <Input
                className=" md:w-[350px] max-w-full"
                size="large"
                type={!showPassword && "password"}
                placeholder="Password"
                prefix={<Lock size={20} />}
                suffix={
                  (showPassword && (
                    <Eye className=" cursor-pointer" onClick={() => setShowPassword(!showPassword)} size={20} />
                  )) || (
                    <EyeSlash className=" cursor-pointer" onClick={() => setShowPassword(!showPassword)} size={20} />
                  )
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onPressEnter={() => handleLogin()}
              />
            ),
          },
          {
            children: (
              <>
                <div className="flex items-center justify-between" style={{ color: primaryColor }}>
                  <Checkbox style={{ color: primaryColor }}>
                    {/* 自动登录 */}
                    Remember Me
                  </Checkbox>
                  <div className=" cursor-not-allowed">
                    {/* 忘记密码 */}
                    Forgot Password
                  </div>
                </div>
              </>
            ),
          },
          {
            children: (
              <Button block loading={loading} size="large" type="primary" onClick={() => handleLogin()}>
                Sign In
              </Button>
            ),
          },
          {
            children: (
              <>
                <Divider style={{ margin: 0 }}>or</Divider>
              </>
            ),
          },
          {
            className: "mb-0",
            children: (
              <div className=" flex justify-between">
                {thirdParty.map((item) => {
                  return (
                    <>
                      <div className=" bg-gray-200 rounded p-2 flex items-center cursor-pointer cursor-not-allowed">
                        <item.icon size={iconSize} weight="fill" color={primaryColor} />
                      </div>
                    </>
                  )
                })}
              </div>
            ),
          },
        ])}

        {/* <Tabs type="card" centered onChange={(key) => setTabKey(key)}>
              <Tabs.TabPane key="username" tab="Username">
                <Input
                  className="mb-4"
                  allowClear
                  size="large"
                  placeholder="Username"
                  prefix={<User size={20} />}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onPressEnter={() => handleLogin()}
                />
                <Input
                  allowClear
                  size="large"
                  type="password"
                  placeholder="Password"
                  prefix={<Lock size={20} />}
                  suffix={<Lock size={20} />}
                  className="mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onPressEnter={() => handleLogin()}
                />
              </Tabs.TabPane>
              <Tabs.TabPane key="phone" tab="Phone">
                <Input
                  className="mb-4"
                  allowClear
                  size="large"
                  placeholder="Phone"
                  prefix={<DeviceMobileSpeaker size={20} />}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onPressEnter={() => handleLogin()}
                />
                <div className="flex items-center mb-4">
                  <Input
                    allowClear
                    size="large"
                    placeholder="Code"
                    prefix={<EnvelopeSimple size={20} />}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onPressEnter={() => handleLogin()}
                  />
                  <Button size="large" className="ml-2 min-h-full" onClick={() => getCode()}>
                    {(countState.smsSendBtn && `${countState.time}s`) || "Get Code"}
                  </Button>
                </div>
              </Tabs.TabPane>
            </Tabs> */}
      </div>

      {/* footer */}

      {/* <div className="fixed bottom-0 w-full p-10">
        <div className="mb-2 flex justify-center items-center">
          <a className="mr-10">Help</a>
          <a className="mr-10">Policy</a>
          <a>Service</a>
        </div>
        <div className=" flex justify-center">Copyright &copy; 2022</div>
      </div> */}
    </div>
  )
}
export default Login

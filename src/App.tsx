import { BrowserRouter as Router, useRoutes } from "react-router-dom"
import { useLocation, matchRoutes, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { ConstantRoutes, createRoutesWrapper, createAuthRoutes, IRoute, routes, router } from "./router"

import { TagContextProvider, useTagContext, useUserContext } from "./context"
import { UserContextProvider, ThemeContextProvider } from "./context"
import { AntdConfigProvider } from "./context"

import { StaffApi } from "./api"

import NProgress from "nprogress" // 进度条插件
import "nprogress/nprogress.css"

import "./config/antd"
import "./config/locales"

import zhCN from "antd/es/locale/zh_CN"
import { localLanguage } from "./config/locales"
import { Provider } from "react-redux"
import store, { persistor } from "./store"
import { PersistGate } from "redux-persist/integration/react"

/**
 * here is the entry of router.
 * according to the auth to set the accessible route
 */
const RouterAuth = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { tags, setTags } = useTagContext()
  const { user, setUser } = useUserContext()

  const routeAuth = user?.roleInfo?.routeAuth || []
  const username = user?.username

  const authRoutes = username != "admin" ? createAuthRoutes(routeAuth) : routes

  const authRoutesWrapper = createRoutesWrapper(authRoutes)
  console.log(authRoutes, authRoutesWrapper, "看看对应的路由")
  const Element = useRoutes(authRoutesWrapper as any)

  const { pathname } = location

  const getStaffByToken = async () => {
    try {
      const res: unknown = await StaffApi.getStaffByToken()
      console.log(res, "看看返回的信息，getStaffByToken")
      setUser(res)
    } catch (error) {
      localStorage.removeItem("accessToken")
      navigate("/login")
      console.log(error)
    }
  }

  const routerBeforeEach = async () => {
    try {
      NProgress.start()

      if (!localStorage.getItem("accessToken")) {
        // 常量的白名单
        if (ConstantRoutes.find((item) => item.path == pathname)) {
          return
        }
        return navigate("/login")
      }
      console.log(user, "有用户信息吗")
      if (!user._id) {
        await getStaffByToken()
      }
      const matched = matchRoutes(authRoutesWrapper as any, location)
      console.log("matched", matched)
      if (!matched) {
        console.log("no matched")
        return navigate("/")
      }

      const matchRoute: IRoute = matched[matched.length - 1]?.route
      if (!matchRoute.hidden && !tags.find((i) => i.path == matchRoute.path)) {
        setTags([...tags, matchRoute])
      }
    } catch (error) {
      console.log(error, 1111)
    } finally {
      NProgress.done()
    }
  }

  useEffect(() => {
    console.log(location.pathname, "pathname 换了")
    routerBeforeEach()
  }, [location.pathname])

  /**
   * if local has no loginToken, then need to login
   */
  console.log(user, 19191, "user")
  return Element
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContextProvider>
          <AntdConfigProvider locale={localLanguage === "zh" && zhCN}>
            <UserContextProvider>
              <TagContextProvider>
                <div className="h-screen">
                  <Router>
                    <RouterAuth />
                  </Router>
                </div>
              </TagContextProvider>
            </UserContextProvider>
          </AntdConfigProvider>
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  )
}

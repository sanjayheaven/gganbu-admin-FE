import NotFound from "../pages/404"
import PageView from "../layouts/layoutComponents/pageView"
import { createBrowserRouter, Navigate } from "react-router-dom"
import { IRoute } from "./type"
import { Gauge, User, Printer } from "phosphor-react"
import { SuspenseWrapper } from "./lazy"
import { lazy } from "react"
import { ConstantRouter } from "./constant"
import ErrorPage from "./ErrorPage"
import BasicLayout from "../layouts"
import Redirect from "../pages/redirect"

const LoginLogger = SuspenseWrapper(lazy(() => import("../pages/logger/loginLogger")))
const DashBoard = SuspenseWrapper(lazy(() => import("../pages/dashboard/index")))
const StaffInfo = SuspenseWrapper(lazy(() => import("../pages/staff/staffInfo")))
const RoleInfo = SuspenseWrapper(lazy(() => import("../pages/staff/roleInfo")))

import i18n from "../config/locales"
const { t } = i18n

export const router = createBrowserRouter([
  ...ConstantRouter.map((i) => ({ ...i, errorElement: <ErrorPage /> })),
  {
    path: "/",
    element: <BasicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "redirect/*",
        element: <Redirect />,
      },
      {
        path: "dashboard",
        element: <DashBoard />,
      },
    ],
  },
])

// Note: Path shoule be FULL from / to make path is only
export const routes: IRoute[] = [
  { path: "/", element: <Navigate to="/dashboard" />, hidden: true },
  {
    path: "/dashboard",
    title: t("router.DASHBOARD"),
    element: <DashBoard />,
    icon: <Gauge />,
    affix: true,
    keepAlive: true,
    children: [
      {
        title: t("router.DASHBOARD"),
        path: "/dashboard/console",
        element: <DashBoard />,
        keepAlive: true,
      },
    ],
  },
  {
    path: "/staff",
    title: t("router.STAFF_MANAGE"),
    element: <PageView />,
    icon: <User />,
    children: [
      {
        path: "/staff/staffInfo",
        title: t("router.STAFF_LIST"),
        element: <StaffInfo />,
        keepAlive: true,
      },
      {
        path: "/staff/roleInfo",
        title: t("router.ROLE_LIST"),
        element: <RoleInfo />,
        keepAlive: true,
      },
    ],
  },
  {
    path: "/logger",
    title: t("router.LOGGER_MANAGE"),
    element: <PageView />,
    icon: <Printer />,
    children: [
      {
        path: "/logger/login",
        title: t("router.LOGGER_LOGIN"),
        element: <LoginLogger />,
        keepAlive: true,
      },
    ],
  },
  // {
  //   path: "/security",
  //   title: t("router.SECURITY_MANAGE"),
  //   element: <PageView />,
  //   icon: <ShieldCheck />,
  //   children: [
  //     {
  //       path: "/security/whiteIpInfo",
  //       title: t("router.IP_WHITELIST"),
  //       element: <IpWhitelist />,
  //       keepAlive: true,
  //     },
  //     {
  //       path: "/security/whiteAccountInfo",
  //       title: t("router.ACCOUNT_WHITELIST"),
  //       element: <AccountWhitelist />,
  //       keepAlive: true,
  //     },
  //   ],
  // },
  { path: "*", title: "Not Found", hidden: true, element: <NotFound /> },
]

export const routesForRoleTree = routes.slice(1, routes.length - 1)

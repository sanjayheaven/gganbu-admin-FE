import type { IRoute } from "./type"
import { routes } from "./routes"
import Login from "../pages/login"
import BasicLayout from "../layouts"
import { House } from "phosphor-react"
import InitAdmin from "../pages/login/initAdmin"
import Redirect from "../pages/redirect"

export const ConstantRoutes: IRoute[] = [
  { path: "/login", element: <Login /> },
  { path: "/initAdmin", element: <InitAdmin /> },
  // { path: "/", title: "Admin", element: <BasicLayout /> },
]
export { routes as AsyncRoutes } // alias AsyncRoutes

export const createRoutesWrapper = (authRoutes: IRoute[]): IRoute[] => {
  return [
    ...ConstantRoutes,
    {
      path: "/",
      icon: <House />,
      element: <BasicLayout />,
      children: [
        {
          path: "/redirect/*",
          hidden: true,
          element: <Redirect />,
        },
        ...authRoutes,
      ],
      hidden: true, // hidden for tags
    },
  ]
}
export const routesWrapper: IRoute[] = createRoutesWrapper(routes)

/** filter path of menu who has sub routes */
export const rootSubmenuKeys = routes.map((item) => (item?.children?.length && item.path) || "").filter(Boolean)

/** flat the routes */
const createFlatRoutes = (routes: IRoute[]): IRoute[] => {
  return routes.reduce((acc, item) => {
    acc.push(item)
    const children = createFlatRoutes(item.children || [])
    return [...acc, ...children]
  }, [])
}

export const flatRoutes = createFlatRoutes(routes)
export const keepAliveRoutes = flatRoutes.filter((i) => i.keepAlive)
export const keepAliveRouteKeys = keepAliveRoutes.map((i) => i.path)

/**
 * routeAuth is an array of route path that user can access
 */
export const createAuthRoutes = (routeAuth: string[]): IRoute[] => {
  return routes.reduce((acc: IRoute[], route: IRoute) => {
    if (route.path == "*") {
      acc.push(route)
      return acc
    }
    if (route.children) {
      const newChildren = route.children?.filter((i) => routeAuth.includes(i.path))
      if (newChildren.length) {
        acc.push({ ...route, children: newChildren })
      }
      return acc
    }
    if (!routeAuth.includes(route.path)) return acc
    acc.push(route)
    return acc
  }, [])
}

export * from "./routes"

export * from "./type"

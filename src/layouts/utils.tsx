import type { MenuProps } from "antd"
import { CSSProperties } from "react"
import { IRoute } from "../router"

export interface ILayoutStyle {
  siderStyle?: CSSProperties
  headerStyle?: CSSProperties
  contentStyle?: CSSProperties
  headerWrapperStyle?: CSSProperties
}
export interface ILayoutClass {
  sider?: string
  header?: string
  content?: string
  headerWrapper?: string

  siderClass?: string
  headerClass?: string
  contentClass?: string
  headerWrapperClass?: string
}

export const getMenuItems = (routes?: IRoute[]): MenuProps["items"] => {
  return routes
    .map((route) => {
      if (route.hidden) return null
      return {
        key: route.path,
        icon: route.icon,
        children: route?.children?.length ? getMenuItems(route.children) : null,
        label: route.title,
      }
    })
    .filter((i) => i)
}

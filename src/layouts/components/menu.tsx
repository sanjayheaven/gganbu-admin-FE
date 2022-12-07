import type { MenuProps } from "antd"
import { Menu as AntMenu } from "antd"
import { useEffect, useState } from "react"
import { routes, rootSubmenuKeys, flatRoutes, IRoute, createAuthRoutes } from "../../router"
import { useLocation, useNavigate } from "react-router-dom"
import { useThemeContext, useUserContext } from "../../context"
import { getMenuItems } from "../utils"

export default function Menu(props: MenuProps) {
  const { user } = useUserContext()
  const { theme } = useThemeContext()
  const { menuStyle, layout, isMobile } = theme

  const routeAuth = user?.roleInfo?.routeAuth || []
  const authRoutes = user?.username != "admin" ? createAuthRoutes(routeAuth) : routes

  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const route: IRoute = flatRoutes.find((i) => i.path == pathname) || {}
  const subRoute: IRoute =
    routes.find((i) => i.path == pathname || i?.children?.find((ch) => ch.path == pathname)) || {}
  // 怎么解决 order/:id 这种样子的 动态路由, 不解决从人出发

  // highlight the selected menu item
  const [selectedKeys, setSelectedKeys] = useState([route.path])
  const [openKeys, setOpenKeys] = useState([subRoute.path])

  useEffect(() => {
    const { collapsed } = theme
    for (const item of routes) {
      if (item?.path == pathname) {
        setOpenKeys([])
      } else if (item?.children?.some((i) => i.path == pathname)) {
        if (props.mode == "inline") {
          if (collapsed) {
            // if (collapsed && ["side", "mix"].includes(theme.layout)) {
            // for side menu, not for mobile layout drawer menu
            setOpenKeys([])
          } else {
            setOpenKeys([item.path])
          }
        } else {
          setOpenKeys([])
        }
        break
      }
    }
    setSelectedKeys([pathname])
  }, [pathname, theme, props.mode])

  // only when click menuItem, not includes submenu
  const handleClickMenuItem: MenuProps["onClick"] = (menuInfo) => {
    const { key, keyPath } = menuInfo
    setSelectedKeys([key])
    if (keyPath?.length <= 1) {
      setOpenKeys([])
    }
    navigate(key)
    props?.onClick?.(menuInfo)
  }

  /** openKeys only controlable in non TOP layout and non ISMOBIEL  */
  const onOpenChange = (keys: string[]) => {
    // if (keys[0] == "rc-menu-more") return
    const latestOpenKey = keys.find((key) => !openKeys.includes(key))
    console.log(latestOpenKey, rootSubmenuKeys)
    if (!rootSubmenuKeys.includes(latestOpenKey)) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
    if (!latestOpenKey) return
    /**
     * highlight/redirec the first item of Submenu when open
     *
     * if the menu is in the header, then will not navigate,
     * or when menu collapsed
     */
    if (!theme.collapsed && layout != "top") {
      const lastOpenSubmenu = routes.find((i) => i.path === latestOpenKey)
      if (lastOpenSubmenu?.children) {
        const firstItemPath = lastOpenSubmenu.children[0].path
        setSelectedKeys([firstItemPath])
        navigate(firstItemPath)
      }
    }
  }
  return (
    <AntMenu
      mode={(["top"].includes(theme.layout) && "horizontal") || "inline"}
      theme={(menuStyle == "dark" && "dark") || "light"}
      selectedKeys={selectedKeys}
      defaultOpenKeys={(isMobile && openKeys) || undefined}
      openKeys={(layout != "top" && !isMobile && openKeys) || undefined}
      onOpenChange={(layout != "top" && !isMobile && onOpenChange) || undefined}
      items={getMenuItems(authRoutes)}
      {...props}
      onClick={handleClickMenuItem}
    />
  )
}

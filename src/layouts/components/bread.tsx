import { Dropdown, Menu, MenuProps } from "antd"
import { IRoute, routesWrapper } from "../../router"
import { Link, matchRoutes, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { useThemeContext } from "../../context"
import { CaretDown } from "phosphor-react"

export default function Bread() {
  const { theme } = useThemeContext()
  const location = useLocation()
  const [matchedRoutes, setMatchedRoutes] = useState([])

  useEffect(() => {
    const matchedRoutes = matchRoutes(routesWrapper, location)
    setMatchedRoutes(matchedRoutes)
  }, [location.pathname, location])

  const getChildrenItems = (routes?: IRoute[]): MenuProps["items"] => {
    return routes
      ?.map((route) => {
        if (route.hidden) return null
        // if (route.path == location.pathname) return null
        return {
          key: route.path,
          icon: route.icon,
          children: route?.children,
          label: <Link to={route.path}>{route.title}</Link>,
          disabled: location.pathname == route.path,
          expandIcon: null,
        }
      })
      .filter((i) => i)
  }

  return (
    <div className=" select-none flex items-center text-[#00000073]">
      {matchedRoutes.map((item, index) => {
        const route: IRoute = item.route
        let menuItems = []
        if (route.path != "/") {
          menuItems = getChildrenItems(route.children || [])
          // if only has a children, then no need to show menu ,but if to ,show disabled one & other one
          if (menuItems.length == 1) {
            menuItems = []
          }
        }

        return (
          <div className=" flex items-center cursor-pointer" key={route.path}>
            <Dropdown trigger={["hover"]} menu={{ items: menuItems }}>
              <div className=" flex items-center gap-1">
                {(theme.showBreadIcon || route.path == "/") && route.icon}
                {route.title}
                {menuItems.length > 1 && <CaretDown />}
              </div>
            </Dropdown>
            <span className=" px-2">{matchedRoutes.length - 1 != index && <span>/</span>}</span>
          </div>
        )
      })}
    </div>
  )
}

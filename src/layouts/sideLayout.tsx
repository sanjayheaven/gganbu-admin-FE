import { useMemo } from "react"
import { Layout } from "antd"
import { useOutlet } from "react-router-dom"
import { useTagContext, useThemeContext } from "../context"
import { keepAliveRouteKeys } from "../router"
import KeepAlive from "../components/keepAlive"
import { ILayoutClass } from "./utils"

import { Sider, Header, Content, Footer } from "./layoutComponents"

export default function SideLayout() {
  const { tags } = useTagContext()
  const { theme } = useThemeContext()
  const outlet = useOutlet()

  const { collapsed, menuStyle, menuStyleBgColor } = theme

  const layoutClass: ILayoutClass = useMemo(() => {
    const { contentWidth, fixedHeader, showTags } = theme
    let content = "m-4"
    let sider = ""
    let header = ""
    let headerWrapper = ""
    sider += "overflow-y-auto overflow-x-hidden fixed top-0 left-0 bottom-0"
    header += "p-0 w-full flex justify-between items-center bg-white px-5"
    content += (contentWidth == "fixed" && " mx-auto px-4") || ""
    content += (contentWidth == "fixed" && " xl:w-[1200px]") || ""
    if (!fixedHeader) return { sider, content, header, headerWrapper }
    // fixedheader
    headerWrapper += "z-50 fixed top-0 w-full"
    content += (showTags && " mt-[112px]") || " mt-[80px]" // tags boder-width 1px
    return { sider, content, header, headerWrapper }
  }, [theme])

  return (
    <Layout>
      <Sider
        className={layoutClass.sider}
        style={{
          position: "fixed",
          boxShadow: "2px 0 8px 0 rgb(29 35 41 / 5%)",
          ...(menuStyle == "transparent" && { backgroundColor: "transparent" }),
          ...(menuStyle == "white" && { backgroundColor: "white" }),
          ...(menuStyle == "dark" && { backgroundColor: menuStyleBgColor }),
        }}
      />
      <Layout
        className="min-h-screen"
        style={{
          marginLeft: (!collapsed && "200px") || "80px",
          transition: "all 0.2s",
        }}
      >
        <Header headerWrapperClass={layoutClass.headerWrapper} className={layoutClass.header} />
        <Content className={layoutClass.content}>
          <KeepAlive
            animate={theme.animateName}
            keys={keepAliveRouteKeys.filter((key) => tags.find((i) => i.path == key))}
          >
            {outlet}
          </KeepAlive>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  )
}

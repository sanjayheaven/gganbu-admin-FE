import { useMemo } from "react"
import { Layout } from "antd"
import { useOutlet } from "react-router-dom"
import { useTagContext, useThemeContext } from "../context"
import { keepAliveRouteKeys } from "../router"
import KeepAlive from "../components/keepAlive"
import type { ILayoutStyle } from "./utils"

import { Sider, Header, Content, Footer } from "./layoutComponents"

export default function SideLayout() {
  const { tags } = useTagContext()
  const { theme } = useThemeContext()
  const outlet = useOutlet()

  const layoutStyle: ILayoutStyle = useMemo((): ILayoutStyle => {
    const headerStyle: ILayoutStyle["headerStyle"] = {
      padding: 0,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "white",
      paddingLeft: 20,
      paddingRight: 20,
    }

    let contentStyle: ILayoutStyle["contentStyle"] = { margin: 16 }
    if (theme.contentWidth == "fixed") {
      contentStyle = {
        ...contentStyle,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: 16,
        paddingRight: 16,
        // content += (theme.contentWidth == "fixed" && " xl:w-[1200px]") || ""
      }
    }
    const siderStyle: ILayoutStyle["siderStyle"] = {
      overflowY: "auto",
      overflowX: "hidden",
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      boxShadow: "2px 0 8px 0 rgb(29 35 41 / 5%)",
      ...(theme.menuStyle == "transparent" && { backgroundColor: "transparent" }),
      ...(theme.menuStyle == "white" && { backgroundColor: "white" }),
      ...(theme.menuStyle == "dark" && { backgroundColor: theme.menuStyleBgColor }),
    }

    let headerWrapperStyle: ILayoutStyle["headerWrapperStyle"] = {}

    // non fixed header
    if (!theme.fixedHeader) {
      return { siderStyle, headerStyle, contentStyle, headerWrapperStyle }
    }

    headerWrapperStyle = {
      ...headerWrapperStyle,
      boxShadow: " 0 1px 4px 0 rgb(0 21 41 / 12%)",
      width: (!theme.collapsed && "calc(100% - 200px)") || "calc(100% - 80px)",
      transition: "all 0.2s",
    }

    contentStyle = { ...contentStyle, marginTop: theme.showTags ? 112 : 80 } // tags boder-width 1px

    return {
      siderStyle,
      headerStyle,
      contentStyle,
      headerWrapperStyle: { ...headerWrapperStyle, position: "fixed", top: 0 },
    }
  }, [theme])

  return (
    <Layout>
      <Sider style={layoutStyle.siderStyle} />
      <Layout
        className="min-h-screen"
        style={{
          marginLeft: (!theme.collapsed && "200px") || "80px",
          transition: "all 0.2s",
        }}
      >
        <Header headerStyle={layoutStyle.headerStyle} headerWrapperStyle={layoutStyle.headerWrapperStyle} />
        <Content style={layoutStyle.contentStyle}>
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

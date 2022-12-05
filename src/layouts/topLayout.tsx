import { Layout } from "antd"
import { Outlet } from "react-router-dom"
import type { ILayoutStyle } from "./utils"

import { Header, Content, Footer } from "./layoutComponents"
import { useMemo } from "react"
import { useThemeContext } from "../context"

export default function TopLayout() {
  const { theme } = useThemeContext()

  const layoutStyle: ILayoutStyle = useMemo((): ILayoutStyle => {
    let headerStyle: ILayoutStyle["headerStyle"] = {
      padding: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "content-box",
    }
    headerStyle = {
      ...headerStyle,
      ...{
        backgroundColor:
          theme.menuStyle == "transparent"
            ? "transparent"
            : theme.menuStyle == "dark"
            ? theme.menuStyleBgColor
            : "white",
      },
    }
    let headerWrapperStyle: ILayoutStyle["headerWrapperStyle"] = {}

    let contentStyle: ILayoutStyle["contentStyle"] = { margin: 16 }
    if (theme.contentWidth === "fixed") {
      contentStyle = {
        ...contentStyle,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: 16,
        paddingRight: 16,
        maxWidth: 1200,
      }
    }

    if (!theme.fixedHeader) {
      return { headerStyle, headerWrapperStyle, contentStyle }
    }

    headerWrapperStyle = { ...headerWrapperStyle, zIndex: 50, position: "fixed", top: 0, width: "100%" }
    contentStyle = { ...contentStyle, marginTop: theme.showTags ? 112 : 80 } // tags boder-width 1px

    return { headerStyle, headerWrapperStyle, contentStyle }
  }, [theme])

  return (
    <Layout className="min-h-screen">
      <Header headerStyle={layoutStyle.headerStyle} headerWrapperStyle={layoutStyle.headerWrapperStyle} />
      <Content style={layoutStyle.contentStyle}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  )
}

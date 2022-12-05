import { Layout } from "antd"
import { useMemo } from "react"
import { Outlet } from "react-router-dom"
import { useThemeContext } from "../context"
import { ILayoutClass, ILayoutStyle } from "./utils"
import { Sider, Header, Content, Footer } from "./layoutComponents"

export default function MixLayout() {
  const { theme } = useThemeContext()
  const { fixedHeader, showTags, collapsed, menuStyle, menuStyleBgColor } = theme

  const layoutStyle: ILayoutStyle = useMemo((): ILayoutStyle => {
    const headerStyle: ILayoutStyle["headerStyle"] = {
      padding: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      paddingRight: 20,
    }

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
    let headerWrapperStyle: ILayoutStyle["headerWrapperStyle"] = {}

    const siderStyle: ILayoutStyle["siderStyle"] = {
      boxShadow: "2px 0 8px 0 rgb(29 35 41 / 5%)",
      ...(fixedHeader && {
        position: "fixed",
        ...((showTags && {
          top: 96,
          height: "calc(100vh - 96px)",
        }) || { top: 64, height: "calc(100vh - 64px)" }),
      }),
      ...(menuStyle == "transparent" && {
        backgroundColor: "transparent",
      }),
      ...(menuStyle == "white" && { backgroundColor: "white" }),
      ...(menuStyle == "dark" && { backgroundColor: menuStyleBgColor }),
    }

    if (!fixedHeader) return { headerStyle, headerWrapperStyle, contentStyle, siderStyle }

    headerWrapperStyle = { ...headerWrapperStyle, zIndex: 50, position: "fixed", top: 0, width: "100%" }

    return { headerStyle, headerWrapperStyle, contentStyle, siderStyle }
  }, [theme])

  return (
    <Layout style={{ height: "100%" }}>
      <Header headerStyle={layoutStyle.headerStyle} headerWrapperStyle={layoutStyle.headerWrapperStyle} />
      <Layout
        style={{
          minHeight: "max-content",
          ...(fixedHeader && {
            ...((showTags && { marginTop: 96 }) || { marginTop: 64 }),
          }),
        }}
      >
        <Sider style={layoutStyle.siderStyle} />
        <Layout
          style={{
            transition: "all 0.2s",
            // backgroundColor: "transparent",
            ...(fixedHeader && {
              position: "fixed",
              overflow: "scroll",
              ...((collapsed && {
                width: "calc(100% - 80px + 16px)",
                marginLeft: 80,
              }) || {
                width: "calc(100% - 200px + 16px)",
                marginLeft: 200,
              }),
              ...((showTags && {
                top: 96,
                height: "calc(100vh - 96px + 16px)",
              }) || { top: 64, height: "calc(100vh - 64px + 16px)" }),
            }),
          }}
        >
          <Content style={layoutStyle.contentStyle}>
            <Outlet />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  )
}

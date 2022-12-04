import { Layout } from "antd"
import { Outlet } from "react-router-dom"
import { ILayoutClass } from "./utils"

import { Header, Content, Footer } from "./layoutComponents"
import { useMemo } from "react"
import { useThemeContext } from "../context"

export default function MobileLayout() {
  const { theme } = useThemeContext()

  const layoutClass: ILayoutClass = useMemo(() => {
    const { contentWidth, showTags, fixedHeader } = theme
    let content = "m-4"
    const sider = ""
    let header = ""
    let headerWrapper = ""
    header += "p-0 w-full flex justify-between items-center box-content"
    content += (contentWidth == "fixed" && " mx-auto px-4") || ""
    content += (contentWidth == "fixed" && " xl:w-[1200px]") || ""
    if (!fixedHeader) return { sider, content, header, headerWrapper }
    // fixedheader
    headerWrapper += "z-50 fixed top-0 w-full"
    content += (showTags && " mt-[112px]") || " mt-[80px]" // tags boder-width 1px

    return { sider, content, header, headerWrapper }
  }, [theme])

  return (
    <Layout className="min-h-screen ">
      <Header className={layoutClass.header} headerWrapperClass={layoutClass.headerWrapper} />
      <Content className={layoutClass.content}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  )
}

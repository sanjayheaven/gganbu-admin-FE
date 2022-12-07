import type { LayoutProps } from "antd"
import type { CSSProperties } from "react"

import { Layout } from "antd"
import { useThemeContext } from "../../context"
import { Menu, Logo, Tags, Bread, Avatar } from "../components"
import { ILayoutStyle } from "../utils"

export default function Header({
  headerWrapperStyle,
  headerStyle,
}: {
  headerWrapperStyle?: CSSProperties
  headerStyle?: CSSProperties
} & LayoutProps) {
  const { theme } = useThemeContext()
  const commonHeaderWrapperStyle: ILayoutStyle["headerWrapperStyle"] = {
    zIndex: 50,
    ...(theme.fixedHeader && { boxShadow: " 0 1px 4px 0 rgb(0 21 41 / 12%)" }),
  }
  return (
    <div style={{ ...headerWrapperStyle, ...commonHeaderWrapperStyle }}>
      <Layout.Header style={{ ...headerStyle }}>
        <>{theme.layout == "side" && <>{(theme.showBread && <Bread />) || <div></div>}</>}</>
        <>
          {theme.layout == "mix" && (
            <div className=" flex items-center">
              {theme.showLogo && <Logo />}
              <div className="pl-5">{(theme.showBread && <Bread />) || <div></div>}</div>
            </div>
          )}
        </>

        <>
          {theme.layout == "top" && (
            <>
              {theme.showLogo && <Logo />}
              <Menu style={{ backgroundColor: "transparent" }} className="w-full border-0" />
            </>
          )}
        </>

        <Avatar />
      </Layout.Header>

      <>{theme.showTags && <Tags />}</>
    </div>
  )
}

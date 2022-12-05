import type { LayoutProps } from "antd"
import { Layout } from "antd"
import { List } from "phosphor-react"
import type { CSSProperties } from "react"
import { useThemeContext } from "../../context"
import { Menu, Logo, Tags, Bread, Avatar } from "../components"
import { ILayoutStyle } from "../utils"

export default function MobileHeader({
  headerWrapperClass,
  isMobile = false,
  headerWrapperStyle,
  headerStyle,
}: {
  isMobile?: boolean
  headerWrapperClass?: string
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
        {/* <>{theme.layout == "side" && <>{(theme.showBread && <Bread />) || <div></div>}</>}</> */}
        {/* <>
          {theme.layout == "mix" && (
            <div className=" flex items-center">
              {theme.showLogo && <Logo />}
              <div className="pl-5">{(theme.showBread && <Bread />) || <div></div>}</div>
            </div>
          )}
        </> */}

        {theme.showLogo && <Logo />}
        <List size={32} />
        {/* <>
          {theme.layout == "top" && (
            <>
              <Menu style={{ backgroundColor: "transparent" }} className="w-full border-0" mode="horizontal" />
            </>
          )}
        </> */}

        {/* <Avatar /> */}
      </Layout.Header>

      <>{theme.showTags && <Tags />}</>
    </div>
  )
}

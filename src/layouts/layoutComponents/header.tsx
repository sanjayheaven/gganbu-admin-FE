import type { LayoutProps } from "antd"
import { Layout } from "antd"
import type { CSSProperties } from "react"
import { useThemeContext } from "../../context"
import { Menu, Logo, Tags, Bread, Avatar } from "../components"

export default function Header({
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
  return (
    <div
      className={headerWrapperClass}
      style={{
        ...headerWrapperStyle,
        zIndex: 50,
        ...(theme.fixedHeader && { boxShadow: " 0 1px 4px 0 rgb(0 21 41 / 12%)" }),
      }}
    >
      <Layout.Header hasSider={false} style={{ ...headerStyle }}>
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
              <Menu style={{ backgroundColor: "transparent" }} className="w-full border-0" mode="horizontal" />
            </>
          )}
        </>

        <Avatar />
      </Layout.Header>

      <>{theme.showTags && <Tags />}</>
    </div>
  )
}

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
  ...props
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
        // zIndex: 50,
        // ...(theme.fixedHeader && {
        //   boxShadow: " 0 1px 4px 0 rgb(0 21 41 / 12%)",
        //   ...(theme.layout == "side" && {
        //     width: (!theme.collapsed && "calc(100% - 200px)") || "calc(100% - 80px)",
        //     transition: "all 0.2s",
        //   }),
        // }),
      }}
    >
      <Layout.Header
        {...props}
        hasSider={false}
        style={{
          ...headerStyle,
          // backgroundColor: "white",
          // ...(theme.layout == "top" && {
          //   ...(theme.menuStyle == "transparent" && {
          //     backgroundColor: "transparent",
          //   }),
          //   ...(theme.menuStyle == "white" && {
          //     backgroundColor: "white",
          //   }),
          //   ...(theme.menuStyle == "dark" && {
          //     backgroundColor: theme.menuStyleBgColor,
          //   }),
          // }),
        }}
      >
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

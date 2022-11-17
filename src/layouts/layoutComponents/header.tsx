import type { LayoutProps } from "antd"
import { Layout } from "antd"
import { useThemeContext } from "../../context"
import { Menu, Logo, Tags, Bread, Avatar } from "../components"

export default function Header({
  headerWrapperClass,
  isMobile = false,
  ...props
}: { isMobile?: boolean; headerWrapperClass?: string } & LayoutProps) {
  const { theme } = useThemeContext()

  const { fixedHeader, collapsed, layout, showTags, showLogo, showBread } = theme

  return (
    <div
      className={headerWrapperClass}
      style={{
        zIndex: 50,
        ...(fixedHeader && {
          boxShadow: " 0 1px 4px 0 rgb(0 21 41 / 12%)",
          ...(layout == "side" && {
            width: (!collapsed && "calc(100% - 200px)") || "calc(100% - 80px)",
            transition: "all 0.2s",
          }),
        }),
      }}
    >
      <Layout.Header
        {...props}
        style={{
          ...(layout == "top" && {
            ...(theme.menuStyle == "transparent" && {
              backgroundColor: "transparent",
            }),
            ...(theme.menuStyle == "white" && {
              backgroundColor: "white",
            }),
            ...(theme.menuStyle == "dark" && {
              backgroundColor: theme.menuStyleBgColor,
            }),
          }),
        }}
      >
        <>{layout == "side" && <>{(showBread && <Bread />) || <div></div>}</>}</>
        <>
          {layout == "mix" && (
            <div className=" flex items-center">
              {showLogo && <Logo />}
              <div className="pl-5">{(showBread && <Bread />) || <div></div>}</div>
            </div>
          )}
        </>

        <>
          {layout == "top" && (
            <>
              {showLogo && <Logo />}
              <Menu style={{ backgroundColor: "transparent" }} className="w-full border-0" mode="horizontal" />
            </>
          )}
        </>

        <Avatar />
      </Layout.Header>

      <>{showTags && <Tags />}</>
    </div>
  )
}

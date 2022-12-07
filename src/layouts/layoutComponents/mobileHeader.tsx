import { LayoutProps, MenuProps, Modal } from "antd"
import type { ILayoutStyle } from "../utils"

import { Avatar, Drawer, Dropdown, Layout } from "antd"
import { List, User, X } from "phosphor-react"
import { CSSProperties } from "react"
import { useThemeContext, useUserContext } from "../../context"
import { useDrawer } from "../../hooks"
import { Menu, Tags } from "../components"

export default function MobileHeader({
  headerWrapperStyle,
  headerStyle,
}: {
  headerWrapperStyle?: CSSProperties
  headerStyle?: CSSProperties
} & LayoutProps) {
  const { setUser } = useUserContext()
  const { theme } = useThemeContext()
  const commonHeaderWrapperStyle: ILayoutStyle["headerWrapperStyle"] = {
    zIndex: 50,
    ...(theme.fixedHeader && { boxShadow: " 0 1px 4px 0 rgb(0 21 41 / 12%)" }),
  }

  const { drawer, setDrawer } = useDrawer({ placement: "left" })
  const Logout = async () => {
    localStorage.removeItem("userInfo")
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    setUser({})
  }

  const MenuItems: MenuProps["items"] = [
    { label: "User Profile", key: "user" },
    {
      label: (
        <a
          onClick={() =>
            Modal.confirm({
              // parentContext:,

              title: "Hint",
              content: "Are you sure you want to logout?",
              onOk: async () => {
                await Logout()
                window.location.reload()
              },
            })
          }
        >
          Log Out
        </a>
      ),
      key: "logout",
    },
  ]

  return (
    <>
      <div style={{ ...headerWrapperStyle, ...commonHeaderWrapperStyle }}>
        <Layout.Header style={{ ...headerStyle }}>
          <List onClick={() => setDrawer({ ...drawer, open: true })} size={32} className="mx-4" />

          <Dropdown trigger={["hover"]} menu={{ items: MenuItems }}>
            <div className="mx-4 flex items-center">
              <Avatar size="large" icon={<User />} />
            </div>
          </Dropdown>
        </Layout.Header>

        <>{theme.showTags && <Tags />}</>
      </div>

      <Drawer
        {...drawer}
        closable={false}
        onClose={() => setDrawer({ ...drawer, open: false })}
        bodyStyle={{ padding: 0 }}
      >
        <div className=" py-4 px-5 border-solid border-b-[#0505050f] border-0 border-b-[1px] ">
          <div className=" flex items-center justify-between min-w-full">
            <div className="text-3xl font-bold">Gganbu</div>
            <X size={32} onClick={() => setDrawer({ ...drawer, open: false })} />
          </div>
        </div>
        <Menu mode="inline" onClick={() => setDrawer({ ...drawer, open: false })} onOpenChange={undefined} />
      </Drawer>
    </>
  )
}

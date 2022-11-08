import type { MenuProps } from "antd"
import { Avatar as AvatarAnt, Badge, Dropdown, Input, Tooltip } from "antd"
import { Menu, Modal } from "antd"
import { Globe, Question, Bell, User, GithubLogo } from "phosphor-react"
import { ArrowsOut, ArrowsIn, MagnifyingGlass } from "phosphor-react"

import { useState } from "react"
import ChangeLanguage from "../../components/changeLanguage"
import { useThemeContext, useUserContext } from "../../context"

const iconSize = 26

export default function Avatar() {
  const { user, setUser } = useUserContext()
  const { theme, setTheme } = useThemeContext()
  const { menuStyleBgColor, menuStyle, menuStyleColor, layout, isFullscreen } = theme

  const [showSearch, setShowSearch] = useState(false)

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
    <div
      style={{
        ...(["top"].includes(layout) && {
          ...(menuStyle == "transparent" && {
            backgroundColor: "transparent",
          }),
          ...(menuStyle == "dark" && {
            backgroundColor: menuStyleBgColor,
            color: menuStyleColor,
          }),
          ...(menuStyle == "white" && {
            backgroundColor: "white",
          }),
        }),
      }}
      className="cursor-pointer flex items-center h-full"
    >
      <div className="px-2 flex items-center hover:bg-[rgb(0,0,0,0.025)] h-full">
        {showSearch && <Input autoFocus suffix={<MagnifyingGlass />} onBlur={() => setShowSearch(false)} />}
        {!showSearch && <MagnifyingGlass size={iconSize} onClick={() => setShowSearch(true)} />}
      </div>

      <Tooltip title="GitHub" autoAdjustOverflow>
        <div
          onClick={() => window.open("https://github.com/sanjayheaven/gganbu-admin-FE")}
          className="px-2 flex items-center hover:bg-[rgb(0,0,0,0.025)] h-full"
        >
          <GithubLogo size={iconSize} />
        </div>
      </Tooltip>

      <Tooltip title="Help" autoAdjustOverflow>
        <div className="px-2 flex items-center hover:bg-[rgb(0,0,0,0.025)] h-full">
          <Question size={iconSize} />
        </div>
      </Tooltip>

      <Tooltip title={(theme.isFullscreen && "Reduction") || "Full Screen"} autoAdjustOverflow>
        <div
          onClick={() => setTheme({ ...theme, isFullscreen: !isFullscreen })}
          className="px-2 flex items-center hover:bg-[rgb(0,0,0,0.025)] h-full"
        >
          {(theme.isFullscreen && <ArrowsIn size={iconSize} />) || <ArrowsOut size={iconSize} />}
        </div>
      </Tooltip>

      <Tooltip title="Notificaitons" autoAdjustOverflow>
        <div className="px-2 flex items-center hover:bg-[rgb(0,0,0,0.025)] h-full">
          <Badge overflowCount={10} count={199}>
            <Bell size={iconSize} />
          </Badge>
        </div>
      </Tooltip>

      <ChangeLanguage>
        <div className="px-2 flex items-center hover:bg-[rgb(0,0,0,0.025)] h-full">
          <Globe size={iconSize} />
        </div>
      </ChangeLanguage>

      <Dropdown trigger={["hover"]} overlay={<Menu items={MenuItems} />}>
        <div className="px-2 flex items-center hover:bg-[rgb(0,0,0,0.025)]">
          <AvatarAnt size="large" icon={<User />} />
          <div className=" whitespace-nowrap ml-3 max-w-[80px] text-ellipsis overflow-hidden">{user?.name}</div>
        </div>
      </Dropdown>
    </div>
  )
}

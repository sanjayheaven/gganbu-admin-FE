import { useEffect, useRef, useState } from "react"
import { useThemeContext } from "../context"
import MixLayout from "./mixLayout"
import TopLayout from "./topLayout"
import SideLayout from "./sideLayout"
import { Setting } from "./components"
import { useFullscreen, useSize } from "ahooks"
import { useNProgressColor } from "../hooks"
import MobileLayout from "./mobileLayout"
import { FloatButton } from "antd"

export default function BasicLayout() {
  const [showDrawer, setShowDrawer] = useState(false)
  const { theme, setTheme } = useThemeContext()

  const fullscreenRef = useRef(null)
  const [isFullscreen, { enterFullscreen, exitFullscreen }] = useFullscreen(fullscreenRef, {
    onExit: () => setTheme({ ...theme, isFullscreen: false }),
  })

  const size = useSize(fullscreenRef)

  if (size?.width > 640 && theme.isMobile) {
    setTheme({ ...theme, isMobile: false })
  } else if (size?.width <= 640 && !theme.isMobile) {
    setTheme({ ...theme, isMobile: true })
  }
  // set nprogress bar color
  useNProgressColor(theme.primaryColor)

  useEffect(() => {
    if (theme.isFullscreen) {
      enterFullscreen()
    } else {
      exitFullscreen()
    }
  }, [theme.isFullscreen])

  return (
    <>
      {/* here name id fullscreen to make sure the ant design all component are topper */}
      <div ref={fullscreenRef} id={(isFullscreen && "fullscreen") || "non-fullscreen"}>
        <div className="hidden sm:block">
          {theme.layout == "mix" ? <MixLayout /> : theme.layout == "top" ? <TopLayout /> : <SideLayout />}
          <Setting setShowDrawer={setShowDrawer} open={showDrawer} onClose={() => setShowDrawer(false)} />
        </div>

        <div className="block sm:hidden">
          <MobileLayout />
        </div>
        <FloatButton.BackTop />
      </div>
    </>
  )
}

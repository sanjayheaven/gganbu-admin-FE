import { useEffect, useRef, useState } from "react"
import { useThemeContext } from "../context"
import MixLayout from "./mixLayout"
import TopLayout from "./topLayout"
import SideLayout from "./sideLayout"
import { Setting, BackTop } from "./components"
import { useFullscreen } from "ahooks"
import { useNProgressColor } from "../hooks"
import MobileLayout from "./mobileLayout"

export default function BasicLayout() {
  const [showDrawer, setShowDrawer] = useState(false)
  const { theme, setTheme } = useThemeContext()

  const fullscreenRef = useRef(null)

  const [isFullscreen, { enterFullscreen, exitFullscreen }] = useFullscreen(fullscreenRef, {
    onExit: () => setTheme({ ...theme, isFullscreen: false }),
  })

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
          <Setting setShowDrawer={setShowDrawer} open={showDrawer} onClose={() => setShowDrawer(false)} />
          {theme.layout == "mix" ? <MixLayout /> : theme.layout == "top" ? <TopLayout /> : <SideLayout />}
        </div>

        <div className="block sm:hidden">
          <MobileLayout />
        </div>
        <BackTop />
      </div>
    </>
  )
}

import type { DrawerProps } from "antd"
import { useState } from "react"

/**
 *
 * set default drawer Props for drawer
 *
 */
export default function useDrawer(initState?: DrawerProps) {
  const [drawer, setDrawer] = useState({
    onCancel: () => setDrawer({ ...drawer, open: false }),
    ...initState,
  })
  return {
    drawer,
    setDrawer,
  }
}

/**
 *
 * This is global theme config. As initial value for ThemeContext
 * Theme config only can be Adjusted in dev env. Then build to using in pro env.
 * Can copy params from the Theme Config Drawer.
 *
 * here can set all the things that before building to production.
 * well, may not Theme,  project Setting is more appreate.
 *
 */

import { theme as algorithmTheme } from "antd"
import { IPreset } from "../components/appear"

const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = algorithmTheme
export interface ITheme {
  menuStyle?: "transparent" | "dark" | "white"
  menuStyleColor?: string
  menuStyleBgColor?: string
  primaryColor?: string

  // layout
  /** current media screen whethe is Mobile size */
  isMobile?: boolean
  /** layout: "side" | "top" | "mix" */
  layout?: "side" | "top" | "mix"
  /** whether fix header */
  fixedHeader?: boolean
  /** @deprecated */
  stickyHeader?: boolean
  /** @deprecated */
  fixedSider?: boolean
  contentWidth?: "fluid" | "fixed"

  // state
  collapsed?: boolean
  isFullscreen?: boolean

  // display
  showTags?: boolean
  showCollapse?: boolean
  showLogo?: boolean
  showBread?: boolean
  showBreadIcon?: boolean

  showHeader?: boolean
  showSider?: boolean
  showFooter?: boolean

  // other
  keepAlive?: boolean // if open page keep alive .
  animateName?: IPreset

  /** algorithm preset */
  algorithm?: "default" | "dark" | "compact"
}

export const ThemeConfig: ITheme = {
  menuStyle: "white",
  menuStyleColor: "#FFFFFFA6",
  menuStyleBgColor: "#00152a",
  primaryColor: "#2cc203",
  layout: "top",
  showTags: true,
  fixedHeader: true,
  showCollapse: true,
  contentWidth: "fluid",
  collapsed: false,
  showLogo: true,
  showBread: true,
  showBreadIcon: true,
  animateName: "slideInTop",
  algorithm: "default",
}

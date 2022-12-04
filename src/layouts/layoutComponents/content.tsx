import { FloatButton, Layout } from "antd"
import type { LayoutProps } from "antd"
import { useThemeContext } from "../../context"
import { ILayoutStyle } from "../utils"

export default function Content({ children, contentStyle, ...props }: LayoutProps & ILayoutStyle) {
  const { theme } = useThemeContext()
  return (
    <>
      <Layout.Content {...props} style={{ ...contentStyle }}>
        {children}
      </Layout.Content>

      {theme.layout == "mix" && theme.fixedHeader && <FloatButton.BackTop />}
    </>
  )
}

import { FloatButton, Layout } from "antd"
import type { LayoutProps } from "antd"
import { useThemeContext } from "../../context"

export default function Content({ children, ...props }: LayoutProps) {
  const { theme } = useThemeContext()
  const { fixedHeader, layout } = theme
  return (
    <>
      <Layout.Content {...props}>{children}</Layout.Content>

      {layout == "mix" && fixedHeader && <FloatButton.BackTop />}
    </>
  )
}

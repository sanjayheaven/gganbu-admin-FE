import { FloatButton, Layout } from "antd"
import type { LayoutProps } from "antd"
import { useThemeContext } from "../../context"

export default function Content({ children, ...props }: LayoutProps) {
  const { theme } = useThemeContext()
  return (
    <>
      <Layout.Content {...props}>{children}</Layout.Content>

      {theme.layout == "mix" && theme.fixedHeader && <FloatButton.BackTop />}
    </>
  )
}

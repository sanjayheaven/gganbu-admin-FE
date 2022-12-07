import type { ConfigProviderProps } from "antd/lib/config-provider"
import { ConfigProvider, theme as algorithmTheme } from "antd"
import { useThemeContext } from "./theme"
import { getPopupContainer } from "../config/antd"

export const AntdConfigProvider = ({ children, locale, theme: antTheme }: ConfigProviderProps) => {
  const { theme } = useThemeContext()
  const { algorithm = algorithmTheme.defaultAlgorithm } = antTheme || {}
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme.primaryColor,
        },
        algorithm,
      }}
      locale={locale}
      getPopupContainer={getPopupContainer}
    >
      {children}
    </ConfigProvider>
  )
}

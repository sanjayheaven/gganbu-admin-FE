import type { ConfigProviderProps } from "antd/lib/config-provider"
import { ConfigProvider, theme as algorithmTheme } from "antd"
import { useThemeContext } from "./theme"
import { getPopupContainer } from "../config/antd"

export const AntdConfigProvider = ({ children, locale }: ConfigProviderProps) => {
  const { theme } = useThemeContext()
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme.primaryColor,
        },
        algorithm: algorithmTheme.defaultAlgorithm,
      }}
      locale={locale}
      getPopupContainer={getPopupContainer}
    >
      {children}
    </ConfigProvider>
  )
}

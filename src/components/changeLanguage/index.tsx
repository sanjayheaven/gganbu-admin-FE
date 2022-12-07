import type { MenuProps } from "antd"
import { Dropdown } from "antd"
import { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { lookupLocalStorage } from "../../config/locales"

export const languageMenuItem: MenuProps["items"] = [
  { label: "English", key: "en" },
  { label: "简体中文", key: "zh" },
]
const ChangeLanguage = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation()
  return (
    <>
      <Dropdown
        trigger={["hover"]}
        menu={{
          items: languageMenuItem,
          onClick: ({ key }) => {
            i18n.changeLanguage(key)
            localStorage.setItem(lookupLocalStorage, key) // based on LanguageDetector
            window.location.reload()
          },
        }}
      >
        {children}
      </Dropdown>
    </>
  )
}

export default ChangeLanguage

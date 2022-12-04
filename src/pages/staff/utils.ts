import i18n from "../../config/locales"

const { t } = i18n
export const statusOptions = [
  { label: t("staff.ACTIVE"), value: "active" },
  { label: t("staff.INACTIVE"), value: "inactive" },
]

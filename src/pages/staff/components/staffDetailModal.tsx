import { Input, InputNumber, ModalProps, Select, Switch } from "antd"
import { Modal, Form } from "antd"
import { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { createFormItems, IFormConfig } from "../../../components/form/formConfig"
import { IUseSelectedItemRes } from "../../../hooks/useSelectedItem"
import { IStaff } from "../type"

// This is for Add & Edit
export default function StaffDetailModal({
  selectedItem,
  setSelectedItem,
  roleOptions,
  ...modal
}: ModalProps &
  IUseSelectedItemRes<IStaff> & {
    roleOptions?: { label?: ReactNode; value?: string }[]
  }) {
  const { t } = useTranslation()
  const formConfig: IFormConfig = [
    {
      label: t("NAME"),
      required: true,
      children: (
        <Input onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })} value={selectedItem.name} />
      ),
    },
    {
      label: t("USERNAME"),
      required: true,
      children: (
        <Input
          onChange={(e) => setSelectedItem({ ...selectedItem, username: e.target.value })}
          value={selectedItem.username}
        />
      ),
    },
    !selectedItem._id && {
      label: t("PASSWORD"),
      required: true,
      children: <Input disabled placeholder="initial password will be set as 1234" />,
    },
    {
      label: t("PHONE"),
      children: (
        <InputNumber
          className=" w-full"
          onChange={(value) => setSelectedItem({ ...selectedItem, phone: value })}
          value={selectedItem.phone}
        />
      ),
    },
    {
      label: t("ROLE"),
      required: true,
      children: (
        <Select
          className=" w-full"
          value={selectedItem.roleId}
          onChange={(value) => {
            setSelectedItem({ ...selectedItem, roleId: value })
          }}
          options={roleOptions}
        />
      ),
    },
    selectedItem._id && {
      label: t("STATUS"),
      children: (
        <Switch
          checked={selectedItem.status == "active"}
          onChange={(value) =>
            setSelectedItem({
              ...selectedItem,
              status: (value && "active") || "inactive",
            })
          }
          checkedChildren={t("staff.ACTIVE")}
          unCheckedChildren={t("staff.INACTIVE")}
        />
      ),
    },
  ]
  return (
    <Modal {...modal}>
      <Form {...{ labelCol: { span: 5 } }}>{createFormItems(formConfig)}</Form>
    </Modal>
  )
}

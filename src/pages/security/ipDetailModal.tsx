import type { IUseSelectedItemRes } from "../../hooks/useSelectedItem"
import type { IWhitelist } from "./type"

import type { ModalProps } from "antd"
import { Modal, Form, Input } from "antd"
import { createFormItems } from "../../components/form/formConfig"
import { useTranslation } from "react-i18next"

// This is for Add & Edit
export default function IpDetailModal({
  selectedItem,
  setSelectedItem,
  ...modal
}: ModalProps & IUseSelectedItemRes<Partial<IWhitelist>>) {
  const { t } = useTranslation()
  return (
    <Modal {...modal}>
      <Form {...{ labelCol: { span: 3 } }}>
        {createFormItems([
          {
            label: "IP",
            required: true,
            children: (
              <Input
                onChange={(e) => setSelectedItem({ ...selectedItem, ip: e.target.value })}
                value={selectedItem.ip}
              />
            ),
          },
          {
            label: t("DESC"),
            required: true,
            children: (
              <Input.TextArea
                onChange={(e) => setSelectedItem({ ...selectedItem, desc: e.target.value })}
                value={selectedItem.desc}
              />
            ),
          },
        ])}
      </Form>
    </Modal>
  )
}

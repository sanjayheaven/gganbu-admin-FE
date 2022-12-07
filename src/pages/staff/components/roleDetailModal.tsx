import { Input, ModalProps } from "antd"
import type { IRole } from "../type"
import type { IUseSelectedItemRes } from "../../../hooks/useSelectedItem"
import { Modal, Tree, Form } from "antd"
import { routesForRoleTree } from "../../../router"
import { createFormItems } from "../../../components/form/formConfig"
import { useTranslation } from "react-i18next"

export default function RoleDetailModal({
  selectedItem,
  setSelectedItem,
  ...modal
}: ModalProps & IUseSelectedItemRes<IRole>) {
  const { t } = useTranslation()
  return (
    <Modal {...modal} className="min-w-max">
      <Form labelCol={{ span: 3 }}>
        {createFormItems([
          {
            label: t("NAME"),
            required: true,
            children: (
              <Input
                value={selectedItem.name}
                onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })}
              />
            ),
          },
          {
            label: t("DESC"),
            required: true,
            children: (
              <Input.TextArea
                value={selectedItem.desc}
                onChange={(e) => setSelectedItem({ ...selectedItem, desc: e.target.value })}
              />
            ),
          },
        ])}
      </Form>
      <div className=" grid grid-cols-3 mt-5 gap-4 ">
        <div className="text-lg font-bold ">{t("role.ROUTE_AUTH")}</div>
        <div className="text-lg font-bold ">{t("role.CONTENT_AUTH")}</div>
      </div>
      <div className="grid grid-cols-3 mt-5 gap-4 max-h-[40vh] overflow-auto">
        <Tree
          onCheck={(value: string[]) => setSelectedItem({ ...selectedItem, routeAuth: value })}
          checkedKeys={selectedItem.routeAuth}
          fieldNames={{ key: "path" }}
          checkable
          treeData={routesForRoleTree}
        />
        <div></div>
        {/* <div>
          <div className="text-lg font-bold ">Other Auth</div>
        </div> */}
      </div>
    </Modal>
  )
}

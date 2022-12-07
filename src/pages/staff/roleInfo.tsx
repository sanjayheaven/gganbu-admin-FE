import type { IInfoResponce } from "../../types"
import type { IFilterRole, IRole } from "./type"
import { Input, TableColumnsType, TablePaginationConfig } from "antd"
import { message, Modal } from "antd"
import { Card, Table, Button, Space } from "antd"
import FilterAction from "../../components/filterAction"
import { RoleApi } from "../../api"
import RoleDetailModal from "./components/roleDetailModal"
import {
  useData,
  useFilter,
  useLoading,
  useModal,
  usePageInfoFilterEffect,
  useSelectedItem,
  useTablePagination,
} from "../../hooks"
import { createFormItems } from "../../components/form/formConfig"
import { useTranslation } from "react-i18next"

export default function RoleInfo() {
  const { filter, setFilter } = useFilter<IFilterRole>({})
  const { pagination, setPagination } = useTablePagination()
  const { selectedItem, setSelectedItem } = useSelectedItem<IRole>({})
  const { modal, setModal } = useModal({})
  const { data, setData } = useData<IRole[]>([])
  const { loading, setLoading } = useLoading(false)
  const { t } = useTranslation()

  const getInfo = async (paginationProp?: TablePaginationConfig) => {
    setLoading(true)
    try {
      const res: unknown = await RoleApi.getRoles({
        ...filter,
        current: paginationProp?.current || pagination.current,
        pageSize: paginationProp?.pageSize || pagination.pageSize,
      })
      const { items = [], total }: IInfoResponce = res
      setLoading(false)
      setData(items)
      setPagination({ ...pagination, ...(paginationProp || {}), total })
    } catch (error) {
      console.log(error)
    }
  }

  const handleOk = async () => {
    const { name } = selectedItem
    if (!name) {
      return message.error("Please finish all required info")
    }
    try {
      if (selectedItem._id) {
        await RoleApi.updateRole(selectedItem._id, selectedItem)
      } else {
        await RoleApi.createRole(selectedItem)
      }
      setModal({ ...modal, open: false })
      await getInfo() // reget the data
    } catch (error) {
      console.log(error)
    }
  }

  usePageInfoFilterEffect(filter, () => getInfo({ ...pagination, current: 1 }))

  const columns: TableColumnsType<IRole> = [
    { title: t("NAME"), dataIndex: "name" },
    { title: t("DESC"), dataIndex: "desc" },
    { title: t("role.STAFF_COUNT"), dataIndex: "staffCount" },
    {
      title: t("ACTION"),
      dataIndex: "action",
      render: (text, record) => {
        return (
          <Space>
            <a
              onClick={() => {
                setSelectedItem({ ...record })
                setModal({ ...modal, open: true, title: t("EDIT") })
              }}
            >
              {t("EDIT")}
            </a>
            <a
              className="text-red-600"
              onClick={() => {
                Modal.confirm({
                  content: "Sure to delete this item?",
                  onOk: async () => {
                    console.log(record, 111919)
                    try {
                      await RoleApi.deleteRole(record._id)
                      await getInfo()
                    } catch (error) {
                      console.log(error)
                    }
                  },
                })
              }}
            >
              {t("DELETE")}
            </a>
          </Space>
        )
      },
    },
  ].map((item) => {
    return { ...item, key: item.dataIndex }
  })

  return (
    <div>
      <Card className="mb-4">
        <div className="grid grid-cols-4 gap-4">
          {createFormItems([
            {
              label: t("SEARCH"),
              className: "mb-0",
              children: (
                <Input
                  value={filter.name}
                  onChange={(e) => setFilter({ ...filter, name: e.target.value })}
                  placeholder={`${t("NAME")}/${t("DESC")}`}
                />
              ),
            },
          ])}
          <FilterAction className="mb-0" onQuery={() => getInfo()} onReset={() => setFilter({})} />
        </div>
      </Card>
      <Card
        title={
          <Button
            onClick={() => {
              setModal({ ...modal, title: t("ADD"), open: true })
              setSelectedItem({})
            }}
            type="primary"
          >
            + {t("role.NEW_ROLE")}
          </Button>
        }
      >
        <Table
          rowKey={(record: IRole) => record._id}
          onChange={(pagination) => getInfo(pagination)}
          pagination={pagination}
          loading={loading}
          columns={columns}
          dataSource={data}
        />
      </Card>
      <RoleDetailModal
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        {...modal}
        onOk={() => handleOk()}
      />
    </div>
  )
}

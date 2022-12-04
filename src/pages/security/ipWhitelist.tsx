import type { IFilter, IWhitelist } from "./type"
import type { IInfoResponce } from "../../types"
import { Input, TableColumnsType, TablePaginationConfig } from "antd"

import { Card, Table, Button, message, Space, Modal } from "antd"
import FilterAction from "../../components/filterAction"
import IpWhiteListDetailModal from "./ipDetailModal"
import { WhitelistApi } from "../../api"
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

export default () => {
  const { filter, setFilter } = useFilter<IFilter>({ type: "ip" })
  const { pagination, setPagination } = useTablePagination()
  const { selectedItem, setSelectedItem } = useSelectedItem<Partial<IWhitelist>>({})
  const { modal, setModal } = useModal({})
  const { data, setData } = useData([])
  const { loading, setLoading } = useLoading(false)

  const { t } = useTranslation()

  const handleOk = async () => {
    const { ip, desc } = selectedItem
    console.log(selectedItem, "看看selectedItem")
    if (!desc || !ip) {
      return message.error("Please finish all required info")
    }
    try {
      if (selectedItem._id) {
        await WhitelistApi.updateWhitelist(selectedItem._id, selectedItem)
      } else {
        await WhitelistApi.createWhitelist({ ...selectedItem, type: "ip" })
      }
      setModal({ ...modal, open: false })
      await getInfo() // reget the data
    } catch (error) {
      console.log(error)
    }
  }

  const getInfo = async (paginationProp?: TablePaginationConfig) => {
    try {
      setLoading(true)
      const res: unknown = await WhitelistApi.getWhitelists({
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

  const columns: TableColumnsType<IWhitelist> = [
    { title: "IP", dataIndex: "ip" },
    { title: t("DESC"), dataIndex: "desc" },
    {
      title: t("ACTION"),
      render: (text, record) => (
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
                    await WhitelistApi.deleteWhitelist(record._id)
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
      ),
    },
  ].map((item) => {
    return { ...item, key: item.dataIndex }
  })

  usePageInfoFilterEffect(filter, () => getInfo({ ...pagination, current: 1 }))

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
                  placeholder="ip/desc"
                />
              ),
            },
          ])}
          <FilterAction className="mb-0" onQuery={() => getInfo()} onReset={() => setFilter({ type: "ip" })} />
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
            + {t("security.NEW_IP")}
          </Button>
        }
      >
        <Table
          rowKey={(record: IWhitelist) => record._id}
          onChange={(pagination) => getInfo(pagination)}
          pagination={pagination}
          loading={loading}
          columns={columns}
          dataSource={data}
        />
      </Card>
      <IpWhiteListDetailModal
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        {...modal}
        onOk={() => handleOk()}
      />
    </div>
  )
}

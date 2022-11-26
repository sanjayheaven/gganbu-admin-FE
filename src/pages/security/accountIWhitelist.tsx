import type { IFilter, IWhitelist } from "./type"
import type { IInfoResponce } from "../../types"
import { Input, TableColumnsType, TablePaginationConfig } from "antd"

import { Card, Table, Button, message, Space, Modal } from "antd"
import FilterAction from "../../components/filterAction"
import IpWhiteListDetailModal from "./ipDetail"
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

export default () => {
  const { filter, setFilter } = useFilter<IFilter>({ type: "account" })
  const { pagination, setPagination } = useTablePagination()
  const { selectedItem, setSelectedItem } = useSelectedItem<Partial<IWhitelist>>({})
  const { modal, setModal } = useModal({})
  const { data, setData } = useData([])
  const { loading, setLoading } = useLoading(false)

  const handleOk = async () => {
    const { staffId } = selectedItem
    console.log(selectedItem, "看看selectedItem")
    if (!staffId) {
      return message.error("Please finish all required info")
    }
    try {
      if (selectedItem._id) {
        await WhitelistApi.updateWhitelist(selectedItem._id, selectedItem)
      } else {
        await WhitelistApi.createWhitelist({
          ...selectedItem,
          type: "account",
        })
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
    { title: "Ip", dataIndex: "ip" },
    { title: "Desc", dataIndex: "desc" },
    {
      title: "Action",
      render: (text, record) => (
        <Space>
          <a
            onClick={() => {
              setSelectedItem({ ...record })
              setModal({ ...modal, open: true, title: "Edit" })
            }}
          >
            Edit
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
            Delete
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
              label: "Name",
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
              setModal({ ...modal, title: "Add", open: true })
              setSelectedItem({})
            }}
            type="primary"
          >
            + New Account
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

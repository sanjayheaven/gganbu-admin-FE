import type { IInfoResponce } from "../../types"
import type { IFilter, IProduct } from "./type"
import { Input, TableColumnsType, TablePaginationConfig } from "antd"
import { Modal } from "antd"
import { Card, Table, Button, Space } from "antd"
import FilterAction from "../../components/filterAction"
import { ProductApi } from "../../api"
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
import { useNavigate } from "react-router-dom"

export default function ProductInfo() {
  const { filter, setFilter } = useFilter<IFilter>({})
  const { pagination, setPagination } = useTablePagination()
  const { setSelectedItem } = useSelectedItem<Partial<IProduct>>({})
  const { modal, setModal } = useModal({})
  const { data, setData } = useData<Partial<IProduct>[]>([])
  const { loading, setLoading } = useLoading(false)

  const navigate = useNavigate()

  const getInfo = async (paginationProp?: TablePaginationConfig) => {
    setLoading(true)
    try {
      const res: unknown = await ProductApi.getProducts({
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

  usePageInfoFilterEffect(filter, () => getInfo({ ...pagination, current: 1 }))

  const columns: TableColumnsType<IProduct> = [
    { title: "Cover", dataIndex: "cover" },
    { title: "Name", dataIndex: "name" },
    { title: "Category", dataIndex: "category" },
    { title: "Remark", dataIndex: "remark" },
    { title: "Created At", dataIndex: "createdAt" },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
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
                      await ProductApi.deleteProduct(record._id)
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
              label: "Search",
              className: "mb-0",
              children: (
                <Input
                  value={filter.name}
                  onChange={(e) => setFilter({ ...filter, name: e.target.value })}
                  placeholder="name"
                />
              ),
            },
          ])}
          <FilterAction className="mb-0" onQuery={() => getInfo()} onReset={() => setFilter({})} />
        </div>
      </Card>
      <Card
        title={
          <Button onClick={() => navigate("/product/productCreate")} type="primary">
            + New Product
          </Button>
        }
      >
        <Table
          rowKey={(record: IProduct) => record._id}
          onChange={(pagination) => getInfo(pagination)}
          pagination={pagination}
          loading={loading}
          columns={columns}
          dataSource={data}
        />
      </Card>
    </div>
  )
}

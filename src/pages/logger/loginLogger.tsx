import { Card, Input, Table, type TablePaginationConfig, Tag } from "antd"
import { useTranslation } from "react-i18next"
import { LoggerApi } from "../../api"
import FilterAction from "../../components/filterAction"
import { createFormItems } from "../../components/form/formConfig"
import { useData, useFilter, useLoading, usePageInfoFilterEffect, useTablePagination } from "../../hooks"
import { IInfoResponce } from "../../types"
import { timeFormat } from "../../utils"

interface IFilter {
  name?: string
}
const LoginLogger = () => {
  const { filter, setFilter } = useFilter<IFilter>({})
  const { loading, setLoading } = useLoading(false)
  const { data, setData } = useData()
  const { pagination, setPagination } = useTablePagination()
  const { t } = useTranslation()

  const columns = [
    {
      title: t("USERNAME"),
      dataIndex: "username",
      render: (_, record) => {
        return (
          <div className=" flex gap-2 items-center">
            <div>{record?.username}</div>
          </div>
        )
      },
    },
    {
      title: t("LOCATION"),
      dataIndex: "location",
      render: (_, record) => {
        return (
          <div className=" flex gap-2 items-center">
            <div>{record?.name}</div>
          </div>
        )
      },
    },
    {
      title: "IP",
      dataIndex: "ip",
      render: (_, record) => {
        return (
          <div className=" flex gap-2 items-center">
            <div>{record?.ip}</div>
          </div>
        )
      },
    },
    {
      title: t("TIME"),
      dataIndex: "time",
      render: (_, record) => {
        return (
          <div className=" flex gap-2 items-center">
            <div>{timeFormat(record?.createdAt)}</div>
          </div>
        )
      },
    },
    {
      title: t("STATUS"),
      dataIndex: "status",
      render: (_, record) => {
        return (
          <div className=" flex gap-2 items-center">
            {<Tag color={(record?.status === 200 && "green") || "#f50"}>{record.status}</Tag>}
          </div>
        )
      },
    },
    {
      title: t("REMARK"),
      dataIndex: "remark",
      render: (_, record) => {
        return (
          <div className=" flex gap-2 items-center">
            <div>{record?.message}</div>
          </div>
        )
      },
    },
  ]

  const getInfo = async (paginationProp?: TablePaginationConfig) => {
    try {
      setLoading(true)
      const res: unknown = await LoggerApi.getLoginLogs({
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

  return (
    <>
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
                  placeholder={`${t("USERNAME")}/${t("IP")}`}
                />
              ),
            },
          ])}
          <FilterAction className="mb-0" onQuery={() => getInfo()} onReset={() => setFilter({})} />
        </div>
      </Card>
      <Card>
        <Table
          rowKey={(record) => record._id}
          onChange={(pagination) => getInfo(pagination)}
          loading={loading}
          columns={columns}
          dataSource={data}
          pagination={pagination}
        />
      </Card>
    </>
  )
}
export default LoginLogger

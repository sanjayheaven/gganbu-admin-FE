import type { IInfoResponce } from "../../types"
import type { IFilter, IProduct } from "./type"
import { Form, Input, TablePaginationConfig, Upload } from "antd"
import { Card, Button } from "antd"
import { ProductApi } from "../../api"
import { useData, useFilter, useLoading, usePageInfoFilterEffect, useTablePagination } from "../../hooks"
import { createFormItems } from "../../components/form/formConfig"
import { useNavigate } from "react-router-dom"

export default function ProductCreate() {
  const { filter } = useFilter<IFilter>({})
  const { pagination, setPagination } = useTablePagination()
  const { setData } = useData<Partial<IProduct>[]>([])
  const { setLoading } = useLoading(false)

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

  return (
    <div>
      <Card
        title="Create Product"
        className="mb-4"
        extra={
          <>
            <div className=" flex gap-2 items-center">
              <Button onClick={() => navigate(-1)}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </div>
          </>
        }
      >
        <Form className=" grid grid-cols-2 gap-4 w-1/2">
          {createFormItems([
            {
              label: "Name",
              required: true,
              children: <Input></Input>,
              rules: [{ required: true, message: "Please input product name" }],
            },
            {
              label: "Category",
              required: true,
              children: <Input></Input>,
              rules: [{ required: true, message: "Please input product name" }],
            },
            {
              label: "Cover",
              required: true,
              children: <Upload listType="picture-card" fileList={[]} />,
              rules: [{ required: true, message: "Please upload thumbnail" }],
            },
          ])}
        </Form>
      </Card>
    </div>
  )
}

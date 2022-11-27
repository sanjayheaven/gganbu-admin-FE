import type { IFilterStaff, IStaff } from "./type"
import { TablePaginationConfig, TableColumnsType, Input, Select } from "antd"
import { Switch, Card, Table, Button, message } from "antd"

import FilterAction from "../../components/filterAction"
import StaffDetailModal from "./components/staffDetailModal"
import { StaffApi } from "../../api"
import { useFilter, useModal, usePageInfoFilterEffect, useSelectedItem, useTablePagination } from "../../hooks"
import useData from "../../hooks/useData"
import useLoading from "../../hooks/useLoading"
import { createFormItems } from "../../components/form/formConfig"
import { useState } from "react"
import { User, PhoneCall } from "phosphor-react"
import ResetPasswordModal from "./components/resetPasswordModal"
import { useTranslation } from "react-i18next"

export const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
]

export default () => {
  const { filter, setFilter } = useFilter<IFilterStaff>({})
  const { pagination, setPagination } = useTablePagination()
  const { selectedItem, setSelectedItem } = useSelectedItem<IStaff>({})
  const { modal, setModal } = useModal({})
  const { modal: resetPasswordModal, setModal: setResetPasswordModal } = useModal({})
  const { data, setData } = useData<IStaff[]>()
  const { loading, setLoading } = useLoading(false)
  const [roleOptions, setRoleOptions] = useState([])
  const { t } = useTranslation()

  const getInfo = async (paginationProp?: TablePaginationConfig, allRoles = 0) => {
    try {
      setLoading(true)
      const res: unknown = await StaffApi.getStaffs({
        ...filter,
        allRoles,
        current: paginationProp?.current || pagination.current,
        pageSize: paginationProp?.pageSize || pagination.pageSize,
      })
      // const { items = [], total, roles = [] } = res
      const { items = [], total, roles = [] } = res
      setLoading(false)
      setData(items)
      if (roles.length) {
        setRoleOptions(
          roles.map((item) => {
            return { label: item?.name, value: item?._id }
          })
        )
      }
      setPagination({ ...pagination, ...(paginationProp || {}), total })
    } catch (error) {
      console.log(error)
    }
  }

  const handleOk = async () => {
    const { name, username, roleId } = selectedItem
    if (!username || !name || !roleId) {
      return message.error("Please finish all required info")
    }
    try {
      if (selectedItem._id) {
        await StaffApi.updateStaff(selectedItem._id, selectedItem)
      } else {
        await StaffApi.createStaff(selectedItem)
      }
      setModal({ ...modal, open: false })
      await getInfo() // re-get the data
    } catch (error) {
      console.log(error)
    }
  }

  const columns: TableColumnsType<IStaff> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (_, record) => {
        return (
          <div className=" flex gap-2 items-center">
            <User size={20} />
            <div>{record?.name}</div>
          </div>
        )
      },
    },
    {
      title: "Username",
      dataIndex: "username",
      render: (_, record) => {
        return <>{record?.username}</>
      },
    },
    {
      title: "Password",
      dataIndex: "password",
      render: (_, record) => {
        return (
          <Button
            onClick={() => {
              setSelectedItem({ ...record })
              setResetPasswordModal({ ...resetPasswordModal, open: true })
            }}
            danger
            type="primary"
            size="small"
          >
            Reset
          </Button>
        )
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (_, record) => {
        return (
          <div className=" flex gap-2 items-center">
            <PhoneCall size={20} />
            <div>{record?.phone}</div>
          </div>
        )
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record: IStaff) => (
        <Switch
          onChange={async (value) => {
            try {
              await StaffApi.updateStaff(record._id, {
                status: (value && "active") || "inactive",
              })
              // 这里还需要获取就有点难受。 应该是响应式的数据，可以直接 record.status 改变
              await getInfo()
            } catch (error) {
              console.log(error)
            }
          }}
          checked={record.status == "active"}
          checkedChildren={"Active"}
          unCheckedChildren={"Inactive"}
        />
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      render: (text, record) => {
        return <>{record?.roleInfo?.name}</>
      },
    },
    {
      title: "Action",
      render: (text, record) => (
        <a
          onClick={() => {
            console.log(record)
            setSelectedItem({ ...record })
            setModal({ ...modal, open: true, title: "Edit" })
          }}
        >
          Detail
        </a>
      ),
    },
  ].map((item) => {
    return { ...item, key: item.dataIndex }
  })

  // useEffect(() => {
  //   getInfo({ ...pagination, current: 1 }, 1)
  // }, [filter])
  usePageInfoFilterEffect(filter, () => getInfo({ ...pagination, current: 1 }, 1))

  return (
    <div>
      <Card className="mb-4">
        <div className="grid grid-cols-4 gap-4">
          {createFormItems([
            {
              label: t("SEARCH"),
              className: " mb-0",
              children: (
                <Input
                  value={filter.name}
                  onChange={(e) => setFilter({ ...filter, name: e.target.value })}
                  placeholder="username/name/phone"
                />
              ),
            },
            {
              label: t("STATUS"),
              className: " mb-0",
              children: (
                <Select
                  onChange={(value) => setFilter({ ...filter, status: value })}
                  value={filter.status}
                  options={statusOptions}
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
              setModal({ ...modal, title: "Add", open: true })
              setSelectedItem({})
            }}
            type="primary"
          >
            + New Staff
          </Button>
        }
      >
        <Table
          rowKey={(record: IStaff) => record._id}
          onChange={(pagination) => getInfo(pagination)}
          pagination={pagination}
          loading={loading}
          columns={columns}
          dataSource={data}
        />
      </Card>

      <StaffDetailModal
        roleOptions={roleOptions}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        {...modal}
        onOk={() => handleOk()}
      />
      <ResetPasswordModal
        onFinish={async (value) => {
          try {
            await StaffApi.resetPassword(selectedItem._id, value)
            setResetPasswordModal({ ...resetPasswordModal, open: false })
          } catch (error) {
            console.log(error)
          }
        }}
        {...resetPasswordModal}
      />
    </div>
  )
}

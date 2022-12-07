import { Card, Table } from "antd"
import { useState } from "react"

export default function OrderDetail() {
  // const [data, setData] = useState([])
  const [tabKey] = useState<string | number>("1")

  const historyColumns = [
    { title: "Name", dataIndex: "name" },
    { title: "Desc", dataIndex: "desc" },
    { title: "Time", dataIndex: "time" },
  ].map((item) => {
    return { ...item, key: item.dataIndex }
  })

  return (
    <div>
      {/* <div
        className=" sticky top-0 z-10 mb-4"
        ghost={false}
        onBack={() => window.history.back()}
        title="Order Detail"
        subTitle="This is Order Code"
        extra={[
          <Button key="2">Export</Button>,
          <Button key="1" type="primary">
            Save
          </Button>,
        ]}
        footer={
          <Tabs onChange={(value) => setTabKey(value)}>
            <Tabs.TabPane tab="Details" key="1" />
            <Tabs.TabPane tab="History" key="2" />
          </Tabs>
        }
      >
        This area place main Info. like, Customer Name, Create Time, Status, etc.
      </div> */}

      {tabKey == "1" && (
        <>
          <div className="grid grid-cols-3 gap-4 mb-4 min-h-full">
            <Card className="" title="Customer Detail">
              <span className="grid grid-cols-2 gap-4 mb-4">
                <span>Name:</span>
                <span>Company</span>
              </span>
              <span className="grid grid-cols-2 gap-4 mb-4">
                <span>Contact Phone:</span>
                <span>(+65) 8888888866</span>
              </span>
            </Card>
            <Card className="col-span-2" title="Order Detail">
              <span className="grid grid-cols-2 gap-4 mb-4">
                <span>Code:</span>
                <span>This is Order Code</span>
              </span>
              <span className="grid grid-cols-2 gap-4 mb-4">
                <span>Create Time:</span>
                <span>This is time.</span>
              </span>
            </Card>
          </div>

          <Card className="mb-4" title="Item List"></Card>
          <Card className="mb-4" title="After Sales"></Card>
        </>
      )}
      {tabKey == "2" && (
        <>
          <Card>
            <Table
              columns={historyColumns}
              dataSource={[
                {
                  name: "Test",
                  desc: "Update Order Status",
                  time: new Date().toISOString(),
                },
              ]}
            ></Table>
          </Card>
        </>
      )}
    </div>
  )
}

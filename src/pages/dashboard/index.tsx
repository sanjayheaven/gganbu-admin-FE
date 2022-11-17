import { Card } from "antd"
import { useNavigate } from "react-router-dom"
import newcustomer from "../../assets/images/newcustomer.png"
import orderstoday from "../../assets/images/orderstoday.png"
import orderswaiting from "../../assets/images/orderswaiting.png"
import ordersdelivering from "../../assets/images/ordersdelivering.png"

import { Column, Pie, Line } from "@ant-design/plots"
import { useState } from "react"
import { useThemeContext } from "../../context"

const data = [
  { title: "New Customers", src: newcustomer, value: 1009 },
  {
    title: "Orders Today",
    src: orderstoday,
    value: 56,
    to: "/order/orderInfo",
  },
  {
    title: "Orders Waiting",
    src: orderswaiting,
    to: "/order/orderInfo",
    value: 23,
  },
  {
    title: "Orders Delivering",
    src: ordersdelivering,
    to: "/order/orderInfo",
    value: 16,
  },
]

const columnData = [
  { type: "家具家电", sales: 38 },
  { type: "粮油副食", sales: 52 },
  { type: "生鲜水果", sales: 61 },
  { type: "美容洗护", sales: 145 },
  { type: "母婴用品", sales: 48 },
  { type: "进口食品", sales: 38 },
  { type: "食品饮料", sales: 38 },
  { type: "家庭清洁", sales: 38 },
]

const pieData = [
  { type: "分类一", value: 27 },
  { type: "分类二", value: 25 },
  { type: "分类三", value: 18 },
  { type: "分类四", value: 15 },
  { type: "分类五", value: 10 },
  { type: "其他", value: 5 },
]
const pieConfig = {
  appendPadding: 10,
  data: pieData,
  angleField: "value",
  colorField: "type",
  radius: 0.9,
  label: {
    type: "inner",
    offset: "-30%",
    content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
    style: { fontSize: 14, textAlign: "center" },
  },
  interactions: [{ type: "element-active" }],
}

const lineData = [
  { year: "1991", value: 3 },
  { year: "1992", value: 4 },
  { year: "1993", value: 3.5 },
  { year: "1994", value: 5 },
  { year: "1995", value: 4.9 },
  { year: "1996", value: 6 },
  { year: "1997", value: 7 },
  { year: "1998", value: 9 },
  { year: "1999", value: 13 },
]

export default () => {
  const navigate = useNavigate()
  const [activeKey, setActiveKey] = useState("column")
  const { theme } = useThemeContext()
  const { primaryColor } = theme

  const columnConfig = {
    data: columnData,
    color: primaryColor,
    xField: "type",
    yField: "sales",
    // label: { position: "middle", style: { fill: "#FFFFFF", opacity: 0.6 } },
    xAxis: { label: { autoHide: true, autoRotate: false } },
    meta: { type: { alias: "类别" }, sales: { alias: "销售额" } },
  }
  const lineConfig = {
    data: lineData,
    xField: "year",
    yField: "value",
    color: primaryColor,
    label: {},
    point: {
      size: 5,
      shape: "diamond",
      style: { fill: "white", stroke: "#5B8FF9", lineWidth: 2 },
    },
    tooltip: { showMarkers: false },
    state: {
      active: { style: { shadowBlur: 4, stroke: "#000", fill: "red" } },
    },
    interactions: [{ type: "marker-active" }],
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-3">
        {data.map((item) => {
          return (
            <Card key={item.title} className="p-0" hoverable={!!item.to} onClick={() => item.to && navigate(item.to)}>
              <div className="flex items-center">
                <div className="px-3">
                  <img className=" w-16 h-auto" src={item.src} alt="logo" />
                </div>
                <div className=" h-full min-h-full flex flex-col justify-between ">
                  <div className="text-lg text-gray-400 text-gray">{item.title}</div>
                  <div className="text-2xl font-bold">{item.value || 0}</div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Card
          tabList={[
            { key: "column", tab: "Sales" },
            { key: "line", tab: "Trend" },
          ]}
          activeTabKey={activeKey}
          onTabChange={(key) => setActiveKey(key)}
          className=" col-start-1 col-span-3"
        >
          {activeKey == "column" && <Column {...columnConfig} />}
          {activeKey == "line" && <Line {...lineConfig} />}
        </Card>
        <Card title="Catalogue">
          <Pie {...pieConfig} />
        </Card>
      </div>
    </>
  )
}

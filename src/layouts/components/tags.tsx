import { Dropdown, MenuProps, Tag } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import { useTagContext, useThemeContext } from "../../context"
import { DndContext, useSensors, useSensor, MouseSensor } from "@dnd-kit/core"
import { arrayMove, SortableContext } from "@dnd-kit/sortable"
import { horizontalListSortingStrategy } from "@dnd-kit/sortable"

import { SortableItem } from "../../components/sort"
import { ArrowClockwise, ArrowLineRight, ArrowsInLineHorizontal, CaretDown, X } from "phosphor-react"

const iconSize = 22
const menuIconSize = 20

const menuItems: MenuProps["items"] = [
  { label: "Reload", icon: <ArrowClockwise size={menuIconSize} />, onclick: () => console.log(1) },
  { label: "Close", icon: <X size={menuIconSize} /> },
  { label: "Close Other Tabs", icon: <ArrowsInLineHorizontal size={menuIconSize} /> },
  { label: "Close Tabs to the Right", icon: <ArrowLineRight size={menuIconSize} /> },
].map((item, index) => ({ ...item, key: index }))

export default function Tags() {
  const { theme } = useThemeContext()
  const { pathname } = useLocation()
  const { tags, setTags } = useTagContext()
  const navigate = useNavigate()

  const sensors = useSensors(useSensor(MouseSensor, { activationConstraint: { distance: 10 } }))

  const handleClickMenuItem = (key: string | number) => {
    console.log(key)
    if (key == 0) {
      return navigate("/redirect" + pathname)
    }
  }

  function handleDragEnd(event) {
    console.log("drag end")
    const { active, over } = event
    if (active.id !== over.id) {
      setTags((items) => {
        const oldIndex = items.findIndex((item) => item.path == active.id)
        const newIndex = items.findIndex((item) => item.path == over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <div className="flex items-center justify-between h-8 bg-white p-0 border-solid border-0 border-t-[1px] border-b-[1px] border-t-[#d6d6d6] border-b-[#d6d6d6]">
      <DndContext
        // modifiers={[restrictToHorizontalAxis]}
        sensors={sensors}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          strategy={horizontalListSortingStrategy}
          items={tags.map((item) => ({ ...item, id: item.path }))}
        >
          {/* sortable */}
          <div className="flex items-center ">
            {tags.map((tag, index) => {
              return (
                <SortableItem key={tag.path} id={tag.path}>
                  <Dropdown
                    trigger={["contextMenu"]}
                    menu={{
                      onClick: ({ key }) => handleClickMenuItem(key),
                      items: menuItems,
                    }}
                  >
                    <Tag
                      key={tag.path}
                      onClick={() => navigate(tag.path)}
                      onClose={() => {
                        const newTags = tags.filter((i) => i.path != tag.path)
                        setTags(newTags)
                        console.log(tags[index].path == pathname, newTags)
                        if (tags[index].path == pathname) {
                          const nextRoute = tags[index + 1]?.path || newTags[newTags.length - 1]?.path || "/"
                          navigate(nextRoute)
                        }
                        // 需要跳转。关闭之后，跳转到下一个
                      }}
                      color={pathname == tag.path && theme.primaryColor}
                      closable={!tag.affix}
                      className="m-1 cursor-pointer z-[10001] select-none"
                    >
                      {tag.title}
                    </Tag>
                  </Dropdown>
                </SortableItem>
              )
            })}
          </div>
        </SortableContext>
      </DndContext>

      {/* tab actions */}
      <div className="flex items-center h-full">
        <div
          onClick={() => handleClickMenuItem(0)}
          className="h-full flex items-center px-2 border-solid border-0 border-l-[1px] border-[#d6d6d6]"
        >
          <ArrowClockwise className=" cursor-pointer" size={iconSize} />
        </div>
        <Dropdown
          trigger={["click"]}
          className=" whitespace-nowrap "
          placement="bottomRight"
          menu={{
            onClick: ({ key }) => handleClickMenuItem(key),
            items: menuItems,
          }}
        >
          <div className="h-full flex items-center px-2 border-solid border-0 border-l-[1px] border-[#d6d6d6]">
            <CaretDown className=" cursor-pointer" size={iconSize} />
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

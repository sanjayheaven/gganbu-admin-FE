import { Checkbox, Radio, Select, Switch, Tooltip } from "antd"
import { Button, DrawerProps, message, Popover } from "antd"
import { Drawer, Divider } from "antd"
import { useMemo, useState } from "react"
import { useThemeContext } from "../../context"
import { ChromePicker } from "react-color"
import copy from "copy-to-clipboard"

import { X, Gear, Copy } from "phosphor-react"
// import { disable as disableDarkMode } from "darkreader"
import { presetMotionOptions } from "../../components/presets"
import { primaryColorOptions } from "./utils"

export default function Setting({
  setShowDrawer,
  ...props
}: {
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>
} & DrawerProps) {
  const { theme, setTheme } = useThemeContext()

  const {
    primaryColor,
    layout,
    fixedHeader,
    showTags,
    showCollapse,
    contentWidth,
    collapsed,
    showLogo,
    showBread,
    showBreadIcon,

    menuStyle,
    animateName,
  } = theme

  const [pickerColor, setPickerColor] = useState(primaryColor)
  const width = 400 // drawe width also transform distance of config button

  const disableItem = useMemo(() => {
    const { layout, showBread } = theme
    return {
      showCollapse: layout == "top",
      collapsed: layout == "top",
      // showBread: layout == "top",
      showBreadIcon: !showBread,
    }
  }, [theme])

  const displayCheckOptions = [
    { label: "Tags Bar", value: "showTags" },
    {
      label: "Sidebar Collapse",
      value: "showCollapse",
      disabled: disableItem.showCollapse,
    },
    { label: "Logo", value: "showLogo" },
    { label: "BreadCrumb", value: "showBread" },
    {
      label: "BreadCrumb Icon",
      value: "showBreadIcon",
      disabled: disableItem.showBreadIcon,
    },
  ]
  return (
    <>
      <div
        style={{
          top: "calc(50% - 24px)",
          zIndex: 10001,
          backgroundColor: primaryColor,
          borderRadius: "4px 0 0 4px",
          right: (!props.visible && "0px") || width,
          transition: "all 0.3s cubic-bezier(.23,1,.32,1),box-shadow .3s cubic-bezier(.23,1,.32,1)",
        }}
        onClick={() => setShowDrawer(!props.visible)}
        className=" text-white fixed w-12 h-12 cursor-pointer flex items-center justify-center"
      >
        {(!props.visible && <Gear size={20} />) || <X size={20} />}
      </div>

      <Drawer closable={false} width={width} placement="right" {...props}>
        <Divider>
          <h3>Layout</h3>
        </Divider>

        <div className="grid grid-cols-3 items-center justify-items-center mb-8">
          {/* side */}
          <div
            onClick={() => {
              setTheme({ ...theme, layout: "side" })
              // disableDarkMode()
            }}
            className="w-16 h-12 rounded flex items-center cursor-pointer"
            style={{ boxShadow: "0 1px 2.5px 0 rgb(0 0 0 / 18%)" }}
          >
            <div className="h-full w-4 bg-black rounded-tl rounded-bl"></div>
            <div className="w-12 h-full relative">
              <div className="w-full h-3 absolute top-0 rounded-tr bg-white"></div>
              <div className="w-full h-9 absolute bottom-0 rounded-br bg-slate-200 flex items-center justify-center">
                <span
                  style={{
                    ...(layout == "side" && {
                      color: primaryColor,
                      padding: 2,
                      border: `1px solid ${primaryColor}`,
                      borderRadius: "50%",
                    }),
                  }}
                >
                  side
                </span>
              </div>
            </div>
          </div>
          {/* top */}
          <div
            onClick={() => {
              setTheme({ ...theme, layout: "top" })
              // disableDarkMode()
            }}
            className="w-16 h-12 cursor-pointer rounded"
            style={{ boxShadow: "0 1px 2.5px 0 rgb(0 0 0 / 18%)" }}
          >
            <div className=" rounded-br">
              <div className="w-16 h-3 rounded-tr rounded-tl bg-white"></div>
              <div className="w-16 h-9 rounded-br rounded-bl bg-slate-200 flex items-center justify-center">
                <span
                  style={{
                    ...(layout == "top" && {
                      color: primaryColor,
                      padding: 2,
                      border: `1px solid ${primaryColor}`,
                      borderRadius: "50%",
                    }),
                  }}
                >
                  top
                </span>
              </div>
            </div>
          </div>
          {/* mix */}
          <div
            onClick={() => {
              setTheme({ ...theme, layout: "mix" })
              // enableDarkMode({
              //   brightness: 100,
              //   contrast: 90,
              //   sepia: 10,
              // })
            }}
            className="w-16 h-12 rounded cursor-pointer"
            style={{ boxShadow: "0 1px 2.5px 0 rgb(0 0 0 / 18%)" }}
          >
            <div className="w-full h-3 top-0 rounded-tr rounded-tl bg-white"></div>
            <div className="flex items-center h-9">
              <div className="h-full w-4 bg-black rounded-bl"></div>
              <div className="h-full w-12 rounded-br bg-slate-200 flex items-center justify-center">
                <span
                  style={{
                    ...(layout == "mix" && {
                      color: primaryColor,
                      padding: 2,
                      border: `1px solid ${primaryColor}`,
                      borderRadius: "50%",
                    }),
                  }}
                >
                  mix
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>Fixed Header</div>
          <Switch checked={fixedHeader} onChange={(value) => setTheme({ ...theme, fixedHeader: value })} />
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>Content Width</div>
          <Radio.Group value={contentWidth} onChange={(e) => setTheme({ ...theme, contentWidth: e.target.value })}>
            <Radio value="fluid">Fluid</Radio>
            <Radio value="fixed">Fixed</Radio>
          </Radio.Group>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>Collapsed </div>
          <Switch
            disabled={disableItem.collapsed}
            checked={collapsed}
            onChange={(value) => setTheme({ ...theme, collapsed: value })}
          />
        </div>

        <Divider>
          <h3>Menu Style</h3>
        </Divider>

        <div className="flex justify-between items-center mb-4 w-full">
          <Radio.Group
            value={menuStyle}
            buttonStyle="solid"
            className="m-auto"
            onChange={(e) => setTheme({ ...theme, menuStyle: e.target.value })}
          >
            <Radio.Button value="dark">Dark</Radio.Button>
            <Radio.Button value="transparent">Transparent</Radio.Button>
            <Radio.Button value="white">White</Radio.Button>
          </Radio.Group>
        </div>

        {/* <Switch
          checked={ menuStyle === "dark"}
          onChange={(value) =>
            setTheme({ ...theme, menuStyle: (value && "dark") || "light" })
          }
          checkedChildren="Dark"
          unCheckedChildren="Light"
        /> */}

        <Divider>
          <h3>Color</h3>
        </Divider>

        <div className="flex gap-2 flex-wrap m-auto w-full justify-center">
          {primaryColorOptions.map((item) => {
            return (
              <Tooltip key={item.title || item.color} title={item.title || item.color}>
                <div
                  onClick={() => setTheme({ ...theme, primaryColor: item.color })}
                  style={{ backgroundColor: item.color }}
                  className=" w-5 h-5 cursor-pointer"
                >
                  {/* {item.color} */}
                </div>
              </Tooltip>
            )
          })}
        </div>

        <div className="mt-4">
          <Popover
            placement="topLeft"
            content={
              <>
                <ChromePicker color={pickerColor} onChange={(color) => setPickerColor(color.hex)} />
              </>
            }
            trigger="hover"
            onVisibleChange={(value) => !value && setTheme({ ...theme, primaryColor: pickerColor })}
          >
            <div
              className="float-right w-14 h-5 bg-white rounded-[2px] flex justify-center items-center cursor-pointer"
              style={{ border: "1px solid gray" }}
            >
              <div className="w-12 h-3" style={{ backgroundColor: pickerColor }}></div>
            </div>
          </Popover>
        </div>

        <Divider>
          <h3>Display</h3>
        </Divider>

        <Checkbox.Group
          className="m-0 w-full"
          value={[
            showTags && "showTags",
            showCollapse && "showCollapse",
            showLogo && "showLogo",
            showBread && "showBread",
            showBreadIcon && "showBreadIcon",
          ]}
          onChange={(checked: string[]) => {
            setTheme({
              ...theme,
              showTags: checked.includes("showTags"),
              showCollapse: checked.includes("showCollapse"),
              showLogo: checked.includes("showLogo"),
              showBread: checked.includes("showBread"),
              showBreadIcon: (checked.includes("showBread") && checked.includes("showBreadIcon")) || false,
            })
          }}
        >
          <div className="items-center grid grid-cols-2 gap-2">
            {displayCheckOptions.map((item) => {
              return (
                <Checkbox
                  key={item.label}
                  style={{ margin: 0 }}
                  disabled={item.disabled}
                  value={item.value}
                  className="m-0"
                >
                  {item.label}
                </Checkbox>
              )
            })}
          </div>
        </Checkbox.Group>

        <Divider>
          <h3>Transition Animation</h3>
        </Divider>

        <Select
          value={animateName}
          onChange={(value) => setTheme({ ...theme, animateName: value })}
          showSearch
          className=" w-full mb-4"
          options={presetMotionOptions.map((item) => {
            return { label: item.label, value: item.value }
          })}
        />

        <Button
          onClick={() => {
            copy(JSON.stringify(theme))
            message.success("Copied! Now paste to config/ config.ts")
          }}
          block
        >
          <div className=" flex items-center gap-2 justify-center">
            <Copy size={20} />
            <div>Copy</div>
          </div>
        </Button>
      </Drawer>
    </>
  )
}

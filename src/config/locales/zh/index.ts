import _common from "./_common"
import router from "./router"
import staff from "./staff"
import role from "./role"
import login from "./login"

export default {
  ..._common, //
  router,
  staff,
  role,
  login,
  PRODUCT_MANAGE: "产品管理",
}

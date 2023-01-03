import { persistStore } from "redux-persist"
import store from "./_store"

export * from "./hooks"

export const persistor = persistStore(store)

export default store

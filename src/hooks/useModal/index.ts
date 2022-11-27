import type { ModalProps } from "antd"
import { useState } from "react"

/**
 *
 * set default modal Props for modal
 *
 */
export default function useModal(initState?: ModalProps) {
  const [modal, setModal] = useState({
    onCancel: () => setModal({ ...modal, open: false }),
    ...initState,
  })
  return {
    modal,
    setModal,
  }
}

import { useState } from "react"

export default function useItem<T>(initState: T) {
  const [item, setItem] = useState<T>(initState)
  return { item, setItem }
}

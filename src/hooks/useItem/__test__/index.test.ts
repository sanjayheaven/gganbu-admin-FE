import { renderHook, act } from "@testing-library/react"
import useItem from "../index"

const setUp = (initState: object) => renderHook(() => useItem(initState))

describe("useItem", () => {
  it("test on methods", async () => {
    const { result } = setUp({ name: "" })
    expect(result.current.item).toStrictEqual({ name: "" })
    act(() => {
      result.current.setItem({ name: "1" })
    })
    expect(result.current.item).toStrictEqual({ name: "1" })
  })
})

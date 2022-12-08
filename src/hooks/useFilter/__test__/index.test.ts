import { renderHook, act } from "@testing-library/react"
import useFilter from "../index"

const setUp = (initState: object) => renderHook(() => useFilter(initState))

describe("useFilter", () => {
  it("test on methods", async () => {
    const { result } = setUp({ name: "" })
    expect(result.current.filter).toStrictEqual({ name: "" })
    act(() => {
      result.current.setFilter({ name: "1" })
    })
    expect(result.current.filter).toStrictEqual({ name: "1" })
  })
})

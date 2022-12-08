import { renderHook, act } from "@testing-library/react"
import useData from "../index"

const setUp = (initState?: []) => renderHook(() => useData(initState))

describe("useData", () => {
  it("test on methods", async () => {
    const { result } = setUp()
    expect(result.current.data).toStrictEqual({ name: "" })
    // act(() => {
    //   result.current.setData({ name: "1" })
    // })
    // expect(result.current.filter).toStrictEqual({ name: "1" })
  })
})

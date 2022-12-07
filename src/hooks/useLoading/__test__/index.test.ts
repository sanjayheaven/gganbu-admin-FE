import { renderHook, act } from "@testing-library/react"
import useLoading from "../index"

const setUp = (initState?: boolean) => renderHook(() => useLoading(initState))

describe("useLoading", () => {
  it("test on default value", () => {
    const { result } = setUp()
    expect(result.current.loading).toBe(false)
  })

  it("test on methods", async () => {
    const { result } = setUp()
    expect(result.current.loading).toBe(false)
    act(() => {
      result.current.setLoading(true)
    })
    expect(result.current.loading).toBe(true)
    act(() => {
      result.current.setLoading(false)
    })
    expect(result.current.loading).toBe(false)
  })
})

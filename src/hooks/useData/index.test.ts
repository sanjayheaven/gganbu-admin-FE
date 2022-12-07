import { describe, expect, test } from "@jest/globals"
// import { act, renderHook } from "@testing-library/react"

// import useData from "./index"

const sum = (a: number, b: number) => a + b

describe("useData", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3)
  })
})

describe("types", () => {
  it("should convert types when checking for loose equality only if values are of different types", () => {
    const a = {}
    const b = {}

    expect(a == b).toBe(false)
    expect(a == "[object Object]").toBe(true)
  })

  it("undefined and null should be equal", () => {
    expect(undefined == null).toBe(true)
  })
})

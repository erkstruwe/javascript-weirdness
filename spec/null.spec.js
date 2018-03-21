describe("null", () => {
  it("should be a type of object", () => {
    expect(typeof null).toBe("object")
  })

  it("should be neither true nor false", () => {
    expect(null == true).toBe(false)
    expect(null == false).toBe(false)
    expect(!!null).toBe(false)
  })
})

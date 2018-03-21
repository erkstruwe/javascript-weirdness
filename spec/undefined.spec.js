describe("undefined", () => {
  it("should be a type of undefined", () => {
    expect(typeof undefined).toBe("undefined")
  })

  it("should be neither true nor false, but falsey", () => {
    expect(undefined == true).toBe(false)
    expect(undefined == false).toBe(false)
    expect(!!undefined).toBe(false)
  })

  it("seems to be overwritable but it is not", () => {
    expect(undefined = "defined").toBe("defined")
    expect(undefined === "defined").toBe(false)
    expect(typeof undefined).toBe("undefined")
  })
})

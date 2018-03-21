describe("Number", () => {
  it("NaN (Not a Number) should be of type number", () => {
    expect(typeof NaN).toBe("number")
  })

  it("NaN (Not a Number) should not loosely equal anything, not even itself", () => {
    expect(isNaN(NaN)).toBe(true)
    expect(Object.is(NaN, NaN)).toBe(true)
    expect(NaN == NaN).toBe(false)
  })

  it("division by zero should return Infinity", () => {
    expect(1/0).toBe(Infinity)
    expect(-1/0).toBe(-Infinity)
  })

  it("should be subject to machine precision", () => {
    expect(0.1 + 0.2 == 0.3).toBe(false)
  })
})

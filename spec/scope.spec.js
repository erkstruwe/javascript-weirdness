describe("scope", () => {
  it("should hoist implicit variable declarations (but not initialization) with var", () => {
    const consoleLogSpy = spyOn(console, 'log')
    const referenceErrorFunction = () => {
      console.log(a)
    }
    const functionWithHoisting = () => {
      console.log(a)
      var a = "declared after usage"
    }

    expect(() => referenceErrorFunction()).toThrow(new ReferenceError("a is not defined"))
    expect(consoleLogSpy).not.toHaveBeenCalled()

    expect(() => functionWithHoisting()).not.toThrow()
    expect(consoleLogSpy.calls.allArgs()).toEqual([[undefined]])
  })
})

describe("Array", () => {
  it("should be a type of object", () => {
    expect(typeof []).toBe("object")
  })

  it("empty array should loosely equal false while being truthy", ()  => {
    const a = []

    expect(a == false).toBe(true)
    expect(a).toBeTruthy()
  })

  it("should behave weirdly when initial values are omitted", () => {
    const a = [undefined, undefined, undefined]
    const b = [,,]

    expect(a.length).toBe(3)
    expect(b.length).toBe(2)
  })

  it("should not contain its own elements if they are omitted (and only then)", () => {
    const a = [,]
    const b = [undefined]

    expect(a.length).toBe(1)
    expect(b.length).toBe(1)
    expect(a[0] === undefined).toBe(true)
    expect(b[0] === undefined).toBe(true)
    expect(a.indexOf(a[0]) > -1).toBe(false)
    expect(b.indexOf(a[0]) > -1).toBe(true)
  })
})

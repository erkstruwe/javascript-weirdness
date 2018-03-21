describe("String", () => {
  it("should be different if String() constructor was used", () => {
    expect("foo" === "foo").toBe(true)
    expect(new String("foo") === new String("foo")).toBe(false)
    expect("foo" === new String("foo")).toBe(false)
  })
})

test("example test", () => {
    var number = 12;
    var multiplier = "3"
    expect(number * multiplier).toBe(36);
});

test("Onko Arska karu", () => {
    expect("Karu Arska").toBeTruthy();
})

test("failing test", () => {
    var number = 123;
    expect(number).toBeGreaterThan(124);
})
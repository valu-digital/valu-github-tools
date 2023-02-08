test("example test", () => {
    var number = 12;
    var multiplier = "3"
    expect(number * multiplier).toBe(35);
});

test("Onko Arska karu", () => {
    expect("Karu Arska").toBeTruthy();
})
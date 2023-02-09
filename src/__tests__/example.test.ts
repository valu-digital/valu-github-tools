test("example test", () => {
    const number = 12;
    const multiplier = "3";
    // typescript tells you that you shouldn't be
    // doing arithmetics with strings, neat!
    expect(number * multiplier).toBe(36);
});

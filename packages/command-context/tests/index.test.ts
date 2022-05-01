import main from "../src";

test("main should returning string", () => {
    expect(main()).toBe("Hello World!");
});


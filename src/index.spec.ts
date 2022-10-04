import { foobar } from "./index";
describe("index", () => {
  it("should return foo", () => {
    const result = foobar();

    expect(result).toHaveProperty("bar");
  });
});

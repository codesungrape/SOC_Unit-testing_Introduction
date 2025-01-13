import { describe, it, expect } from "vitest";
import sum from "./sum";
// we are a beginner to this, please
describe("function takes in two inputs and reutns sum of two inputs", () => {
  it("", () => {
    //arrange
    const first = 1;
    const second = 2;
    const expected = 3;

    //act
    const actual = sum(first, second);

    //assert
    expect(actual).toBe(expected);
  });
});

import { describe, it, expect } from "vitest";
import { calculate } from "./calculator";

describe("Calculate for '+' operator", () => {
  it("calculate('+', 9, 10); should return 19", () => {
    //arrange
    const operator = "+";
    const firstNumber = 9;
    const secondNumber = 10;
    const expected = 19;

    //act
    const actual = calculate(operator, firstNumber, secondNumber);

    //assert
    expect(actual).toBe(expected);
  });
  it("check postive value + negative value so calculate('+', 9, -10); should return -1", () => {
    //arrange
    const operator = "+";
    const firstNumber = 9;
    const secondNumber = -10;
    const expected = -1;

    //act
    const actual = calculate(operator, firstNumber, secondNumber);

    //assert
    expect(actual).toBe(expected);
  });
  it("check one empty input so calculate('+', null, -10); should return -1", () => {
    //arrange
    const operator = "+";
    const firstNumber = null;
    const secondNumber = -10;
    const expected = "Incomplete operation, check inputs";

    //act
    const actual = calculate(operator, firstNumber, secondNumber);

    //assert
    expect(actual).toBe(expected);
  });
});

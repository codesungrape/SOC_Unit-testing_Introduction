import { describe, it, expect } from "vitest";
import { calculate } from "./calculator";

describe("Calculate function with '+' operator", () => {
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
  it("check postive number value + negative number value ", () => {
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
  it("if one empty input return error message", () => {
    //arrange
    const operator = "+";
    const firstNumber = null;
    const secondNumber = -10;
    const expected = "Error, you're missing a number input!";

    //act
    const actual = calculate(operator, firstNumber, secondNumber);

    //assert
    expect(actual).toBe(expected);
  });
});

describe("Calculate function with '-' operator", () => {
  it("calculate('-', 4, 6) should return -2", () => {
    //arrange
    const operator = "-";
    const firstNumber = 4;
    const secondNumber = 6;
    const expected = -2;
    //act
    const actual = calculate(operator, firstNumber, secondNumber);
    //assert
    expect(actual).toBe(expected);
  });
  it("Check output for negative numbers so calculate('-', -4, -6) should return 2", () => {
    //arrange
    const operator = "-";
    const firstNumber = -4;
    const secondNumber = -6;
    const expected = 2;
    //act
    const actual = calculate(operator, firstNumber, secondNumber);
    //assert
    expect(actual).toBe(expected);
  });
});

describe("Calculate function with '*' operator", () => {
  it("Negative inputs: calculate('*', -6, -8) should return 48", () => {
    const operator = "*";
    const firstNumber = -6;
    const secondNumber = -8;
    const expected = 48;

    const actual = calculate(operator, firstNumber, secondNumber);

    expect(actual).toBe(expected);
  });
  it("Positve inputs: calculate('*', 6, 8) should return 48", () => {
    const operator = "*";
    const firstNumber = 6;
    const secondNumber = 8;
    const expected = 48;

    const actual = calculate(operator, firstNumber, secondNumber);

    expect(actual).toBe(expected);
  });
  it("empty input: calculate('*', -6, -8) should return 48", () => {
    const operator = "*";
    const firstNumber = null;
    const secondNumber = -8;
    const expected = "Error, you're missing a number input!";

    const actual = calculate(operator, firstNumber, secondNumber);

    expect(actual).toBe(expected);
  });
});

describe("Calculate function with " / " operator", () => {
  it("Positive numbers: calculate('/', 121, 11); // should return 11", () => {
    const operator = "/";
    const firstNumber = 121;
    const secondNumber = 11;
    const expected = 11;

    const actual = calculate(operator, firstNumber, secondNumber);
    expect(actual).toBe(expected);
  });
  it("Negative numbers: calculate('/', -191, -11); // should return numbers up to two decimal points 17.36", () => {
    const operator = "/";
    const firstNumber = -191;
    const secondNumber = -11;
    const expected = 17.36;

    const actual = calculate(operator, firstNumber, secondNumber);
    expect(actual).toBe(expected);
  });
});

describe("Calculate function with 'sq' operator", () => {
  it("Positive numbers: calculate('sq', 5); // should return 25", () => {
    const operator = "sq";
    const firstNumber = 5;
    const secondNumber = 5;
    const expected = 25;

    const actual = calculate(operator, firstNumber, secondNumber);
    expect(actual).toBe(expected);
  });
  it("Negative numbers: calculate('sq', -18); // should return 324", () => {
    const operator = "sq";
    const firstNumber = -18;
    const secondNumber = 5;
    const expected = 324;

    const actual = calculate(operator, firstNumber, secondNumber);
    expect(actual).toBe(expected);
  });
});

describe("Testing invalid inputs", () => {
  it("calculate('%', 124, 56); should throw an error since '%' is not a supported operator", () => {
    const operator = "%";
    const firstNumber = 124;
    const secondNumber = 56;
    const expectedError = `Unsupported operator ${operator}`;

    expect(() => calculate(operator, firstNumber, secondNumber)).toThrow(
      expectedError
    );
  });
  it("calculate('🍕', -41414, 2); should throw an error since '🍕' is not a supported operator", () => {
    const operator = "🍕";
    const firstNumber = -41414;
    const secondNumber = 2;
    const expectedError = `Unsupported operator ${operator}`;

    expect(() => calculate(operator, firstNumber, secondNumber)).toThrow(
      expectedError
    );
  });
});

import { describe, it, test, expect } from "vitest";
import {
  calculateRoundResult,
  generateComputerMove,
  ROCK,
  PAPER,
  SCISSORS,
  WIN,
  LOSS,
  DRAW,
} from "./app.js";
import { ac } from "vitest/dist/chunks/reporters.D7Jzd9GS";

// generateComputerMove - not a PURE function
// Test 1: check random test for computer move, only rock/paper/scissors
// Test 2: use mockFunctions vi.spyOn(global.math, 'random')
// randomNumber = (start: Number, end: Number) => Number

describe("generateComputerMove", () => {
  test("generate computerMove only returns rock, paper, or scissors aka valid moves", () => {
    // arrange
    const possibleMoves = [ROCK, PAPER, SCISSORS];
    // loop through and checks the result for 1000 generateComputerMove(). testing larger sample size to catch any issues with randomness
    for (let i = 0; i < 1000; i++) {
      const move = generateComputerMove();
      // ASSERT: it should always be a valid one
      expect(possibleMoves).toContain(move);
    }
  });
});

// calculateRoundResult
// player wins and computer loses test - DONE
// player lose and computer test - DONE
// player and computer draw test - DONE
// invalid input tests
// missing inputs tests
// invalid type inputs

describe("calculateRoundResult", () => {
  test("ALL player WIN inputs and ALL computer LOSS inputs (playerMove{N} vs computerMove{n} where n = number", () => {
    const playerMove1 = PAPER;
    const computerMove1 = ROCK;
    const expected1 = {
      outcome: WIN,
      message: `Player chose ${playerMove1} and computer chose ${computerMove1}. Player wins.`,
    };

    const playerMove2 = SCISSORS;
    const computerMove2 = PAPER;
    const expected2 = {
      outcome: WIN,
      message: `Player chose ${playerMove2} and computer chose ${computerMove2}. Player wins.`,
    };
    const playerMove3 = ROCK;
    const computerMove3 = SCISSORS;
    const expected3 = {
      outcome: WIN,
      message: `Player chose ${playerMove3} and computer chose ${computerMove3}. Player wins.`,
    };

    const actual1 = calculateRoundResult(playerMove1, computerMove1);
    const actual2 = calculateRoundResult(playerMove2, computerMove2);
    const actual3 = calculateRoundResult(playerMove3, computerMove3);

    expect(actual1).toEqual(expected1);
    expect(actual2).toEqual(expected2);
    expect(actual3).toEqual(expected3);
  });
  test("ALL player LOSS inputs and ALL computer WIN inputs (playerMove{N} vs computerMove{n} where n = number", () => {
    const playerMove1 = ROCK;
    const computerMove1 = PAPER;
    const expected1 = {
      outcome: WIN,
      message: `Computer chose ${computerMove1} and player chose ${playerMove1}. Computer wins.`,
    };

    const playerMove2 = PAPER;
    const computerMove2 = SCISSORS;
    const expected2 = {
      outcome: WIN,
      message: `Computer chose ${computerMove2} and player chose ${playerMove2}. Computer wins.`,
    };
    const playerMove3 = SCISSORS;
    const computerMove3 = ROCK;
    const expected3 = {
      outcome: WIN,
      message: `Computer chose ${computerMove3} and player chose ${playerMove3}. Computer wins.`,
    };

    const actual1 = calculateRoundResult(playerMove1, computerMove1);
    const actual2 = calculateRoundResult(playerMove2, computerMove2);
    const actual3 = calculateRoundResult(playerMove3, computerMove3);

    expect(actual1).toEqual(expected1);
    expect(actual2).toEqual(expected2);
    expect(actual3).toEqual(expected3);
  });
  test("ALL player AND computer DRAW inputs, (playerMove{N} vs computerMove{n} where n = number", () => {
    const playerMove1 = ROCK;
    const computerMove1 = ROCK;
    const expected1 = {
      outcome: DRAW,
      message: `Both players chose ${playerMove1}. It's a draw.`,
    };

    const playerMove2 = PAPER;
    const computerMove2 = PAPER;
    const expected2 = {
      outcome: DRAW,
      message: `Both players chose ${playerMove2}. It's a draw.`,
    };
    const playerMove3 = SCISSORS;
    const computerMove3 = SCISSORS;
    const expected3 = {
      outcome: DRAW,
      message: `Both players chose ${playerMove3}. It's a draw.`,
    };

    const actual1 = calculateRoundResult(playerMove1, computerMove1);
    const actual2 = calculateRoundResult(playerMove2, computerMove2);
    const actual3 = calculateRoundResult(playerMove3, computerMove3);

    expect(actual1).toEqual(expected1);
    expect(actual2).toEqual(expected2);
    expect(actual3).toEqual(expected3);
  });
  //   test("NO INPUT for player, valid input for computer", () => {
  //     //arrange
  //     const playerMove = null;
  //     const computerMove = ROCK;
  //     const expected = "Error, missing input";
  //     //act
  //     const actual = calculateRoundResult(playerMove, computerMove);
  //     //assert
  //     expect(actual).toBe(expected);
  //   });
});

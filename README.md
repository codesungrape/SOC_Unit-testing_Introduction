# Unit testing

Developers write automated tests to check whether software works as expected. In this workshop, we'll learn unit testing - testing small units of logic in isolation. We'll use Vitest for easier test writing and running. Each folder is a separate Node project so `cd` into each before running NPM commands.

## 💡 OBJECTIVES FOR THE WORKSHOP

This workshop is all about unit testing! Here's a glimpse of what you'll be achieving by the end of this workshop:

- How to unit test an isolated piece of logic
- How to perform assertions using various matchers
- How to run unit tests

## 🎟️ TICKETS

Time to dive into action! 🏊‍♂️ Here's what you'll be working on:

### 🎫 Ticket 1 - Installing Vitest

Your manager wants you to install and set up Vitest in the `proof-of-concept` project so the team can start writing automated tests. There are no other details provided and your manager is currently unavailable to ask questions. You and your team need to figure things out on your own for now.

Below is how you've started to break the problem down so far:

- `cd` into the `proof-of-concept` project
  - Why: If you don't `cd` into the subfolder first, then by default you'll install NPM packages to your current working directory, which probably isn't the right place.
- Install Vitest as a dev dependency

  - Vitest is a third party package to help write tests. Since it's only needed during development/testing, install it as a dev dependency (rather than a regular dependency).
  - If you're stuck on how to install it, search online for their documentation and try to find a "getting started" guide.

- After installing Vitest, check if you can run it.

  - Why: Running Vitest, even without tests written yet, verifies that it is installed correctly and ready for you to start writing actual tests. Since you don't currently have any tests, you'd expect at this stage for the terminal to display something like "no tests found" or anything else that lets you know that Vitest ran.
  - If you're stuck on how to run/execute Vitest, search online for their documentation.

### 🎫 Ticket 2 - Writing a basic test skeleton

Great work getting Vitest installed and running in the `proof-of-concept` project! The team is excited to start adding test automation.

Your next task is to write the minimum amount of code needed to create and run a test. Your manager is still unavailable to ask for further clarification, but this is how you've started to break the task down so far:

- Within the `proof-of-concept` project, create a file called `bare-bones.test.js` .
  - Why: This creates a file within which you can put your tests. Ending the file with `test.js` lets Vitest know that this JavaScript file contains tests for it to run.
- Inside the `bare-bones.test.js` file, import `test` from `vitest`
  - Why: `test` is a function located within the Vitest package. It allows you to define test cases.
  - If you're stuck on how to import `test` from Vitest, look for examples online or in their documentation.
- Call `test` to define a new test named `"bare bones test should pass"` that doesn't do anything yet.

  - Why: Calling `test()` with correct arguments registers a new test.
  - If you're stuck on how to use/call `test`, look for examples online or in Vitest documentation.
  - After writing your test, run Vitest again and see whether it detects and passes your new test.
    - Why: This lets you know if Vitest is detecting your test file and the test within it. By default, tests pass and only fail if something went wrong or didn't meet our expectations.

🎯 Knowing how to read and write this sort of test skeleton is going to be a fundamental part of this exercise. Typically you'll have test files containing multiple tests, with each test building on top of this skeleton/structure.

### 🎫 Ticket 3 - Making assertions

Awesome, you now have your first passing test (although it's not checking anything yet)! You're almost ready to start writing more useful tests, but there's another fundamental concept you need to cover: assertions. Assertions are a key part of why automated testing is useful, as they check if a condition or value is what you expect.

To get the hang of assertions, your manager wants you to write a test and assert whether the function below correctly takes in two numbers and returns their sum:

```js
function sum(first, second) {
  return first + second;
}
```

The only information in the ticket is that `expect` is a function from Vitest that can be used to create assertions. Unfortunately your manager is currently tied up in a meeting and not available for further clarification. Looks like you and your team will need to try to progress on your own for now. Below is how you've started to break down the task:

- Within the `proof-of-concept` project, create a `sum.js` file. Within the file, declare and export the above `sum` function.
  - Why: This is the application code that you're testing and typically it will be in a separate file. In this case it's a function that adds two numbers, but it could just as well be a more complex function that performs some logic and returns some value.
- Within the `proof-of-concept` project, create a `sum.test.js`. Within `sum.test.js` plan out what you need for the test and what steps you need to take in the test. Here's an example plan you made earlier, but feel free to rewrite it.

  ```js
  //  import `test` and `expect` functions from Vitest
  //  import the `sum` function from sum.js
  //  create a bare bones test
  //  run Vitest to check that it detects and passes the new test
  //  inside the test:
  //      call the sum function with arguments: 5 and 7
  //      assert that the value returned is 12
  ```

- If you're stuck on how to use `expect` (from Vitest) to create assertions, have a look online for Vitest's documentation and examples.

### 🎫 Ticket 4 - Writing unit tests for a calculator app

Your manager has come out of the meeting and is elated to learn of your team's progress. Well done! You've been handed a different project to work on now (have a look at the `calculator` project). The code was written by a developer who recently left the company. Your manager wants to add features to the code in the near future but without breaking any of the existing functionality. The bad news is there are no tests, so making changes is risky until there are tests in place. (Without tests, it'd be difficult to tell if anything works differently after the changes.) The good news is the code is at least commented with basic documentation and examples of how it should work -- which will allow you and your team to write tests.

Your manager has tasked your team with the following:

- Set up and install Vitest within the `calculator` project
- Spend time reading `calculator.js` and getting familiar with how the code is meant to work
- Plan and write test cases/scenarios for the `calculate` function.
- Your tests should call the function with arguments and assert that the value returned is correct.
- There should also be at least one test that asserts that `calculate` throws an error when called with an unsupported operator.
- To improve coverage and confidence, write multiple tests for each supported operator with differing numbers.

Just as you think to ask further questions, your manager disappears into another meeting. Looks like you and your team are on your own again.

### 🎫 Ticket 5 - Unit testing a rock paper scissors game

News of your testing prowess has spread across the company. You and your team are assigned a final ticket -- the trickiest one yet. Your task is to write unit tests for `rock-paper-scissors` project. The codebase is in extremely bad shape and full of bugs and broken code. The JavaScript file doesn't even have the correct file extension. It's poorly formatted, difficult to read and there are no tests. There are supposedly some comments on the functions, which describe how the code is meant to work.

Your team has been tasked with:

- Rename `app.txt` to `app.js`
- Tidy up and format the code (a tool like Prettier may help with automatically formatting the code for you)
- Spend time reading through `app.js` and getting familiar with how the code is meant to work
- Create a file named `app.test.js` with a bare bones test and import the exported functions from `app.js`.
- Within `app.test.js`, plan and write test cases/scenarios for the following functions:
  - `calculateRoundResult` - you should have a test for each permutation of valid inputs and assert that it returns the correct value
  - `calculateRoundResult` - you should have a few tests for a few invalid inputs too and assert that it throws an error with the correct message
  - `calculateNewScores` - you should test different score objects with different outcomes and assert that the correct value is returned
  - `generateComputerMove` - you should have tests that verify and assert that the function can return either rock, paper or scissors.
    - The ticket also specifies that the team doesn't want randomness in the test (because if the test passes, it's hard to tell if it was just due to sheer chance or not -- and if the test randomly fails, it can be hard to reproduce the random number that caused it to fail).
    - Instead you and your team should research different approaches to predictably and reliably testing logic that depends on randomness and then write the tests based on what you've explored.

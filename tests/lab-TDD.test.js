//imports
const {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  squareRoot,
  floor,
  ceiling,
} = require("../lab-TDD-starter");

const { describe, test } = require("node:test");

const assert = require("node:assert");

//Suite and tests
describe("Lab-TDD tests", () => {
  //addition
  describe("Add function tests", () => {
    test("Add function should return 8 when adding 5 and 3", () => {
      assert.strictEqual(add(3, 5), 8);
    });
    test("Add function should return 0 when adding 5 and -5", () => {
      assert.strictEqual(add(-5, 5), 0);
    });
  });
  //subtraction
  describe("Subtract function tests", () => {
    test("Subtract function should return 2 when subtracting 8 and 6", () => {
      assert.strictEqual(subtract(8, 6), 2);
    });
    test("Subtract function should return 0 when subtracting 6 and 6", () => {
      assert.strictEqual(subtract(6, 6), 0);
    });
    test("Subtract function should return -2 when subtracting 8 and 6", () => {
      assert.strictEqual(subtract(6, 8), -2);
    });
  });
  //multiplication
  describe("Multiply function tests", () => {
    test("Multiply function should return 8 when multiplying 4 and 2", () => {
      assert.strictEqual(multiply(4, 2), 8);
    });
    test("Subtract function should return 0 when multiplying 0 and 6", () => {
      assert.strictEqual(multiply(0, 6), 0);
    });
    test("Subtract function should return -8 when multiplying 4 and -2", () => {
      assert.strictEqual(multiply(4, -2), -8);
    });
  });
  //division
  describe("Divide Function Tests", () => {
    test("Divide function should return 4 when dividing 32 by 8", () => {
      assert.strictEqual(divide(32, 8), 4);
    });
    test("Zero division should throw an error", () => {
      assert.throws(() => divide(10, 0), Error);
    });
  });
  //Modulus
  describe("Modulus Function Tests", () => {
    test("Modulus function should return 0 when performing 6 mod 3", () => {
      assert.strictEqual(modulas(6, 3), 0);
    });
    test("Modulus function should return 2 when performing 10 mod 4", () => {
      assert.strictEqual(modulas(10, 4), 2);
    });
    test("Modulus function should return -2 when performing -10 mod 4", () => {
      assert.strictEqual(modulas(-10, 4), -2);
    });
    test("Mod 0 should throw an error", () => {
      assert.throws(() => modulas(10, 0), Error);
    });
  });
});

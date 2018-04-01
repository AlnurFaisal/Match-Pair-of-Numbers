import { doubleArray, shuffle, generatePositiveNumber } from "./utils";

describe("random number generator", () => {
  it("should double the length the array", () => {
    expect(doubleArray([6])).toEqual([6, 6]);
  });

  it("should shuffle the number in the array", () => {
    const actualOutput = shuffle([1, 2, 3]);
    let actualSum = 0;
    actualOutput.forEach(element => (actualSum += element));
    expect(actualOutput.length).toEqual(3);
    expect(actualSum).toEqual(6);
  });

  it("should return an array of positive numbers", () => {
    const actual = generatePositiveNumber();
    expect(actual > 0).toBe(true);
  });
});

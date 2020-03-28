import { sum } from '../src';

describe("sum.test.ts", () => {
  it("should add two inputs together and return", () => {
    const val1: number = 5;
    const val2: number = 2;
    const expectedSum: number = val1 + val2;
    const result: number = sum(val1, val2);
    expect(result).toEqual(expectedSum);
  })
})
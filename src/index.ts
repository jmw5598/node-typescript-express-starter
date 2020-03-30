export const sum: Function = (a: number, b: number): number => {
  const result: number = a + b; // <== Leave out the semicolon to trigger error on commit.
  return result;
};

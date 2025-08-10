import { isConsonant } from "../src/util";

describe("isConsonant", () => {
  it("test with 'a'", () => {
    expect(isConsonant("a")).toBe(false);
  });

  it("test with 'b''", () => {
    expect(isConsonant("b")).toBe(true);
  });

  it("test with '.'", () => {
    expect(isConsonant(".")).toBe(false);
  });

  it("test with 'ß'", () => {
    expect(isConsonant("ß")).toBe(true);
  });

  it("test with 'ä'", () => {
    expect(isConsonant("ä")).toBe(false);
  });

  it("test with '1'", () => {
    expect(isConsonant("1")).toBe(false);
  });

  it("throws Error with more than one character", () => {
    expect(() => {
      isConsonant("ck");
    }).toThrow("Input must be a single character.");
  });

  it("throws Error with empty string", () => {
    expect(() => {
      isConsonant("");
    }).toThrow("Input must be a single character.");
  });
});

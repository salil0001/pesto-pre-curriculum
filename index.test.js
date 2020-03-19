const {
    describe,
    it,
    expect,
    adder,
    subtracter,
    division,
    multiple
  } = require('./index');

  describe("adder", () => {
    it("adds 2 numbers", () => {
      const result = adder(1, 2);
      expect(result).toBe(3);
    });
  });
  describe("subtracter", () => {
    it("sub 2 numbers", () => {
      const result = subtracter(5, 7);
      expect(result).toBe(-2);
    });
  });
  describe("division", () => {
    it("div 2 numbers", () => {
      const result = division(10, 5);
      expect(result).toBe(2);
    });
  });
  describe("multiple", () => {
    it("mul 2 numbers", () => {
      const result = multiple(1, 2);
      expect(result).toBe(2);
    });
  });
  
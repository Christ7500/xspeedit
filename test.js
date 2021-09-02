const assert = require("assert");
const xspeedit = require("./xspeedit").xspeedit;

describe("xspeedit", function () {
  it("should return the optimized result", function () {
    const input = "163841689525773";
    const expected = "91/82/81/73/73/64/6/55";
    expect(xspeedit(input)).toEqual(expected);
  });
});

"use strict";
const BookStorage = require("../Bookstorage");
const Books = require("../datastorage.json");

describe("getTotalPrice(id)", () => {
  const Store = new BookStorage(Books);

  test("Test 1.1. existing parameter getTotalPrice(1)", () => {
    expect(Store.getTotalPrice(1)).toBe(70);
  });

  test("Test 1.2. existing parameter getTotalPrice(2)", () => {
    expect(Store.getTotalPrice(2)).toBe(190);
  });

  test("Test 1.3. existing parameter getTotalPrice(3)", () => {
    expect(Store.getTotalPrice(3)).toBe(30);
  });

  const testValues = [
    [
      "Test 2 missing parameter getTotalPrice()",
      "",
      `nothing found with given id`,
    ],
    [
      "Test 3 non existing parameter getTotalPrice(10)",
      10,
      `nothing found with given id`,
    ],
    [
      "Test 4 wrong parameter getTotalPrice(name)",
      "name",
      `nothing found with given id`,
    ],
  ];

  test.each(testValues)("%s", (text, searchParameter, expected) => {
    expect(() => Store.getTotalPrice(searchParameter)).toThrow(expected);
  });
});

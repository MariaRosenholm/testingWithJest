"use strict";
const { TestWatcher } = require("jest");
const BookStorage = require("../Bookstorage");
const Books = require("../datastorage.json");

describe("getPriceWithoutExtras(id)", () => {
  const Store = new BookStorage(Books);
  test("Test 1.1. existing parameter getPriceWithoutExtras(1)", () => {
    expect(Store.getPriceWithoutExtras(1)).toBe(25);
  });

  test("Test 1.2. existing parameter getPriceWithoutExtras(3)", () => {
    expect(Store.getPriceWithoutExtras(3)).toBe(30);
  });

  const testValues = [
    [
      "Test 2 non existing parameter getPriceWithoutExtras(10)",
      10,
      `nothing found with given id`,
    ],
    [
      "Test 3 missing parameter getPriceWithoutExtras()",
      "",
      `nothing found with given id`,
    ],
    [
      "Test 4 wrong parameter getPriceWithoutExtras(name)",
      "name",
      `nothing found with given id`,
    ],
  ];

  test.each(testValues)("%s", (text, searchParameter, expected) => {
    expect(() => Store.getPriceWithoutExtras(searchParameter)).toThrow(
      expected
    );
  });
});

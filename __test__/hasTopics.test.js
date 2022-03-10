"use strict";
const BookStorage = require("../Bookstorage");
const Books = require("../datastorage.json");

describe("hasTopics", () => {
  const Store = new BookStorage(Books);

  const testValues = [
    ["Test 1, correct search parameter hasTopics(1)", 1, true],
    ["Test 2, correct search parameter hasTopics(2)", 2, true],
    ["Test 3, correct search parameter hasTopics(3)", 3, false],
    ["Test 4, non existing search parameter hasTopics(10)", 10, false],
    ["Test 5, search parameter missing hasTopics()", "", false],
    ["Test 6, wrong search parameter hasTopics(name)", "name", false],
  ];

  test.each(testValues)("%s", (text, searchParameter, expected) => {
    expect(Store.hasTopics(searchParameter)).toBe(expected);
  });
});

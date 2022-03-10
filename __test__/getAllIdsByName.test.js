"use strict";
const BookStorage = require("../Bookstorage");
const Books = require("../datastorage.json");

describe("getAllIdsByName", () => {
  const Store = new BookStorage(Books);

  const testValues = [
    ["Test 1, existing name, getAllIdsByName(databases)", "databases", [2, 3]],
    ["Test 2, non existing name, getAllIdsByName(baking)", "baking", []],
    ["Test 3, search parameter missing, getAllIdsByName()", "", []],
  ];

  test.each(testValues)("%s", (text, searchParameter, expectedResul) => {
    expect(Store.getAllIdsByName(searchParameter)).toEqual(expectedResul);
  });
});

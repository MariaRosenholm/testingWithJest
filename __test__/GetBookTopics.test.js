"use strict";
const BookStorage = require("../Bookstorage");
const Books = require("../datastorage.json");

describe("GetBookTopics(id)", () => {
  const Store = new BookStorage(Books);

  const testValues = [
    [
      "Test 1 topics exist in this book object GetBookTopics(1)",
      1,
      ["noSql", "sql", "future databases"],
    ],
    [
      "Test 2 topics exist in this book object GetBookTopics(2)",
      2,
      ["data storages", "sql", "noSql"],
    ],
    ["Test 3 topics do not exist in this book object GetBookTopics(3)", 3, []],
    ["Test 4 non existing search parameter GetBookTopics(10)", 10, []],
    ["Test 5 missing search parameter GetBookTopics()", "", []],
    ["Test 6 wrong search parameter GetBookTopics(name)", "name", []],
  ];

  test.each(testValues)("%s", (text, searchParameter, expected) => {
    expect(Store.GetBookTopics(searchParameter)).toEqual(expected);
  });
});

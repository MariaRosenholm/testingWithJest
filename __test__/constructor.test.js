"use strict";
const BookStorage = require("../Bookstorage");
const Books = require("../datastorage.json");

describe("Constructor", () => {
  test("Test 1 with default data", () => {
    const Store = new BookStorage(Books);
    expect(Store.BookStorage).toEqual(Books);
  });

  test("Test 2 without data", () => {
    expect(() => new BookStorage()).toThrow("data storage missing");
  });
});

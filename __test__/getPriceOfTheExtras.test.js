" use strict";
const BookStorage = require("../Bookstorage");
const Books = require("../datastorage.json");

describe("getPriceOfTheExtras(id)", () => {
  const Store = new BookStorage(Books);

  test("Test 1.1 existing search parameter getPriceOfTheExtras(1)", () => {
    expect(Store.getPriceOfTheExtras(1)).toBe(45);
  });

  test("Test 1.2 existing search parameter getPriceOfTheExtras(3)", () => {
    expect(Store.getPriceOfTheExtras(3)).toBe(0);
  });

  const testValues = [
    ["Test 2 missing search parameter getPriceOfTheExtras()", ""],
    ["Test 3 non existing search parameter getPriceOfTheExtras(10)", 10],
    ["Test 4 wrong search parameter getPriceOfTheExtras(name)", "name"],
  ];

  test.each(testValues)("%s", (text, searchParameter) => {
    expect(() => Store.getPriceOfTheExtras(searchParameter)).toThrow(
      `nothing found with given id`
    );
  });
});

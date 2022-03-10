" use strict";
const BookStorage = require("../Bookstorage");
const Books = require("../datastorage.json");

describe("getById()", () => {
  const Store = new BookStorage(Books);

  const testValues = [
    [
      "Test 1, existing id, getById(1)",
      1,
      {
        id: 1,
        name: "NoSql - New Hope",
        author: "Layla Jones",
        topics: ["noSql", "sql", "future databases"],
        price: 25,
        extras: [
          {
            name: "hard cover",
            price: 30,
          },
          {
            name: "cd",
            price: 15,
          },
        ],
      },
    ],
    [
      "Test 2, existing parameter getById(2)",
      2,
      {
        id: 2,
        name: "Databases - The rise and fall",
        author: "Antony Lee",
        topics: ["data storages", "sql", "noSql"],
        price: 45,
        extras: [
          {
            name: "signed by author",
            price: 80,
          },
          {
            name: "dvd",
            price: 65,
          },
        ],
      },
    ],
    ["Test 3, non existing id, getById(10)", 10, null],
    ["Test 4, wrong parameter, getById(name)", "name", null],
  ];

  test.each(testValues)("%s", (text, searchParameter, expectedResult) => {
    expect(Store.getById(searchParameter)).toEqual(expectedResult);
  });

  test("Test 5, without id, getById()", () => {
    expect(() => Store.getById("")).toThrow("parameter missing");
  });
});

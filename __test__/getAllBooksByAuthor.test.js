"use strict";
const BookStorage = require("../Bookstorage");
const Books = require("../datastorage.json");

describe("getAllBooksByAuthor", () => {
  describe("With default data", () => {
    const Store = new BookStorage(Books);

    test("Test 1 getAllBooksByAuthor('Emily White')", () => {
      expect(Store.getAllBooksByAuthor("Emily White")).toEqual([
        {
          id: 3,
          name: "Hacking databases",
          author: "Emily White",
          topics: [],
          price: 30,
          extras: [],
        },
      ]);
    });

    test("Test 2 getAllBooksByAuthor('Maria Rosenholm')", () => {
      expect(Store.getAllBooksByAuthor("Maria Rosenholm")).toEqual([]);
    });

    test("Test 3 getAllBooksByAuthor()", () => {
      expect(() => Store.getAllBooksByAuthor()).toThrow("missing parameter");
    });
  });
  test("Test 4 with test data. Multiple books by same author", () => {
    const Store = new BookStorage([
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
      {
        id: 2,
        name: "Databases - The rise and fall",
        author: "Layla Jones",
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
      {
        id: 3,
        name: "Hacking databases",
        author: "Emily White",
        topics: [],
        price: 30,
        extras: [],
      },
    ]);
    expect(Store.getAllBooksByAuthor("Layla Jones")).toEqual([
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
      {
        id: 2,
        name: "Databases - The rise and fall",
        author: "Layla Jones",
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
    ]);
  });
});

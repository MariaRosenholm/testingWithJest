"use strict";
const BookStorage = require("../Bookstorage");
const Books = require("../datastorage.json");

describe("getAllBookAuthors", () => {
  test("Test 1 with default data", () => {
    const Store = new BookStorage(Books);
    expect(Store.getAllBookAuthors()).toEqual([
      "Layla Jones",
      "Antony Lee",
      "Emily White",
    ]);
  });

  test("Test 2 with test data including two books from same author", () => {
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
    expect(Store.getAllBookAuthors()).toEqual(["Layla Jones", "Emily White"]);
  });

  test("Test 3 with empty test data", () => {
    const Store = new BookStorage([]);
    expect(Store.getAllBookAuthors()).toEqual([]);
  });

  test("Test 4 with test data: author name missing and empty", () => {
    const Store = new BookStorage([
      {
        id: 1,
        name: "NoSql - New Hope",
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
        author: "",
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
    expect(Store.getAllBookAuthors()).toEqual(["Emily White"]);
  });
});

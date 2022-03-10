"use strict";

module.exports = class BookStorage {
  constructor(jsonData) {
    if (!jsonData) throw new Error("data storage missing");
    this.BookStorage = jsonData;
  }

  getById(id) {
    if (!id) throw new Error("parameter missing");
    if (!Number === id) return null;
    for (let book of this.BookStorage) {
      if (id === book.id) {
        return book;
      }
    }
    return null;
  }

  getAllIdsByName(name) {
    if (!name) return [];
    const results = [];
    for (let book of this.BookStorage) {
      if (book.name.toLowerCase().includes(name.toLowerCase())) {
        results.push(book.id);
      }
    }
    return results;
  }

  getAllBookAuthors() {
    if (this.BookStorage.length === 0) return [];
    const results = [];
    for (let book of this.BookStorage) {
      if (book.author) {
        if (results.length === 0 || !results.includes(book.author))
          results.push(book.author);
      }
    }
    return results;
  }

  getAllBooksByAuthor(name) {
    if (!name) throw new Error("missing parameter");
    const results = [];
    for (let book of this.BookStorage) {
      if (book.author && name === book.author) results.push(book);
    }
    return results;
  }

  hasTopics(id) {
    if (!id) return false;
    for (let book of this.BookStorage) {
      if (book.id === id && book.topics.length > 0) return true;
    }
    return false;
  }

  GetBookTopics(id) {
    if (!id) return [];
    for (let book of this.BookStorage) {
      if (book.id === id && book.topics.length > 0) return book.topics;
    }
    return [];
  }

  getPriceWithoutExtras(id) {
    if (!id) throw new Error(`nothing found with given id`);
    for (let book of this.BookStorage) {
      if (book.id === id) return book.price;
    }
    throw new Error(`nothing found with given id`);
  }

  getTotalPrice(id) {
    if (!id) throw new Error(`nothing found with given id`);
    let result = 0;
    for (let book of this.BookStorage) {
      if (book.id === id) {
        result += book.price;
        if (book.extras.length > 0) {
          for (let extra of book.extras) {
            result += extra.price;
          }
        }
        return result;
      }
    }
    throw new Error(`nothing found with given id`);
  }

  getPriceOfTheExtras(id) {
    if (!id) throw new Error(`nothing found with given id`);
    let result = 0;
    for (let book of this.BookStorage) {
      if (book.id === id) {
        if (book.extras.length > 0) {
          for (let extra of book.extras) {
            result += extra.price;
          }
        }
        return result;
      }
    }
    throw new Error(`nothing found with given id`);
  }
};

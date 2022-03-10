# Tests

## **constructor(jsonData)**

## Test 1

With default data.

**constructor(jsonData)**

Returns jsonData.

## Test 2

No data.

**constructor()**

Throws an error and returns `'data storage missing'`

## **Methods**

## **getById(id)**

## Test 1

Searching with existing id.

**getById(1)**

Returns

```json
{
  "id": 1,
  "name": "NoSql - New Hope",
  "author": "Layla Jones",
  "topics": ["noSql", "sql", "future databases"],
  "price": 25,
  "extras": [
    {
      "name": "hard cover",
      "price": 30
    },
    {
      "name": "cd",
      "price": 15
    }
  ]
}
```

## Test 2

Searching with existing id.

**getById(2)**

Returns

```json
{
  "id": 2,
  "name": "Databases - The rise and fall",
  "author": "Antony Lee",
  "topics": ["data storages", "sql", "noSql"],
  "price": 45,
  "extras": [
    {
      "name": "signed by author",
      "price": 80
    },
    {
      "name": "dvd",
      "price": 65
    }
  ]
}
```

## Test 3

Searching with non existing id.

**getById(10)**

Returns **null**.

## Test 4

Searching with wrong parameter.

**getById(name)**

Returns **null**.

## Test 5

Searching without id.

**getById()**

Throws an execption and returns `'parameter missing'`.

## **getAllIdsByName(value)**

## Test 1

Search id with existing name.

**getAllIdsByName(databases)**

Returns [2, 3].

## Test 2

Search id with wrong name.

**getAllIdsByName(baking)**

Returns [].

## Test 3

Search id without name.

**getAllIdsByName()**

Returns [].

## **getAllBookAuthors()**

## Test 1

With default data.

**getAllBookAuthors()**

Returns ["Layla Jones", "Antony Lee","Emily White" ]

## Test 2

With test data

```json
[
  {
    "id": 1,
    "name": "NoSql - New Hope",
    "author": "Layla Jones",
    "topics": ["noSql", "sql", "future databases"],
    "price": 25,
    "extras": [
      {
        "name": "hard cover",
        "price": 30
      },
      {
        "name": "cd",
        "price": 15
      }
    ]
  },
  {
    "id": 2,
    "name": "Databases - The rise and fall",
    "author": "Layla Jones",
    "topics": ["data storages", "sql", "noSql"],
    "price": 45,
    "extras": [
      {
        "name": "signed by author",
        "price": 80
      },
      {
        "name": "dvd",
        "price": 65
      }
    ]
  },
  {
    "id": 3,
    "name": "Hacking databases",
    "author": "Emily White",
    "topics": [],
    "price": 30,
    "extras": []
  }
]
```

**getAllBookAuthors()**

Returns ["Layla Jones","Emily White" ]

## Test 3

With test data [].

Returns [].

## Test 4

With test data

```json
[
  {
    "id": 1,
    "name": "NoSql - New Hope",
    "topics": ["noSql", "sql", "future databases"],
    "price": 25,
    "extras": [
      {
        "name": "hard cover",
        "price": 30
      },
      {
        "name": "cd",
        "price": 15
      }
    ]
  },
  {
    "id": 2,
    "name": "Databases - The rise and fall",
    "author": "",
    "topics": ["data storages", "sql", "noSql"],
    "price": 45,
    "extras": [
      {
        "name": "signed by author",
        "price": 80
      },
      {
        "name": "dvd",
        "price": 65
      }
    ]
  },
  {
    "id": 3,
    "name": "Hacking databases",
    "author": "Emily White",
    "topics": [],
    "price": 30,
    "extras": []
  }
]
```

**getAllBookAuthors()**

Returns ["Emily White"]

## **getAllBooksByAuthor(author)**

## Test 1

Correct parameter.

**getAllBooksByAuthor("Emily White")**

Returns

```json
[
  {
    "id": 3,
    "name": "Hacking databases",
    "author": "Emily White",
    "topics": [],
    "price": 30,
    "extras": []
  }
]
```

## Test 2

Searching for non existing Author.

**getAllBooksByAuthor("Maria Rosenholm")**

Returns [].

## Test 3

Missing parameter.

**getAllBooksByAuthor()**

Throws an exception and returns 'missing parameter'.

## Test 4

Test data with multiple books by same author.

```json
[
  {
    "id": 1,
    "name": "NoSql - New Hope",
    "author": "Layla Jones",
    "topics": ["noSql", "sql", "future databases"],
    "price": 25,
    "extras": [
      {
        "name": "hard cover",
        "price": 30
      },
      {
        "name": "cd",
        "price": 15
      }
    ]
  },
  {
    "id": 2,
    "name": "Databases - The rise and fall",
    "author": "Layla Jones",
    "topics": ["data storages", "sql", "noSql"],
    "price": 45,
    "extras": [
      {
        "name": "signed by author",
        "price": 80
      },
      {
        "name": "dvd",
        "price": 65
      }
    ]
  },
  {
    "id": 3,
    "name": "Hacking databases",
    "author": "Emily White",
    "topics": [],
    "price": 30,
    "extras": []
  }
]
```

**getAllBooksByAuthor("Layla Jones")**

Returns

```json
[
  {
    "id": 1,
    "name": "NoSql - New Hope",
    "author": "Layla Jones",
    "topics": ["noSql", "sql", "future databases"],
    "price": 25,
    "extras": [
      {
        "name": "hard cover",
        "price": 30
      },
      {
        "name": "cd",
        "price": 15
      }
    ]
  },
  {
    "id": 2,
    "name": "Databases - The rise and fall",
    "author": "Layla Jones",
    "topics": ["data storages", "sql", "noSql"],
    "price": 45,
    "extras": [
      {
        "name": "signed by author",
        "price": 80
      },
      {
        "name": "dvd",
        "price": 65
      }
    ]
  }
]
```

## **hasTopics(id)**

## Test 1

Correct parameter.

**hasTopics(1)**

Returns true.

## Test 2

Correct parameter.

**hasTopics(2)**

Returns true.

## Test 3

Correct parameter.

**hasTopics(3)**

Returns false.

## Test 4

Non existing parameter.

**hasTopics(10)**

Returns false.

## Test 5

Parameter missing.

**hasTopics()**

Returns false.

## Test 6

Wrong parameter

**hasTopics(name)**

Returns false.

## **GetBookTopics(id)**

## Test 1

Topics exist in this book object

**GetBookTopics(1)**

Returns ["noSql", "sql", "future databases"].

## Test 2

Topics exist in this book object.

**GetBookTopics(2)**

Returns ["data storages", "sql", "noSql"].

## Test 3

Topics do not exist in this book object.

**GetBookTopics(3)**

Returns [].

## Test 4

Non existing parameter.

**GetBookTopics(10)**

Returns [].

## Test 5

Missing parameter.

**GetBookTopics()**

Returns [].

## Test 6

Wrong parameter.

**GetBookTopics(name)**

Returns [].

## **getPriceWithoutExtras(id)**

## Test 1

1.1.
Correct parameter.

**getPriceWithoutExtras(1)**

Returns 25.

1.2.
**getPriceWithoutExtras(3)**

Returns 30.

## Test 2

Non existing parameter.

**getPriceWithoutExtras(10)**

Throws an exception and returns `nothing found with given id`.

## Test 3

Missing parameter.

**getPriceWithoutExtras()**

Throws an exception and returns `nothing found with given id`.

## Test 4

Wrong parameter.

**getPriceWithoutExtras(name)**

Throws an exception and returns `nothing found with given id`.

## **getTotalPrice(id)**

## Test 1

1.1.

Correct parameter

**getTotalPrice(1)**

Returns 70.

1.2.

Correct parameter

**getTotalPrice(2)**

Returns 190.

1.3.

Correct parameter

**getTotalPrice(3)**

Returns 30.

## Test 2

Missing parameter

**getTotalPrice()**

Throws an exception and returns `nothing found with given id`.

## Test 3

Non existing parameter

**getTotalPrice(10)**

Throws an exception and returns `nothing found with given id`.

## Test 4

Wrong parameter

**getTotalPrice(name)**

Throws an exception and returns `nothing found with given id`.

## **getPriceOfTheExtras(id)**

## Test 1

Correct parameter

1.1.

**getPriceOfTheExtras(1)**

Returns 45.

1.2.

**getPriceOfTheExtras(3)**

Returns 0.

## Test 2

Missing parameter

**getPriceOfTheExtras(0)**

Throws an exception and returns `nothing found with given id`.

## Test 3

Non existing parameter

**getPriceOfTheExtras(10)**

Throws an exception and returns `nothing found with given id`.

## Test 4

Wrong parameter

**getPriceOfTheExtras(name)**

Throws an exception and returns `nothing found with given id`.

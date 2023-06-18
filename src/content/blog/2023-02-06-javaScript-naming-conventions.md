---
title: JavaScript Naming Conventions
publishDate: 2023-02-06T00:00:00.000Z
description: Types of Symlinks and how to create and delete them
category: Guides
tags:
  - Javascript
  - Code Quality
cover: "/uploads/covers/javascript.png"
---

When it comes to writing clean and understandable code in JavaScript, following a standard naming convention is crucial.
Yes, I know, it's not the most exciting topic in the world, but bear with me. You might think that taking the time to
properly name your variables is a waste of time and an added burden, but trust me, as your projects expand, and you gain
more experience, you'll thank yourself for taking the time to use good naming conventions.
They enhance the clarity of your code and make it easier for both you and other developers to comprehend and collaborate
on your codebase.

Now, before we dive in, let me warn you, there are a lot of opinions out there about what makes a good naming
convention, some of the naming conventions you come across may be controversial while others are widely accepted by the
community. But whether you prefer `camelCase`, `snake_case`, or `kebab-case`, the key is to be consistent. Don't be that
person who switches between naming conventions like they're changing socks.

Now that we've got that out of the way, let's dive in and explore these naming conventions in more detail.

## Variables

JavaScript variable names are case-sensitive, meaning that lowercase and uppercase letters are treated as distinct.
For instance, all the following variables are completely unique and represent separate entities in the code.

```js
let name = "Mody";
let NAME = "Samy";

console.log(name); // Mody
console.log(NAME); // Samy
```

However, the most recommended way to declare JavaScript variables is with camel case variable names. You can use the
camel case naming convention for all types of variables in JavaScript, and it will ensure that there aren’t multiple
variables with the same name.

```js
// Bad
let lastname = "Metainy";

// Bad
let last_name = "Metainy";

// Bad
let LASTNAME = "Metainy";

// Bad
let LAST_NAME = "Metainy";

// Good
let lastName = "Metainy";
```

The names of variables should be self-explanatory and describe the stored value. For example, if you need a variable to
store user's last name, you should use `lastName` instead of a random variable name, since it is more meaningful.

```js
// Bad
let ln = "Metainy";

// Bad
let name = "Metainy";

// Good
let lastName = "Metainy";
```

## Boolean

When it comes to Boolean variables, we should use is, has, or can as prefixes. For example, if you need a Boolean
variable to
check if a user's account is verified, you should use `isVerified` as the variable name.

Here are a few examples of good and bad Boolean variable naming.

```js
// Bad
let image = true;

// Good
let hasImage = true;
```

```js
// Bad
let edit = false;

// Good
let canEdit = false;
```

```js
// Bad
let admin = true;

// Good
let isAdmin = true;
```

## Functions

JavaScript function names are also case-sensitive. So, similar to variables, the camel case approach is the recommended
way to declare function names.

In addition to that, you should use descriptive nouns and verbs as prefixes. For example, if we declare a function to
retrieve a name, the function name should be `getName`.

```js
// Bad
function name(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Good
function getName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
```

```js
// Bad
function name(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Good
function getName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
```

You should always try to strike a balance between meaningfulness and conciseness. A function name should be descriptive
enough to convey its purpose and functionality, allowing users to understand its intent at a glance.
However, excessively long function names can make code harder to read and comprehend. It is important to find a
middle ground where the function name provides enough clarity without being excessively verbose.

Now, let's take a look at some examples.

```js
// Bad
function grabAllUsersFromDatabase() {
  // ...
}

// Good
function fetchUsers() {
  // ...
}
```

```js
// Bad
function calculateTotalPriceIncludingDiscount() {
  // ...
}

// Bad
function processPrice() {
  // ...
}

// Good
function calculateFinalPrice() {
  // ...
}
```

## Constants

JavaScript's constants are also case-sensitive. However, these constants should be written in uppercase because they are
non-changing variables.

```js
const SPEED = 4;
const TOKEN = "Token";
```

If the variable declaration name contains more than one word, you should use `UPPER_SNAKE_CASE`.

```js
const API_KEY = "API Key";
```

All the constants should be defined at the start of your file, method, class, or preferably in a separate file, it all
depends on your project structure.

## Classes

Naming convention rules for JavaScript classes are pretty similar to functions. We have to use descriptive titles that
explain the class’s capabilities.

The major difference between function and class names is that we have to use `Pascal` case for class names.

```js
class CarDriver {

  constructor(driverName, driverLicence) {
    this.driverName = driverName;
    this.driverLicence = driverLicence;
  }
}

let carDriver = new CarDriver("Samy", "Licence");
```

Your class names should always be nouns, and it's preferable to use the singular form of a noun for class names.

## Methods

Although there are some differences, the structure of a JavaScript function and a method are pretty similar. So, naming
convention rules are the same.

We must use camel case to declare JavaScript methods and use verbs as prefixes to make names more meaningful.

```js
class CarDriver {

  constructor(driverName, driverLicence) {
    this.driverName = driverName;
    this.driverLicence = driverLicence;
  }

  getDriver() {
    return this.driverName;
  }
}

let carDriver = new CarDriver("Samy", "Licence");

console.log(carDriver.getDriver()); // Samy
```

## Denoting Private Functions

Underscores `_` are widely used in languages like MySQL and PHP to define variables, functions, and methods. But in
JavaScript, an underscore is used to denote private variables or functions.

For example, if you have a private function name like `userId`, you can denote it as a private function by adding an
underscore as a prefix `_userId`.

Please note that the use of underscores is not a strict rule enforced by JavaScript itself; instead, it is a widely
adopted convention among JavaScript developers. and if you're using TypeScript, you already have access to the private
modifier to explicitly mark members as private.

```js
class CarDriver {

  constructor(driverName, driverLicence) {
    this.driverName = driverName;
    this.driverLicence = driverLicence;
    this._driverStatus = 1;
  }

  getDriverStatus() {
    return this._driverStatus ? "Active" : "Inactive";
  }
}

let carDriver = new CarDriver("Samy", "Licence");

// Good
let driverName = carDriver.name;
console.log(driverName); // Samy

// Good
let driverStatus = driverName.getDriverStatus();
console.log(driverStatus); // Active

// Bad
let driverStatus = driverName._driverStatus;
console.log(driverStatus); // 1
```

## Global Variables

When it comes to global files in JavaScript, JavaScript doesn't enforce any strict rules for naming global files.
However, keeping things organized and avoiding naming conflicts is crucial.

It is recommended to use `camel case` for mutable global variables and `uppercase` for immutable global variables.

For example, if we have a global value that can be changed throughout our application, we can define it like any other
variable.

```js
let playerLevel = 10;
```

In the case where our global variable is immutable, it will be treated like a constant.

```js
const API_KEY = "KEY";
```

## File Names

Most web servers (Apache, Unix) are case-sensitive when it comes to handling files. For example, `cover.jpg` isn’t
`Cover.jpg`.

On the other hand, web servers, such as Microsoft’s IIS, do not care about the case. In such servers, you can use
`Cover.jpg` or `cover.jpg` to access `Cover.jpg`.

However, if you switch from a case-insensitive server to a case-sensitive server, even a tiny mistake can cause your
website to crash.

So, it is recommended to always use lowercase file names in all servers despite their case-sensitive support.

## Conclusion

In a nutshell, by giving meaningful and consistent names to your variables, functions, and classes, you'll enhance code
clarity, teamwork, and the overall quality of your codebase, and the key is to be consistent, find a pattern and stick
to it (preferably a good one).

---
title: The Power of Code Comments
publishDate: 2022-11-20T00:00:00.000Z
description: Enhance your code readability and collaboration with code comments
category: Guides
tags:
  - Code Quality
cover: "/uploads/covers/comments.webp"
---

Comments are developer's way to explain the code in a readable and easy to understand way, and like most thing they
have conventions and standards, but mostly it should be governed by company's development guidelines.

## Why It's Important?

Reading and understanding code that you didn't write yourself could be a challenge, and in most cases writing your code
from scratch will feel easier than understanding someone's else code. That's when comments comes in. They serve as
concise annotations that provide insights, explanations, and context to the codebase, enabling developers
to understand the purpose, logic, and functionality of the code.

However, comments serve more than just helping others understand your codebase. They also come to the rescue when you
revisit your own code after a few months (or even just a couple of days if you have my memory).

Not to mention, almost all code editors can and will utilize your comments to offer better and more accurate code
completion for you and for anyone else using your code.

## Types of Comments

Let's begin by exploring the most common types of comments and understanding the differences between them, as well as
their appropriate usages.

### Inline

Inline comments should be very short and very specific, explaining the exact line where we write them.

```js
const d = new Date(); // Get today's date
```

### Single Line

Single line comments are generally used to describe what a line of code does or the next block of code if they share the
same responsibility.

```js
// Get today date in days
const date = new Date();
const day = date.getDate();
```

We just described what a block of code does using a single line comment, which is more than enough for this case.

### Multi-line

Multi-line comments are used to describe the purpose of a big chunk of code.

There is two ways to create a multi-line or block comments.

```js
/*
   This file is responsible for generating inspiring quotes.
   We can also detail any requirement or even relevant links in here.
*/
```

The above example is completely valid, however, most developers prefer the next approach.

```js
/**
 * This file is responsible for generating inspiring quotes.
 * We can also detail any requirement or even relevant links in here.
 */
```

### Annotations

Annotations is a special kind of comments. Well, not really, it's more like a set of tags you can write in a block
comment which by turn enables your code editor to offer accurate code completion, parameter info, type hinting and much
more.

Not only that, some frameworks heavily rely on annotations to function or generate accurate documentation.

Although annotations are not limited to a single language, they can behave differently based on the language you're
using, but they're still extremely powerful tool anyway.

```js
/**
 * Combine first and last name into a full name.
 *
 * @param {String} firstName
 * @param {String}  lastName
 * @returns {string} fullName
 */
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
```

Using annotations in the example above to describe what this function does, as well as defining the parameter and return
types, makes it much easier for any developer using your code to provide accurate arguments and know
what kind of return type to expect.

## Guidelines

As I mentioned above, when it comes to comment guidelines, they can vary depending on the company you work for. However,
there are common use cases and conventions that can serve as a helpful starting point.

### Keep it short

Comments should summarize what your code does so keep it short, descriptive and to the point. No one like to read a long
essay.

### Abusing comments

Yes comments are helpful tool but overusing them can be redundant in some cases, consider this code below:

```js
const d = new Date(); // Assign today's date to variable d
```

Instead of a comment explaining what's going on here we can utilize the code in this case to make a self-documenting
code. We can change our code to:

```js
const today = new Date();
```

There is no need for a comment in this case. Just by changing the variable name the code has become self-explanatory.

### Avoid redundant comments

Sometimes the function name can be self-explanatory, the name tells you exactly what the function does. If your comment
simply repeat the function name then it doesn't provide any real value, consider the example below:

```js
/**
 * Get full name.
 *
 * @param {String} firstName
 * @param {String}  lastName
 * @returns {string} fullName
 */
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
```

We can argue that this comments doesn't really provide any useful data beside the parameter type hinting. This should be
avoided.

Let's try to be more descriptive.

```js
/**
 * Combine first and last name into a full name.
 *
 * @param {String} firstName
 * @param {String} lastName
 * @returns {string} fullName
 */
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
```

Yea I know there is no much to be said here anyway, but you get the idea. At least our comment isn't completely useless.

### Use Tags

Annotation tags are an amazing and very powerful tool, they unassuming and redundant at first, but trust me, they can
work wonders in making your code crystal clear.  
Use `@param` and `@return` whenever you can, even if the parameters are super obvious.

## Conclusion

Using comments might feel like a time wasting process at first but it's important to know that a well documented code is
an essential part of the development process.

Comments not only help you and other developers understand the code and it's purpose, it can also help you organize and
plan your immediate goals.

It's completely fine if you're not fully aware of the correct way to use comments, that's why it's always a good idea to
refer to well known open-source projects to learn the correct usage of comments and best practices.

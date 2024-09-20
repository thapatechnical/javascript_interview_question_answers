# Introduction to Regular Expressions

Regular expressions are sequences of characters that define a search pattern. these patterns are widely used for string searching and manipulation. in validation, regex helps ensure that strings such as email addresses and passwords conform to expected formats.

## Basic Syntax

- **literals**: ordinary characters like 'a', '1', or '%'.

- **metacharacters**: characters with special meanings, like `.` (any character), `^ (caret)` (start of string), `$` (end of string), etc.

- **character classes**: sets of characters, like `[a-z]` for any lowercase letter.
- **character classes & shorthand**: In addition to specific character sets, regex includes several shorthand character classes that help match common character types:

### digit characters

- `\d`: matches any digit (0-9).
- `\D`: matches any non-digit.

### whitespace characters

- `\s`: matches any whitespace character (including spaces, tabs, and line breaks).
- `\S`: matches any non-whitespace character.

- **quantifiers**: specify how many times a character can occur, like `+` (one or more) or `*` (Zero or more times) or `{1,3}` (between one and three times).

- **escape characters**: use a backslash (`\`) to escape special characters and treat them like ordinary characters.
  **examples**:
- `\.`: matches a literal dot.
- `\$`: matches a dollar sign `$`.
- `\^`: matches a caret `^`.

## Practice - Email Validation

to validate an email, we want to check three main things:

1. **local part**: the part before the `@` symbol.
2. **domain**: the part after the `@` but before the top-level domain.
3. **top-level domain (tld)**: the last part following the last dot.

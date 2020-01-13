# cube-dotenv

A simple module on top of [dotenv](https://github.com/motdotla/dotenv) to let you override your main `.env` with a `.env.local`.

For more detailed env parsing rules, please refer to the documentation of [dotenv](https://github.com/motdotla/dotenv#rules).

This extension also use [dotenv-expand](https://github.com/motdotla/dotenv-expand) for variable expansion.

## Installation

```bash
yarn add cube-dotenv
```

## Usage

As early as possible in your application, require and configure cube-dotenv:

```javascript
import dotenv from 'cube-dotenv'

dotenv.config()

// You may want to override the default path
dotenv.config({ path: '.env.demo' })
```

## eslint-config-typescript

> A set of typescript *(default)* lint config rules

### Installation

```bash
yarn add -D @blucass/eslint-config-typescript

# or

npm install -D @blucass/eslint-config-typescript
```

### Usage

In your eslint config file, set the `extends`:

```json
{
  "extends": ["@blucass/typescript"]
}
```

Or module exports immediately:

```js
module.exports = require('@blucass/eslint-config-typescript')
```

### Just for JS

> **NOTE**：you must provide a babel config file such as `babel.config.js` in the root directory, since will not parse any experimental syntax when no configuration file is found. [See more](https://www.npmjs.com/package/@babel/eslint-parser).

If you are just using `js/jsx`, what means you don't need typescript lint rules. We also support that with `@blucass/eslint-config-typescript/lib/eslint`.

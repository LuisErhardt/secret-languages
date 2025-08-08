# secret-languages

This project contains functions, that translate text from or to secret languages, which are often used by children.

So far, the language Grünich is implemented.

## Installation

```bash
npm install secret-languages
```

## Usage

```ts
import { toGruefnisch, fromGruefnisch } from "secret-languages";

const translation = toGruefnisch("Hallo");
console.log(translation); // "Hanafallonofo"

const reverseTranslation = fromGruefnisch("Hanafallonofo");
console.log(reverseTranslation); // "Hallo"
```

## Scripts

- `npm run build` — Compile TypeScript to JavaScript
- `npm run test` — Run tests

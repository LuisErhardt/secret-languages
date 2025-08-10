# secret-languages

This project contains functions, that translate text from or to secret languages, which are often used by children.

So far, the languages Grünisch and Räubersprache are implemented.

## Installation

```bash
npm install secret-languages
```

## Usage

```ts
import { toGruefnisch, fromGruefnisch, toRaeubersprache, fromRaeubersprache } from "secret-languages";

const translation = toGruefnisch("Hallo");
console.log(translation); // "Hanafallonofo"

const reverseTranslation = fromGruefnisch("Hanafallonofo");
console.log(reverseTranslation); // "Hallo"

const translation = toRaeubersprache("Hallo");
console.log(translation); // "Hohalollolo"

const reverseTranslation = fromRaeubersprache("Hohalollolo");
console.log(reverseTranslation); // "Hallo"
```

## Scripts

- `npm run build` — Compile TypeScript to JavaScript
- `npm run test` — Run tests

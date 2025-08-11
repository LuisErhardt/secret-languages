# secret-languages

This project contains functions, that translate text from or to secret languages, which are often used by children.

So far, the languages Grüfnisch and Räubersprache are implemented.

## Installation

```bash
npm install secret-languages
```

## Usage

```ts
import { toGruefnisch, fromGruefnisch, toRaeubersprache, fromRaeubersprache } from "secret-languages";

let translation = toGruefnisch("Hallo");
console.log(translation); // "Hanafallonofo"

let reverseTranslation = fromGruefnisch("Hanafallonofo");
console.log(reverseTranslation); // "Hallo"

translation = toRaeubersprache("Hallo");
console.log(translation); // "Hohalollolo"

reverseTranslation = fromRaeubersprache("Hohalollolo");
console.log(reverseTranslation); // "Hallo"
```

## Scripts

- `npm run build` — Compile TypeScript to JavaScript
- `npm run test` — Run tests

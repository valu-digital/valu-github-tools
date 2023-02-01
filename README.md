# valu-github-tools

Git(hub) helpers and project practices

Credits to:
[Valu Digital](https://github.com/valu-digital)
[Esa-Matti Suuronen](https://github.com/esamattis)

## .gitignore

Keep your git repo clean.
Keep your secrets outside of git.

## Naming

Descriptive function and variable names make code
easier to read and understand.

```ts
const p = "Erkki Esimerkki";
const a = 179;
const b = 82;
const c = b / Math.pow(a, 2);

console.log(p + " bmi = " + c);

// vs.

const person = "Erkki Esimerkki";
const height = 179;
const weight = 82;
const bmi = weight / Math.pow(height, 2);

console.log(`${person} bmi = ${bmi}`);
```

## Commenting

Good comment does not explain what is being done, but why something is done.

```ts
// weight divided by height squared
weight / Math.pow(height, 2);

// vs.

// body mass index formula
weight / Math.pow(height, 2);
```

## Prettier

Code formatting tool [docs](https://prettier.io/docs/en/index.html)

Installing it to project and enabling format on save makes writing
standardized code effortless.

## Jest

Test suite [docs](https://jestjs.io/docs/getting-started)

## Scripts

Git(hub) helpers/shortcuts to speed up your workflow
Some examples in `src/scripts/*`

## Typescript

Like strongly typed javascript.
Makes writing maintainable code easier.

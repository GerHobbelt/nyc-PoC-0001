# mocha PoC \#4675

Quick &amp; dirty demo of issue [\#0001](https://github.com/mochajs/mocha/issues/4675)

## How to use?

```
npm install
npm test
```

shows an all-zeroes coverage report like this:

```
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |
----------|---------|----------|---------|---------|-------------------
```

while the **expected** coverage report should say something along the lines of '100% coverage': see the code in `test/test.js` running a few tests, exercising the very simple code in `lib/index.js`, after all.


## P.S.: circleCI runs and reports ALL GREEN/SUCCESS, but do check those numbers: they are still ZERO there too!

Adding commandline options like `--functions 90`, etc. doesn't help one bit as 90% of zero is still ZERO and apparently considered a PASS. :sad:


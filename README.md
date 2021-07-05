# nyc PoC \#0001

Quick &amp; dirty demo of issue [\#1416](https://github.com/istanbuljs/nyc/issues/1416)

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

> `npx envinfo` output is part of the `npm test` output, so can easily be observed in any CI or local rig, any time.




## P.S.: [circleCI runs and reports ALL GREEN/SUCCESS, but do check those numbers: they are still ZERO there too!](https://app.circleci.com/pipelines/github/GerHobbelt/nyc-PoC-0001)

Adding commandline options like `--functions 90`, etc. doesn't help one bit as 90% of zero is still ZERO and apparently considered a PASS. 😭

For example: [this run](https://app.circleci.com/pipelines/github/GerHobbelt/nyc-PoC-0001/9/workflows/9f1ef696-55b4-4f91-8fff-79bc9733db45/jobs/25?invite=true#step-106-17).



## Github Actions

[Ditto](https://github.com/GerHobbelt/nyc-PoC-0001/runs/2992555611?check_suite_focus=true#step:7:18)


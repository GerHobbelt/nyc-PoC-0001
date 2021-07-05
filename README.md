# mocha PoC \#4675

Quick &amp; dirty demo of issue [\#4675](https://github.com/mochajs/mocha/issues/4675)

## How to use?

```
npm install
npm test
```

should show a mocha error.

See `test/test.js`: comment out the last `import` statement in there and uncomment one of the two `import`s preceeding it to have a proper test run will all green checks.

The point of 4675 is that the (here obvious) error in the import statement in `test/test.js` is hidden from us, which can throw one off in larger projects and when the typo is *subtle* and/or the test file is much larger, with *multiple `import` statements and other cruft vying for your attention*.

## From `test.js`:

**PoC 4675**
 
Uncomment any of the first 2 import statements below to have mocha work properly and pass all tests.
Everything GREEN.
 
The third import statement has an error (made very obvious here: file does not exist!)
and observe mocha *hiding* this fact:

``` 
$ npm test

> mocha-poc-4675@1.0.0 test
> mocha
 
 
Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: Z:\lib\tmp\mocha-PoC-4675\test\test.js
require() of ES modules is not supported.
require() of Z:\lib\tmp\mocha-PoC-4675\test\test.js from Z:\lib\tmp\mocha-PoC-4675\node_modules\mocha\lib\esm-utils.js is an ES module file as it is a .js file
whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
Instead rename test.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from Z:\lib\tmp\mocha-PoC-4675\package.json.
 
     at new NodeError (node:internal/errors:363:5)
     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1112:13)
     at Module.load (node:internal/modules/cjs/loader:975:32)
     at Function.Module._load (node:internal/modules/cjs/loader:816:12)
     at Module.require (node:internal/modules/cjs/loader:999:19)
     at require (node:internal/modules/cjs/helpers:93:18)
     at Object.exports.requireOrImport (Z:\lib\tmp\mocha-PoC-4675\node_modules\mocha\lib\esm-utils.js:55:18)
     at async Object.exports.loadFilesAsync (Z:\lib\tmp\mocha-PoC-4675\node_modules\mocha\lib\esm-utils.js:74:20)
     at async singleRun (Z:\lib\tmp\mocha-PoC-4675\node_modules\mocha\lib\cli\run-helpers.js:125:3)
     at async Object.exports.handler (Z:\lib\tmp\mocha-PoC-4675\node_modules\mocha\lib\cli\run.js:366:5)
```


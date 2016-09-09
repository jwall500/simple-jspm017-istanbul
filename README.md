### GETTING STARTED:
#### 1. Get all dependencies

    $ npm install
    $ jspm install

#### 2. Create the bundle used for coverage

    $ npm run-script create-coverage-bundle

#### 3. Start the server

    $ npm run-script start-server

### THE ISSUE:
systemjs-istanbul-hook isn't instrumenting ES6 code when using jspm.Builder.  It is instrumenting ES5 code, however.

#### Steps to Reproduce
1. Comment out the ES5 code in `lib/main.js`, leaving the ES6 code
2. Create the coverage bundle by running `npm run-script create-coverage-bundle`
3. Observe the code isn't instrumented in the the coverage bundle, `lib/main-bundle-systemIstanbul.js`
4. Comment out the ES6 code in `lib/main.js`, leaving the ES5 code
5. Create the coverage bundle by running `npm run-script create-coverage-bundle`
6. Observe instrumented code in the the coverage bundle, `lib/main-bundle-systemIstanbul.js`

 
#### Set `esModules: true` in systemjs-istanbul-hook

1. Add `esModules: true` to the instrumenter config in systemjs-istanbul-hook/index.js
2. Add the updated systemjs-istanbul-hook as a dev dependency of this project

#### Get all dependencies

    $ npm install
    $ jspm install

#### Create the bundle used for coverage

    $ npm run-script create-coverage-bundle

#### Start the server (defaults to localhost:9090/front-end/index.html)

    $ npm run-script start-server

Observe something is instrumented in the the coverage bundle, `lib/main-bundle-systemIstanbul.js`
Observe the `window.__coverage__` object is populated in the browser at localhost:9090/front-end/index.html
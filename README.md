## jspm init OUTPUT:

    manteo:simple-jspm-istanbul jwall$ jspm init
    Would you like jspm to prefix the jspm package.json properties under jspm? [yes]:yes
    Enter server baseURL (public folder path) [./]:
    Enter jspm packages folder [./jspm_packages]:
    Enter config file path [./config.js]:
    Configuration file config.js doesn't exist, create it? [yes]:yes
    Enter client baseURL (public folder URL) [/]:
    Do you wish to use a transpiler? [yes]:no
    ok   Verified package.json at package.json
         Verified config file at config.js
         Looking up loader files...
           system.js
           system-csp-production.js
           system.js.map
           system-polyfills.js
           system.src.js
           system-csp-production.js.map
           system-csp-production.src.js
           system-polyfills.js.map
           system-polyfills.src.js

         Using loader versions:
           systemjs@0.19.37
    ok   Loader files downloaded successfully

## USE ES5 OR ES6 CODE:
1. Uncomment desired ES in lib/main.js
2. Comment out undesired ES in lib/main.js

## GETTING STARTED:
### 1. Get all dependencies

    $ npm install
    $ jspm install

### 2. Create the bundle used for coverage

    $ npm run-script create-coverage-bundle

### 3. Start the server

    $ npm run-script start-server
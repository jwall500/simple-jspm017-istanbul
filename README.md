jspm init OUTPUT:

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

CREATE COVERAGE BUNDLE:
    npm run-script create-coverage-bundle

START SERVER:
    npm install
    npm run-script start-server
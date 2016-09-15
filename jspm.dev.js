SystemJS.config({
  map: {
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.15"
  },
  packages: {
    "npm:babel-runtime@5.8.38": {
      "map": {}
    },
    "npm:core-js@1.2.7": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    }
  }
});

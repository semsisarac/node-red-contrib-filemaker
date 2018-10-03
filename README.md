
# node-red-contrib-filemaker

[![npm version](https://img.shields.io/npm/v/node-red-contrib-filemaker.svg)](https://www.npmjs.com/package/node-red-contrib-filemaker) [![Build Status](https://img.shields.io/travis/Luidog/node-red-contrib-filemaker/master.svg)](https://travis-ci.org/Luidog/node-red-contrib-filemaker) [![Coverage Status](https://img.shields.io/coveralls/Luidog/node-red-contrib-filemaker/master.svg)](https://coveralls.io/r/Luidog/node-red-contrib-filemaker?branch=master)

A node-red filemaker module. This module uses the Data API to connect with a FileMaker server.

## Installation

```sh
npm install --save node-red-contrib-filemaker
```

```default
> node-red-contrib-filemaker@0.1.0 test /Users/luidelaparra/Documents/Development/node-red-contrib-filemaker
> nyc _mocha --recursive  "test/**/*_spec.js" --timeout=30000 --exit



  Client Node
    ✓ should be loaded

  Create Record Node
    ✓ should be loaded

  Edit Record Node
    ✓ should be loaded

  Field Data Utility Node
    ✓ should be loaded

  Perform Find Node
    ✓ should be loaded

  Get Record Node
    ✓ should be loaded

  List Records Node
    ✓ should be loaded

  Field Data Utility Node
    ✓ should be loaded

  Perform Script Node
    ✓ should be loaded

  Field Data Utility Node
    ✓ should be loaded

  Perform Script Node
    ✓ should be loaded


  11 passing (153ms)

---------------|----------|----------|----------|----------|-------------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
---------------|----------|----------|----------|----------|-------------------|
All files      |    18.64 |        0 |    22.45 |    18.97 |                   |
 client        |    22.22 |      100 |       20 |    22.22 |                   |
  client.js    |    22.22 |      100 |       20 |    22.22 |  5,6,8,9,10,11,12 |
 nodes         |    18.35 |        0 |    22.73 |    18.69 |                   |
  create.js    |    16.67 |      100 |       20 |    16.67 |... 7,8,9,14,16,17 |
  edit.js      |    16.67 |      100 |       20 |    16.67 |... 7,8,9,14,16,17 |
  fieldData.js |       25 |      100 |    33.33 |    28.57 |         3,4,5,6,7 |
  find.js      |    16.67 |        0 |       20 |    16.67 |... 7,8,9,14,17,19 |
  get.js       |    16.67 |      100 |       20 |    16.67 |... 7,8,9,14,16,17 |
  list.js      |    16.67 |        0 |       20 |    16.67 |... 7,8,9,14,17,19 |
  recordId.js  |       25 |      100 |    33.33 |    28.57 |         3,4,5,6,7 |
  script.js    |    16.67 |      100 |       20 |    16.67 |... 7,8,9,14,16,17 |
  transform.js |    22.22 |        0 |    33.33 |    22.22 |     3,4,5,6,7,8,9 |
  upload.js    |    16.67 |      100 |       20 |    16.67 |... 7,8,9,14,16,17 |
---------------|----------|----------|----------|----------|-------------------|
```

## <a name="dependencies">Dependencies</a>

- [fms-api-client](https://github.com/Luidog/fms-api-client): A FileMaker Data API client designed to allow easier interaction with a FileMaker application from a web environment.
- [lodash](https://github.com/lodash/lodash): Lodash modular utilities.
- [marpat](https://github.com/luidog/marpat): A class-based ES6 ODM for Mongo-like databases.

## <a name="dev-dependencies">Dev Dependencies</a>

- [coveralls](https://github.com/nickmerwin/node-coveralls): takes json-cov output into stdin and POSTs to coveralls.io
- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-google](https://github.com/google/eslint-config-google): ESLint shareable config for the Google style
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Turns off all rules that are unnecessary or might conflict with Prettier.
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier): Runs prettier as an eslint rule
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [mocha-lcov-reporter](https://github.com/StevenLooman/mocha-lcov-reporter): LCOV reporter for Mocha
- [mos](https://github.com/mosjs/mos): A pluggable module that injects content into your markdown files via hidden JavaScript snippets
- [mos-plugin-dependencies](https://github.com/mosjs/mos/tree/master/packages/mos-plugin-dependencies): A mos plugin that creates dependencies sections
- [mos-plugin-installation](https://github.com/mosjs/mos/tree/master/packages/mos-plugin-installation): A mos plugin for creating installation section
- [mos-plugin-license](https://github.com/mosjs/mos-plugin-license): A mos plugin for generating a license section
- [mos-plugin-execute](https://github.com/team-767/mos-plugin-execute): Mos plugin to inline a process output
- [node-red](https://github.com/node-red/node-red): A visual tool for wiring the Internet of Things
- [node-red-node-test-helper](https://github.com/node-red/node-red-node-test-helper): A test framework for Node-RED nodes
- [nyc](https://github.com/istanbuljs/nyc): the Istanbul command line interface
- [prettier](https://github.com/prettier/prettier): Prettier is an opinionated code formatter

## License

MIT © Lui de la Parra
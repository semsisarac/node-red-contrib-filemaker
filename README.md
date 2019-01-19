# node-red-contrib-filemaker

Node Red FileMaker nodes. These nodes use [fms-api-client](https://github.com/Luidog/fms-api-client) to connect to FileMaker Server. Each node exposes an fms-api-client method or utility. Nodes connecting to FileMaker Server depend upon a configurable FileMaker Data API [client](https://github.com/Luidog/fms-api-client#client-creation).

## Project Information

[![npm version](https://badge.fury.io/js/node-red-contrib-filemaker.svg)](https://www.npmjs.com/package/node-red-contrib-filemaker) [![Build Status](https://travis-ci.com/Luidog/node-red-contrib-filemaker.svg?branch=master)](https://travis-ci.com/Luidog/node-red-contrib-filemaker) [![Coverage Status](https://img.shields.io/coveralls/Luidog/node-red-contrib-filemaker/master.svg)](https://coveralls.io/r/Luidog/node-red-contrib-filemaker?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/Luidog/node-red-contrib-filemaker/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Luidog/node-red-contrib-filemaker?targetFile=package.json)

The nodes in this project use [fms-api-client](https://github.com/Luidog/fms-api-client) to connect to FileMaker Server. Each node exposes an fms-api-client method or utility. Nodes connecting to FileMaker Server depend upon a configurable FileMaker Data API [client](https://github.com/Luidog/fms-api-client#client-creation).

Each node can be configured to use either static or dynamic input parameters. Dynamic parameters may be
read from either the `msg` property or the `flow` or `global` context. The default output of each node is `msg.payload`. A node can also be configured to merge its output with any property on the `msg` object.

:v: and :heart: - [Lui de la Parra](https://mutesymphony.com)

## Table of Contents

- [node-red-contrib-filemaker](#node-red-contrib-filemaker)
  * [Project Information](#project-information)
  * [Table of Contents](#table-of-contents)
  * [Installation](#installation)
  * [Login Node](#login-node)
    + [Login Illustration](#login-illustration)
    + [Login Flow](#login-flow)
  * [Logout Node](#logout-node)
    + [Logout Illustration](#logout-illustration)
    + [Logout Flow](#logout-flow)
  * [Create Node](#create-node)
    + [Create Illustration](#create-illustration)
    + [Create Flow](#create-flow)
  * [Edit Node](#edit-node)
    + [Edit Illustration](#edit-illustration)
    + [Edit Flow](#edit-flow)
  * [Delete Node](#delete-node)
    + [Delete Illustration](#delete-illustration)
    + [Delete Flow](#delete-flow)
  * [Get Node](#get-node)
    + [Get Illustration](#get-illustration)
    + [Get Flow](#get-flow)
  * [List Node](#list-node)
    + [List Illustration](#list-illustration)
    + [List Flow](#list-flow)
  * [Find Node](#find-node)
    + [Find Illustration](#find-illustration)
    + [Find Flow](#find-flow)
  * [Script Node](#script-node)
    + [Script Illustration](#script-illustration)
    + [Script Flow](#script-flow)
  * [Upload Node](#upload-node)
    + [Upload Illustration](#upload-illustration)
    + [Upload Flow](#upload-flow)
  * [Globals Node](#globals-node)
    + [Globals Illustration](#globals-illustration)
    + [Globals Flow](#globals-flow)
  * [Field Data Node](#field-data-node)
    + [Field Data Illustration](#field-data-illustration)
    + [Field Data Flow](#field-data-flow)
  * [Record Ids Node](#record-ids-node)
    + [Record Ids Illustration](#record-ids-illustration)
    + [Record Ids Flow](#record-ids-flow)
  * [Transform Node](#transform-node)
    + [Transform Illustration](#transform-illustration)
    + [Transform Flow](#transform-flow)
  * [Container Data Node](#container-data-node)
    + [Container Data Illustration](#container-data-illustration)
    + [Container Data Flow](#container-data-flow)
  * [Tests](#tests)
  * [License](#license)
  * [Dependencies](#dependencies)
  * [Development Dependencies](#development-dependencies)

## Installation

```sh
npm install --save node-red-contrib-filemaker
```

## Login Node

The login node will open a FileMaker Data API session. This node will also save the resulting authentication for future use by the configured client.

### Login Illustration

![Login Node](examples/images/login-node.png)

### Login Flow

[![Example Flow](https://img.shields.io/badge/Flow-Login%20Node-red.svg)](examples/flows/login-example.json)

## Logout Node

The logout node closes the currently open Data API session and removes the associated authentication token.

### Logout Illustration

![Logout Node](examples/images/logout-node.png)

### Logout Flow

[![Logout Example Flow](https://img.shields.io/badge/Flow-Logout%20Node-red.svg)](examples/flows/logout-example.json)

## Create Node

The create node creates a record in FileMaker. By default The create node will use the value in `msg.payload.layout` as the layout context and `msg.payload.data` for setting field and portal data.

### Create Illustration

![Create Node](examples/images/create-node.png)

### Create Flow

[![Create Example Flow](https://img.shields.io/badge/Flow-Create%20Node-red.svg)](examples/flows/logout-example.json)

## Edit Node

The edit node edits a specific record in FileMaker. By default the edit node will use `msg.payload.recordId` as the record Id to target for editing, the data found in `msg.payload.data` for editing field and portal data, and `msg.payload.layout` as the layout context.

### Edit Illustration

![Edit Node](examples/images/edit-node.png)

### Edit Flow

[![Edit Example Flow](https://img.shields.io/badge/Flow-Edit%20Node-red.svg)](examples/flows/edit-example.json)

## Delete Node

The delete node deletes a specific record in FileMaker. By default the delete node will use `msg.payload.recordId` as the record Id to target for deletion and `msg.payload.layout` as the layout context.

### Delete Illustration

![Delete Node](examples/images/delete-node.png)

### Delete Flow

[![Delete Example Flow](https://img.shields.io/badge/Flow-Delete%20Node-red.svg)](examples/flows/delete-example.json)

## Get Node

The get node retrieves a specific FileMaker record. By default the get node will use `msg.payload.layout` as the layout context, and `msg.payload.recordId` as the record id to target.

### Get Illustration

![Get Node](examples/images/get-node.png)

### Get Flow

[![Get Example Flow](https://img.shields.io/badge/Flow-Get%20Node-red.svg)](examples/flows/get-example.json)

## List Node

The List node lists FileMaker records for a specified layout. By default the list node will use the value found in `msg.payload.layout` as layout context.

### List Illustration

![List Node](examples/images/list-node.png)

### List Flow

[![List Example Flow](https://img.shields.io/badge/Flow-List%20Node-red.svg)](examples/flows/list-example.json)

## Find Node

The find node performs a find in FileMaker. By Default the find node will user `msg.payload.layout` as the layout context, and `msg.payload.query` as query parameters.

### Find Illustration

![Find Node](examples/images/find-node.png)

### Find Flow

[![Find Example Flow](https://img.shields.io/badge/Flow-Find%20Node-red.svg)](examples/flows/find-example.json)

## Script Node

The script node will trigger a script in FileMaker. By default the script node will use `msg.payload.layout` as the layout context, and `msg.payload.script` as the script to run. An optional script parameter may also be passed using `msg.payload.parameter`.

### Script Illustration

![Script Node](examples/images/script-node.png)

### Script Flow

[![Script Example Flow](https://img.shields.io/badge/Flow-Script%20Node-red.svg)](examples/flows/script-example.json)

## Upload Node

The upload node will transfer binary data to a FileMaker container. By default the upload node will use `msg.payload.file` as either a string path or buffer object and `msg.payload.layout` as the layout context.

### Upload Illustration

![Upload Node](examples/images/upload-node.png)

### Upload Flow

[![Upload Example Flow](https://img.shields.io/badge/Flow-Upload%20Node-red.svg)](examples/flows/upload-example.json)

## Globals Node

The globals node will set global record values for the current FileMaker session. The globals node will use `msg.payload.data` to set global fields. 

### Globals Illustration

![Globals Node](examples/images/globals-node.png)

### Globals Flow

[![Globals Example Flow](https://img.shields.io/badge/Flow-Globals%20Node-red.svg)](examples/flows/globals-example.json)

## Field Data Node

The field data node reduces the data found in `msg.payload.data` to only include the `modId`, `recordId`, and `fieldData` properties.

### Field Data Illustration

![Field Data Node](examples/images/field-data-node.png)

### Field Data Flow

[![Field Data Example Flow](https://img.shields.io/badge/Flow-Field%20Data%20Node-red.svg)](examples/flows/field-data-example.json)

## Record Ids Node

The record ids node reduces the data found in `msg.payload.data` to only include the `recordId` property.

### Record Ids Illustration

![Record Ids Node](examples/images/record-ids-node.png)

### Record Ids Flow

[![Record Ids Example Flow](https://img.shields.io/badge/Flow-Record%20Ids%20Node-red.svg)](examples/flows/record-ids-example.json)

## Transform Node

The tranform node transforms data in `msg.payload.data`. It reduces `{ table::field : value }` properties to `{ table: { field : value } }` properties.

### Transform Illustration

![Transform Node](examples/images/transform-node.png)

### Transform Flow

[![Transform Example Flow](https://img.shields.io/badge/Flow-Transform%20Node-red.svg)](examples/flows/transform-example.json)

## Container Data Node

The container node retrieves container data from `msg.payload.data`. The container node requires a `container` property, a `filename` property, and a `destination` property. Each property should be a `dot notation` path to the required data, such as `fieldData.container` and `fieldData.fileName`. If the configured path does not exist it will be automatically created.

### Container Data Illustration

![Containers Node](examples/images/container-data-node.png)

### Container Data Flow

[![Containers Example Flow](https://img.shields.io/badge/Flow-Container%20Data%20Node-red.svg)](examples/flows/container-data-example.json)

## Tests

```sh
npm install
npm test
```

```default
> node-red-contrib-filemaker@0.9.9 test /node-red-contrib-filemaker
> nyc _mocha --recursive  "test/**/*_spec.js" --timeout=30000 --exit



  Client Node
    ✓ should be loaded

  Container Data Node
    ✓ should be loaded
    ✓ should download an object of Container Data to a buffer (2821ms)
    ✓ should download an object Container Data to the filesystem (1498ms)
    ✓ should download Container Data to the filesystem (1517ms)
    ✓ should throw an error with a message and a code (266ms)

  Create Record Node
    ✓ should be loaded
    ✓ should create a record (186ms)
    ✓ should create allow the filemaker response to be merged to the message object (182ms)
    ✓ should use flow context to create a record. (179ms)
    ✓ should use global context to create a record. (171ms)
    ✓ should throw an error with a message and a code (170ms)

  Delete Record Node
    ✓ should be loaded
    ✓ should delete a record (250ms)
    ✓ should throw an error with a message and a code (171ms)

  Edit Record Node
    ✓ should be loaded
    ✓ should edit a record (255ms)
    ✓ should support merging data when editing a record (258ms)
    ✓ should throw an error with a message and a code (174ms)

  FieldData Utility Node
    ✓ should be loaded
    ✓ should transform an array of objects (251ms)
    ✓ should transform a a single object (259ms)
    ✓ should reject with an error message and code

  Find Records Node
    ✓ should be loaded
    ✓ should perform a find (265ms)
    ✓ should throw an error with a message and a code (213ms)

  Get Record Node
    ✓ should be loaded
    ✓ should get a specific record (248ms)
    ✓ should throw an error with a message and a code (212ms)

  Set Globals Node
    ✓ should be loaded
    ✓ should set globals (172ms)
    ✓ should throw an error with a message and a code (169ms)

  List Records Node
    ✓ should be loaded
    ✓ should List records (270ms)
    ✓ should throw an error with a message and a code (173ms)

  Login Node
    ✓ should be loaded
    ✓ should login to a Data API session (96ms)
    ✓ should throw an error with a message and a code (1543ms)

  Logout Node
    ✓ should be loaded
    ✓ should close a Data API Session (190ms)
    ✓ should throw an error with a message and a code

  Record Id Utility Node
    ✓ should be loaded
    ✓ should extract record ids from a single object (261ms)
    ✓ should extract record ids from an array of objects (260ms)
    ✓ should reject with an error message and a code

  Trigger Script Node
    ✓ should be loaded
    ✓ should trigger a script (179ms)
    ✓ should parse a script result if it is valid json (174ms)
    ✓ should not parse a script result if it is not valid json (180ms)
    ✓ should throw an error with a message and a code (170ms)

  Utility Services
    merge utility
      ✓ should merge data to the payload object
    sanitize utility
      ✓ should discard unspecified properties
    compact utility
      ✓ should accept an array of objects
      ✓ should remove null properties
      ✓ should remove null properties
      ✓ should remove empty strings
      ✓ should not remove false values
      ✓ should discard non json values
      ✓ should discard non json values
    isJson Utility
      ✓ it should return true for an object
      ✓ it should return true for an empty object
      ✓ it should return true for a stringified object
      ✓ it should return false for a number
      ✓ it should return false for undefined
      ✓ it should return false for a string
      ✓ it should return false for null
    castBoolean Utility
      ✓ it should cast a true string as true boolean
      ✓ it should cast a false string as false boolean
      ✓ it should cast multiple string values as booleans
      ✓ it should only cast strings of true or false

  Transform Utility Node
    ✓ should be loaded
    ✓ should transform an array of objects (296ms)
    ✓ should transform a single object (271ms)
    ✓ should throw an error with a message and a code

  Upload File Node
    ✓ should be loaded
    ✓ should upload to an existing record (332ms)
    ✓ should upload to a file to a new record (344ms)
    ✓ should throw an error with a message and a code


  78 passing (15s)

-----------------------|----------|----------|----------|----------|-------------------|
File                   |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------------|----------|----------|----------|----------|-------------------|
All files              |      100 |      100 |      100 |      100 |                   |
 client                |      100 |      100 |      100 |      100 |                   |
  client.js            |      100 |      100 |      100 |      100 |                   |
 nodes                 |      100 |      100 |      100 |      100 |                   |
  containerData.js     |      100 |      100 |      100 |      100 |                   |
  create.js            |      100 |      100 |      100 |      100 |                   |
  delete.js            |      100 |      100 |      100 |      100 |                   |
  edit.js              |      100 |      100 |      100 |      100 |                   |
  fieldData.js         |      100 |      100 |      100 |      100 |                   |
  find.js              |      100 |      100 |      100 |      100 |                   |
  get.js               |      100 |      100 |      100 |      100 |                   |
  globals.js           |      100 |      100 |      100 |      100 |                   |
  list.js              |      100 |      100 |      100 |      100 |                   |
  login.js             |      100 |      100 |      100 |      100 |                   |
  logout.js            |      100 |      100 |      100 |      100 |                   |
  recordId.js          |      100 |      100 |      100 |      100 |                   |
  script.js            |      100 |      100 |      100 |      100 |                   |
  transform.js         |      100 |      100 |      100 |      100 |                   |
  upload.js            |      100 |      100 |      100 |      100 |                   |
 services              |      100 |      100 |      100 |      100 |                   |
  index.js             |      100 |      100 |      100 |      100 |                   |
  utilities.service.js |      100 |      100 |      100 |      100 |                   |
-----------------------|----------|----------|----------|----------|-------------------|
```

## License

MIT © Lui de la Parra

## Dependencies

- [fms-api-client](https://github.com/Luidog/fms-api-client): A FileMaker Data API client designed to allow easier interaction with a FileMaker application from a web environment.
- [fs-extra](https://github.com/jprichardson/node-fs-extra): fs-extra contains methods that aren't included in the vanilla Node.js fs package. Such as mkdir -p, cp -r, and rm -rf.
- [lodash](https://github.com/lodash/lodash): Lodash modular utilities.
- [marpat](https://github.com/luidog/marpat): A class-based ES6 ODM for Mongo-like databases.

## Development Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [coveralls](https://github.com/nickmerwin/node-coveralls): takes json-cov output into stdin and POSTs to coveralls.io
- [dotenv](https://github.com/motdotla/dotenv): Loads environment variables from .env file
- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-google](https://github.com/google/eslint-config-google): ESLint shareable config for the Google style
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Turns off all rules that are unnecessary or might conflict with Prettier.
- [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html): A ESLint plugin to lint and fix inline scripts contained in HTML files.
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier): Runs prettier as an eslint rule
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [mocha-lcov-reporter](https://github.com/StevenLooman/mocha-lcov-reporter): LCOV reporter for Mocha
- [mos](https://github.com/mosjs/mos): A pluggable module that injects content into your markdown files via hidden JavaScript snippets
- [mos-plugin-dependencies](https://github.com/mosjs/mos/tree/master/packages/mos-plugin-dependencies): A mos plugin that creates dependencies sections
- [mos-plugin-execute](https://github.com/team-767/mos-plugin-execute): Mos plugin to inline a process output
- [mos-plugin-installation](https://github.com/mosjs/mos/tree/master/packages/mos-plugin-installation): A mos plugin for creating installation section
- [mos-plugin-license](https://github.com/mosjs/mos-plugin-license): A mos plugin for generating a license section
- [node-red](https://github.com/node-red/node-red): A visual tool for wiring the Internet of Things
- [node-red-node-test-helper](https://github.com/node-red/node-red-node-test-helper): A test framework for Node-RED nodes
- [nyc](https://github.com/istanbuljs/nyc): the Istanbul command line interface
- [pm2](https://github.com/Unitech/pm2): Production process manager for Node.JS applications with a built-in load balancer.
- [prettier](https://github.com/prettier/prettier): Prettier is an opinionated code formatter
- [varium](https://npmjs.org/package/varium): A strict parser and validator of environment config variables

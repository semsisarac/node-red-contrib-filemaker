/* global before describe beforeEach afterEach it */

const path = require("path");
const helper = require("node-red-node-test-helper");
const { expect } = require("chai");
const environment = require("dotenv");
const varium = require("varium");

const createNode = require("../src/nodes/create.js");
const clientNode = require("../src/client/client.js");
const changeNode = require("./core/15-change.js");
const catchNode = require("./core/25-catch.js");

helper.init(require.resolve("node-red"));

const manifestPath = path.join(__dirname, "./env.manifest");

describe("Create Record Node", function() {
  before(function(done) {
    environment.config({ path: "./test/.env" });
    varium({ manifestPath });
    done();
  });

  beforeEach(function(done) {
    helper.startServer(done);
  });

  afterEach(function(done) {
    helper.unload();
    helper.stopServer(() =>
      setTimeout(() => {
        delete global.MARPAT;
        done();
      }, "500")
    );
  });

  it("should be loaded", function(done) {
    const testFlow = [{ id: "n1", type: "inject" }];
    helper.load(clientNode, testFlow, function() {
      done();
    });
  });
  it("should create a record", function(done) {
    const testFlows = [
      {
        id: "ec096890.cdd65",
        type: "tab",
        label: "Create Record",
        disabled: false,
        info: ""
      },
      {
        id: "369e311d.23d2de",
        type: "helper"
      },
      {
        id: "d3becaad.b78ce",
        type: "catch",
        z: "ec096890.cdd65",
        name: "",
        scope: null,
        x: 360,
        y: 100,
        wires: [["369e311d.23d2de"]]
      },
      {
        id: "db596a45.2ca398",
        type: "dapi-create-record",
        z: "ec096890.cdd65",
        client: "e5173483.adc92",
        layout: "payload.layout",
        layoutType: "msg",
        data: "",
        dataType: "none",
        scripts: "",
        scriptsType: "none",
        merge: "false",
        mergeType: "bool",
        output: "payload",
        x: 340,
        y: 40,
        wires: [["369e311d.23d2de"]]
      },
      {
        id: "e5173483.adc92",
        type: "dapi-client",
        z: "",
        name: "Node-RED Test Client",
        usage: true
      }
    ];
    helper.load(
      [clientNode, createNode, catchNode],
      testFlows,
      {
        "e5173483.adc92": {
          server: process.env.FILEMAKER_SERVER,
          database: process.env.FILEMAKER_DATABASE,
          username: process.env.FILEMAKER_USERNAME,
          password: process.env.FILEMAKER_PASSWORD
        }
      },
      function() {
        const createNode = helper.getNode("db596a45.2ca398");
        const helperNode = helper.getNode("369e311d.23d2de");
        helperNode.on("input", function(msg) {
          try {
            expect(msg)
              .to.be.an("object")
              .with.any.keys("payload")
              .and.property("payload")
              .to.be.a("object")
              .with.any.keys("recordId", "modId");
            done();
          } catch (err) {
            done(err);
          }
        });
        createNode.receive({ payload: { layout: "people" } });
      }
    );
  });
  it("should allow the filemaker response to be merged to the message object", function(done) {
    const testFlows = [
      {
        id: "ec096890.cdd65",
        type: "tab",
        label: "Create Record",
        disabled: false,
        info: ""
      },
      {
        id: "369e311d.23d2de",
        type: "helper"
      },
      {
        id: "d3becaad.b78ce",
        type: "catch",
        z: "ec096890.cdd65",
        name: "",
        scope: null,
        x: 360,
        y: 100,
        wires: [["369e311d.23d2de"]]
      },
      {
        id: "db596a45.2ca398",
        type: "dapi-create-record",
        z: "ec096890.cdd65",
        client: "e5173483.adc92",
        layout: "payload.layout",
        layoutType: "msg",
        data: "",
        dataType: "none",
        scripts: "",
        scriptsType: "none",
        merge: "true",
        mergeType: "bool",
        output: "payload",
        x: 340,
        y: 40,
        wires: [["369e311d.23d2de"]]
      },
      {
        id: "e5173483.adc92",
        type: "dapi-client",
        z: "",
        name: "Node-RED Test Client",
        usage: true
      }
    ];
    helper.load(
      [clientNode, createNode, catchNode],
      testFlows,
      {
        "e5173483.adc92": {
          server: process.env.FILEMAKER_SERVER,
          database: process.env.FILEMAKER_DATABASE,
          username: process.env.FILEMAKER_USERNAME,
          password: process.env.FILEMAKER_PASSWORD
        }
      },
      function() {
        const createNode = helper.getNode("db596a45.2ca398");
        const helperNode = helper.getNode("369e311d.23d2de");
        helperNode.on("input", function(msg) {
          try {
            expect(msg)
              .to.be.an("object")
              .with.any.keys("payload")
              .and.property("payload")
              .to.be.a("object")
              .with.any.keys("recordId", "modId", "name");
            done();
          } catch (err) {
            done(err);
          }
        });
        createNode.receive({ payload: { layout: "people" } });
      }
    );
  });
  it("should use flow context to create a record.", function(done) {
    const testFlows = [
      {
        id: "ec096890.cdd65",
        type: "tab",
        label: "Create Record",
        disabled: false,
        info: ""
      },
      {
        id: "369e311d.23d2de",
        type: "helper"
      },
      {
        id: "d3becaad.b78ce",
        type: "catch",
        z: "ec096890.cdd65",
        name: "",
        scope: null,
        x: 480,
        y: 100,
        wires: [["369e311d.23d2de"]]
      },
      {
        id: "db596a45.2ca398",
        type: "dapi-create-record",
        z: "ec096890.cdd65",
        client: "e5173483.adc92",
        layout: "layout",
        layoutType: "flow",
        data: "",
        dataType: "none",
        scripts: "",
        scriptsType: "none",
        merge: "false",
        mergeType: "bool",
        output: "payload",
        x: 460,
        y: 40,
        wires: [["369e311d.23d2de"]]
      },
      {
        id: "e6d51d9e.36f868",
        type: "change",
        z: "ec096890.cdd65",
        name: "",
        rules: [
          {
            t: "set",
            p: "layout",
            pt: "flow",
            to: "people",
            tot: "str"
          }
        ],
        action: "",
        property: "",
        from: "",
        to: "",
        reg: false,
        x: 260,
        y: 40,
        wires: [["db596a45.2ca398"]]
      },
      {
        id: "e5173483.adc92",
        type: "dapi-client",
        z: "",
        name: "Node-RED Test Client",
        usage: true
      }
    ];
    helper.load(
      [clientNode, createNode, changeNode, catchNode],
      testFlows,
      {
        "e5173483.adc92": {
          server: process.env.FILEMAKER_SERVER,
          database: process.env.FILEMAKER_DATABASE,
          username: process.env.FILEMAKER_USERNAME,
          password: process.env.FILEMAKER_PASSWORD
        }
      },
      function() {
        const changeNode = helper.getNode("e6d51d9e.36f868");
        const helperNode = helper.getNode("369e311d.23d2de");
        helperNode.on("input", function(msg) {
          try {
            expect(msg)
              .to.be.an("object")
              .with.any.keys("payload")
              .and.property("payload")
              .to.be.a("object")
              .with.any.keys("recordId", "modId");
            done();
          } catch (err) {
            done(err);
          }
        });
        changeNode.receive({ payload: {} });
      }
    );
  });
  it("should use global context to create a record.", function(done) {
    const testFlows = [
      {
        id: "ec096890.cdd65",
        type: "tab",
        label: "Create Record",
        disabled: false,
        info: ""
      },
      {
        id: "369e311d.23d2de",
        type: "helper"
      },
      {
        id: "d3becaad.b78ce",
        type: "catch",
        z: "ec096890.cdd65",
        name: "",
        scope: null,
        x: 480,
        y: 100,
        wires: [["369e311d.23d2de"]]
      },
      {
        id: "db596a45.2ca398",
        type: "dapi-create-record",
        z: "ec096890.cdd65",
        client: "e5173483.adc92",
        layout: "layout",
        layoutType: "global",
        data: "",
        dataType: "none",
        scripts: "",
        scriptsType: "none",
        merge: "false",
        mergeType: "bool",
        output: "payload",
        x: 460,
        y: 40,
        wires: [["369e311d.23d2de"]]
      },
      {
        id: "e6d51d9e.36f868",
        type: "change",
        z: "ec096890.cdd65",
        name: "",
        rules: [
          {
            t: "set",
            p: "layout",
            pt: "global",
            to: "people",
            tot: "str"
          }
        ],
        action: "",
        property: "",
        from: "",
        to: "",
        reg: false,
        x: 260,
        y: 40,
        wires: [["db596a45.2ca398"]]
      },
      {
        id: "e5173483.adc92",
        type: "dapi-client",
        z: "",
        name: "Node-RED Test Client",
        usage: true
      }
    ];
    helper.load(
      [clientNode, createNode, changeNode, catchNode],
      testFlows,
      {
        "e5173483.adc92": {
          server: process.env.FILEMAKER_SERVER,
          database: process.env.FILEMAKER_DATABASE,
          username: process.env.FILEMAKER_USERNAME,
          password: process.env.FILEMAKER_PASSWORD
        }
      },
      function() {
        const changeNode = helper.getNode("e6d51d9e.36f868");
        const helperNode = helper.getNode("369e311d.23d2de");
        helperNode.on("input", function(msg) {
          try {
            expect(msg)
              .to.be.an("object")
              .with.any.keys("payload")
              .and.property("payload")
              .to.be.a("object")
              .with.any.keys("recordId", "modId");
            done();
          } catch (err) {
            done(err);
          }
        });
        changeNode.receive({ payload: {} });
      }
    );
  });
  it("should throw an error with a message and a code", function(done) {
    const testFlow = [
      {
        id: "ec096890.cdd65",
        type: "tab",
        label: "Create Record",
        disabled: false,
        info: ""
      },
      {
        id: "369e311d.23d2de",
        type: "helper"
      },
      {
        id: "d3becaad.b78ce",
        type: "catch",
        z: "ec096890.cdd65",
        name: "",
        scope: null,
        x: 360,
        y: 100,
        wires: [["369e311d.23d2de"]]
      },
      {
        id: "db596a45.2ca398",
        type: "dapi-create-record",
        z: "ec096890.cdd65",
        client: "e5173483.adc92",
        layout: "payload.layout",
        layoutType: "msg",
        data: "",
        dataType: "none",
        scripts: "",
        scriptsType: "none",
        merge: "false",
        mergeType: "bool",
        output: "payload",
        x: 340,
        y: 40,
        wires: [["369e311d.23d2de"]]
      },
      {
        id: "e5173483.adc92",
        type: "dapi-client",
        z: "",
        name: "Node-RED Test Client",
        usage: true
      }
    ];
    helper.load(
      [clientNode, createNode, catchNode],
      testFlow,
      {
        "e5173483.adc92": {
          server: process.env.FILEMAKER_SERVER,
          database: process.env.FILEMAKER_DATABASE,
          username: process.env.FILEMAKER_USERNAME,
          password: process.env.FILEMAKER_PASSWORD
        }
      },
      function() {
        const createNode = helper.getNode("db596a45.2ca398");
        const helperNode = helper.getNode("369e311d.23d2de");
        helperNode.on("input", function(msg) {
          try {
            expect(msg)
              .to.be.an("object")
              .with.any.keys("_msgid", "code", "error", "message");
            done();
          } catch (err) {
            done(err);
          }
        });
        createNode.receive({ payload: { data: { parent: "Han Solo" } } });
      }
    );
  });
});

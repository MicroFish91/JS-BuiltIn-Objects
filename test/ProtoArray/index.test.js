const protoConstructorTest = require("./constructor.test.js");
const protoConcatTest = require("./concat.test.js");
const protoEveryTest = require("./every.test.js");
const protoFillTest = require("./fill.test.js");
const protoFilterTest = require("./filter.test.js");
const protoFindTest = require("./find.test.js");
const protoFindIndexTest = require("./findIndex.test.js");
const protoFlatTest = require("./flat.test.js");
const protoForEachTest = require("./forEach.test.js");
const protoIncludesTest = require("./includes.test.js");
const protoIndexOfTest = require("./indexOf.test.js");
const protoIsProtoArrayTest = require("./isProtoArray.test");
const protoJoinTest = require("./join.test");
const protoLastIndexOfTest = require("./lastIndexOf.test");
const protoMapTest = require("./map.test");
const protoPushTest = require("./push.test");
const protoPopTest = require("./pop.test");
const protoReduceTest = require("./reduce.test");
const protoReverseTest = require("./reverse.test");
const protoShiftTest = require("./shift.test");

describe("ProtoArray", function () {
  protoConstructorTest();
  protoConcatTest();
  protoEveryTest();
  protoFillTest();
  protoFilterTest();
  protoFindTest();
  protoFindIndexTest();
  protoFlatTest();
  protoForEachTest();
  protoIncludesTest();
  protoIndexOfTest();
  protoIsProtoArrayTest();
  protoJoinTest();
  protoLastIndexOfTest();
  protoMapTest();
  protoPushTest();
  protoPopTest();
  protoReduceTest();
  protoReverseTest();
  protoShiftTest();
});

const attributesTest = () => {
  const factories = require("./");

  factories.define("foo", () => ({ key: "a" }));
  factories.define("bar", () => ({ key: "b" }));

  const result = factories.build("foo", {
    key: "c",
    otherKey: "d",
    bar: factories.build("bar")
  });

  if (result.key !== "c") {
    console.error("test failed");
    process.exit(1);
  }

  if (result.otherKey !== "d") {
    console.error("test failed");
    process.exit(1);
  }

  if (result.bar.key !== "b") {
    console.error("test failed");
    process.exit(1);
  }
};

const utilsTest = () => {
  const factories = require("./");

  factories.define("foo", ({ counter, uuid }) => ({
    id: counter(),
    uuid: uuid()
  }));

  const results = [factories.build("foo"), factories.build("foo")];

  if (results[0].id !== 1) {
    console.error("test failed");
    process.exit(1);
  }

  if (results[1].id !== 2) {
    console.error("test failed");
    process.exit(1);
  }

  if (results[0].uuid.length !== 36) {
    console.error("test failed");
    process.exit(1);
  }
};

attributesTest();
utilsTest();

console.log("test passed");
process.exit(0);

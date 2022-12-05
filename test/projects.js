var Projects = artifacts.require("./Projects.sol");

contract("Projects", function(accounts) {
  var projectsInstance;

  it("Three projects initialized", function() {
    return Projects.deployed().then(function(instance) {
      return instance.projectsCount();
    }).then(function(count) {
      assert.equal(count, 3);
    });
  });
})
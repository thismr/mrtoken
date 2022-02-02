const MrToken = artifacts.require("./MrToken.sol");

module.exports = function (deployer) {
  const _name = "MrToken";
  const _symbol = "MRT";
  deployer.deploy(MrToken, _name, _symbol);
};

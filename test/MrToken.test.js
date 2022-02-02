const BigNumber = web3.BigNumber;
const MrToken = artifacts.require("MrToken");
require("chai").use(require("chai-bignumber")(BigNumber)).should();
contract("MrToken", (accounts) => {
  const _name = "MrToken";
  const _symbol = "MRT";
  const _decimals = 18;

  beforeEach(async function () {
    this.token = await MrToken.new(_name, _symbol);
  });

  describe("token attributes", function () {
    it("has the correct names", async function () {
      const name = await this.token.name();
      name.should.equal(_name);
    });
    it("has the correct symbol", async function () {
      const symbol = await this.token.symbol();
      symbol.should.equal(_symbol);
    });
    // it("has the correct decimals", async function () {
    //   const decimals = await this.token.decimals();
    //   decimals.should.equal(_decimals);
    // });
  });
});

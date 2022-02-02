pragma solidity 0.8.11;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract MrToken is ERC20 {
    constructor(string memory _name, string memory _symbol)
        public
        ERC20(_name, _symbol)
    {}
}

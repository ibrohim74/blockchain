const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LockModule", (m) => {
    const initialSupply = m.getParameter("initialSupply", 1000000);
    const myToken = m.contract("BoContractERC20", [initialSupply]);  // <-- Correct contract name
    return { myToken };
});

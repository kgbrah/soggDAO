import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // This is our governance contract.
    const vote = await sdk.getContract("0x330EEe30D6Fe67C49D23F248b2F6caC08B2560f4", "vote");
    // This is our ERC-20 contract.
    const token = await sdk.getContract("0xB1496B1CC76b2a39Adf8FEd61D242909a9fEFf8B", "token");
    // Give our treasury the power to mint additional token if needed.
    await token.roles.grant("minter", vote.getAddress());

    console.log(
      "Successfully gave vote contract permissions to act on token contract"
    );
  } catch (error) {
    console.error(
      "failed to grant vote contract permissions on token contract",
      error
    );
    process.exit(1);
  }
  
  try {
    // This is our governance contract.
    const vote = await sdk.getContract("0x330EEe30D6Fe67C49D23F248b2F6caC08B2560f4", "vote");
    // This is our ERC-20 contract.
    const token = await sdk.getContract("0xB1496B1CC76b2a39Adf8FEd61D242909a9fEFf8B", "token");
    // Grab our wallet's token balance, remember -- we hold basically the entire supply right now!
    const ownedTokenBalance = await token.balanceOf(
      process.env.WALLET_ADDRESS
    );

    // Grab 75% of the supply that we hold.
    const ownedAmount = ownedTokenBalance.displayValue;
    const percent75 = Number(ownedAmount) / 100 * 75;

    // Transfer 75% of the supply to our voting contract.
    await token.transfer(
      vote.getAddress(),
      percent75
    ); 

    console.log("✅ Successfully transferred " + percent75 + " tokens to vote contract");
  } catch (err) {
    console.error("failed to transfer tokens to vote contract", err);
  }
})(); 
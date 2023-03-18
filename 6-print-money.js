import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // This is the address of our ERC-20 contract printed out in the step before.
    const token = await sdk.getContract("0xB1496B1CC76b2a39Adf8FEd61D242909a9fEFf8B", "token");
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 7_777_777;
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log("✅ der es nw", totalSupply.displayValue, "$LEON en serculeshun");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
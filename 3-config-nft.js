import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x0D556C8AB1b86425ED903983F77c4A29dd2a4b4d", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "fren ub kgbrah",
        description: "dis nfb meens mi en leon leik u en u r mi fren!",
        image: readFileSync("scripts/assets/kgbrah.jpg"),
      },
    ]);
    console.log("✅ u med en nfb fren!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
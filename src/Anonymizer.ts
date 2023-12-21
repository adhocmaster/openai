import { OrderScraper } from "./OrderScraper";
import { PromptUtils } from "./PromptUtils";
import { DataUtils } from "./utils/DataUtils";
import { PrivacyUtils } from "./utils/PrivacyUtils";

const promptUtils = new PromptUtils(true);
const dataUtils = new DataUtils();
const orderScraper = new OrderScraper(promptUtils, dataUtils);
const privacyUtils = new PrivacyUtils(promptUtils, dataUtils, orderScraper);

(async function() {

    // Step 1, get user info from chat gpt

    // Step 2, remove user info from htmml

    // Step 3, mine data

    // const filePath = 'data/html/amazon_2023_raw_whole.txt';
    // const htmlData = (await dataUtils.read(filePath))._unsafeUnwrap();

    // const res = await orderScraper.getUserInfo(htmlData);
    // if (res.isOk()) {
    //     console.log(res._unsafeUnwrap())
        
    //     const userInfo = res._unsafeUnwrap();
    //     const otherMasks = userInfo.addresses.reduce((acc, address) => {
    //         const parts = address.split(",").map((part) => part.trim());
    //         acc.push(...parts);
    //         return acc;
    //     }, [])

    //     const anonumRes = await dataUtils.anonymizeFile(filePath, userInfo.names, otherMasks);
    //     if (anonumRes.isOk()) {
    //         console.log("Successfyully anonymized file")
    //     } else {
    //         console.log(anonumRes._unsafeUnwrapErr())
    //     }

    // } else {
    //     console.log(res._unsafeUnwrapErr())
    // }
    // await utils.anonymizeData("./data/text");

    const res = await privacyUtils.anonymizeHtmlDataUsingScraper("./data/html");
    console.log(res);
})();
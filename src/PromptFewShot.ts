
import { PromptUtils } from "./PromptUtils";
import { DataUtils } from "./utils/DataUtils";


const promptUtils = new PromptUtils();
const dataUtils = new DataUtils();

(async function() {
    // const dataRes = await dataUtils.read('data/text/amazon_2023_raw_whole.txt')
    const txtData = (await dataUtils.read('data/text/amazon_2023_raw_whole.txt'))._unsafeUnwrap()
    console.log(txtData)
    
    const nTokens = (await promptUtils.getNumberOfTokensForChat(txtData))._unsafeUnwrap()
    console.log("Number of tokens", nTokens)

    const prompt = `You are an expert in understanding e-commerce. Can you get the product names from the following text? I also need the product brand, price, classification, keywords, and date purchased.
    Respond with the names, brand, price, classification, keywords, and date only. Please, use JSON structure for output. :\n\n${txtData}`
    const messages =  [{"role": "system", "content": "You are an helpful assistant."}, {"role": "user", "content": prompt}]

    let res = await promptUtils.chat(messages)
    if (res.isOk()) {
        console.log(res._unsafeUnwrap())
    } else {
        console.log(res._unsafeUnwrapErr())
    }
    
})();
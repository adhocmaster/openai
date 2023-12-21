import { PromptUtils } from "./PromptUtils";
import { DataUtils } from "./utils/DataUtils";

const promptUtils = new PromptUtils(true);
const dataUtils = new DataUtils();

(async function() {
    // const txtData = (await dataUtils.read('data/text/amazon_2023_raw_whole.txt_anonymized'))._unsafeUnwrap()
    // const txtData = (await dataUtils.read('data/text/amazon_empty_full'))._unsafeUnwrap()
    // const txtData = (await dataUtils.read('data/text/bodyamazon_blank.txt_anonymized'))._unsafeUnwrap()
    const txtData = (await dataUtils.read('data/text/input_producing_halucination.txt'))._unsafeUnwrap()
    console.log(txtData)
    
    const nTokens = (await promptUtils.getNumberOfTokensForChat(txtData))._unsafeUnwrap()
    console.log("Number of tokens", nTokens)

    // const prompt = `You are an expert in understanding e-commerce. Can you get the product names from the following text? I also need the product brand, price, classification, keywords, and date purchased.
    // Respond with the name, brand, price, classification, keywords, and date only. Please, use JSON structure for output. :\n\n${txtData}` - This is unreliable
    const prompt = `You are an expert in understanding e-commerce. I need to extract purchase information. I need all the output for each purchase in this format:
    \n\nJSON format: \n
        {
            name: string,
            brand: string,
            price: number,
            classification: string,
            keywords: string[],
            date: string
        }
        I need the purchase history from the following content. You need to follow theses rules:
        A purchase history must have a product name, price, and date of purchase. It can also have brand, classification, keywords which are optional. 
        Classification denotes the category of the product and keywords describe the products using a few key words. 
        The purchase date and price cannot be null. 
        Do not include a purchase information in the output if the purchase date or price is missing. 
        Do not push yourself hard and do not generate imaginary purchases.
        Give response in a JSON array in the preceding format. :\n\n${txtData}`
    // I need the purchase history from the following content. A purchase history must have a product name, price, and date of purchase. Can you get the product names from the following text? I also need the product brand, price, classification, keywords, and date purchased. 
    // Give response in a JSON array in the preceding format. :\n\n${txtData}`
    const messages =  [{"role": "system", "content": "You are an helpful assistant."}, {"role": "user", "content": prompt}]
    
    let res = await promptUtils.chat(messages)
    if (res.isOk()) {
        console.log(res._unsafeUnwrap())
    } else {
        console.log(res._unsafeUnwrapErr())
    }

})();
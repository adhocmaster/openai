import {convert} from 'html-to-text';
import { PromptUtils } from "./PromptUtils";
import { open } from 'node:fs/promises';
import { DataUtils } from './utils/DataUtils';

const promptUtils = new PromptUtils();
const dataUtils = new DataUtils();

(async function() {
    const txtData = (await dataUtils.read('data/text/amazon_2023_raw_whole.txt_anonymized'))._unsafeUnwrap()
    console.log(txtData)
    
    const nTokens = (await promptUtils.getNumberOfTokensForChat(txtData))._unsafeUnwrap()
    console.log("Number of tokens", nTokens)

    const prompt = `You are an expert in understanding e-commerce. Can you get the product names from the following text?
    Respond with the names only. :\n\n${txtData}`
    const messages =  [{"role": "system", "content": "You are an helpful assistant."}, {"role": "user", "content": prompt}]

    let res = await promptUtils.chat(messages)
    if (res.isOk()) {
        console.log(res._unsafeUnwrap())
    } else {
        console.log(res._unsafeUnwrapErr())
    }

})();
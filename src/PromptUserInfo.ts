import {convert} from 'html-to-text';
import { PromptUtils } from "./PromptUtils";
import { open } from 'node:fs/promises';
import { DataUtils } from './utils/DataUtils';


const promptUtils = new PromptUtils();
const dataUtils = new DataUtils();

(async function() {
    const txtData = (await dataUtils.read('data/text/amazon_2023_raw_whole_anonymized.txt'))._unsafeUnwrap()
    console.log(txtData)
    
    const nTokens = (await promptUtils.getNumberOfTokensForChat(txtData))._unsafeUnwrap()
    console.log("Number of tokens", nTokens)

    const prompt = `You are an expert in understanding e-commerce. I need all the output in this format:
    \n\nJSON format: \n
        {
            names: string[],
            addresses: string[]
        }
    Can you get the unique names of people, and unique addresses that apprear in the text? Give response in a JSON array in the preceding format:
    \n\n${txtData}`;
    const messages =  [{"role": "system", "content": "You are an helpful assistant."}, {"role": "user", "content": prompt}]

    let res = await promptUtils.chat(messages)
    if (res.isOk()) {
        console.log(res._unsafeUnwrap())
    } else {
        console.log(res._unsafeUnwrapErr())
    }

})();
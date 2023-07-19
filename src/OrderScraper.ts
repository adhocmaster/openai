import { ResultAsync, okAsync } from "neverthrow";
import { PromptUtils } from "./PromptUtils"
import { DataUtils } from "./utils/DataUtils";

export interface ProductInfo {}
export interface OrderInfo {}
export interface UserInfo {
    names: string[],
    addresses: string[]
}
export class OrderScraper {

    constructor(readonly promptUtils: PromptUtils, readonly dataUtils: DataUtils) {}

    public getUserInfoFromHtml(html: string): ResultAsync<UserInfo, Error> {

        return this.dataUtils.convertHtmlToText(html).andThen((text) => { 

            return this.getUserInfo(text);
        });
    }

    public getUserInfo(text: string): ResultAsync<UserInfo, Error> {

        const prompt = `You are an expert in understanding e-commerce. I need all the output in this format:
        \n\nJSON format: \n
            {
                names: string[],
                addresses: string[]
            }
        Can you get the unique names of people, and unique addresses that apprear in the text? Give response in a JSON array in the preceding format:
        \n\n${text}`;

        const messages =  [{"role": "system", "content": "You are an helpful assistant."}, {"role": "user", "content": prompt}]
        
        return this.promptUtils.chat(messages).map((res) => {
            return <UserInfo>JSON.parse(res)
        })
    }
}
import 'dotenv/config'
import { Configuration, OpenAIApi } from "openai";
import { get_encoding, encoding_for_model, TiktokenModel, Tiktoken } from "@dqbd/tiktoken"; // Can be optimized for browsers to not to load all the encodings
import { open, readFile, writeFile } from 'node:fs/promises';
import {convert} from 'html-to-text';
import { DataUtils } from './utils/DataUtils';
import { Result, ResultAsync, okAsync } from 'neverthrow';
// https://github.com/openai/openai-cookbook

export class PromptUtils {
    private openai: OpenAIApi;
    private completionModel = "text-davinci-003";
    private chatModel: TiktokenModel = "gpt-3.5-turbo";
    private temperature: number;
    private log = true;
    private chatEncoder: Tiktoken;
    private dataUtils = new DataUtils();

    public constructor(log: boolean = false) {
        this.log = log;

        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
          });
        this.openai = new OpenAIApi(configuration);
        this.temperature = 0.1;
        this.chatEncoder= encoding_for_model(this.chatModel);
    }

    private writeResponse(response:string, ext=".txt"): ResultAsync<void, Error> {
        return this.dataUtils.write(`./data/responses/${Date.now()}${ext}`, response)
    }

    private extractJsonReponse(openApiContent: string): string {
        const arrs = openApiContent.split("```")
        const escapedJson = arrs[1].slice(4)
        console.log(escapedJson)
        return JSON.parse(escapedJson);

    }

    public chatTokenLimit(): number {
        return 8000
    }

    public getNumberOfTokensForChat(data: string): ResultAsync<number, Error> {
        const tokens = this.chatEncoder.encode(data);
        return okAsync(tokens.length);
    }

    // public async complete(prompt: string): Promise<string> {
    //     const completion = await this.openai.createCompletion({
    //       model: this.completionModel,
    //       prompt: prompt,
    //       temperature: this.temperature,
    //     });
    //     const response = completion.data.choices[0].text
    //     if (this.log) {
    //         await this.writeResponse(response);
    //     }
    //     return response
    // }


    public chat(messages): ResultAsync<string, Error> {

        const completion = ResultAsync.fromPromise(
            this.openai.createChatCompletion({
                model: this.chatModel,
                messages: messages,
                temperature: this.temperature,
            }),
            (e) => Error((e as Error).message)
        )

        const response = completion.andThen((response) => {
            if (this.log) {
                // const jsonContent = this.extractJsonReponse(response.message.content);
                return this.writeResponse(JSON.stringify(response.data, null, 4), ".json").map((_) => response.data.choices[0].message.content);
            } else {
                return okAsync(response.data.choices[0].message.content);
            }
        })

        return response
    }


    
}
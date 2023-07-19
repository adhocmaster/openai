// import { Configuration, OpenAIApi } from "openai";
// const configuration = new Configuration({
//     apiKey: "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",
//   });
// const openai = new OpenAIApi(configuration);
import {describe, expect, test} from '@jest/globals';
import { PromptUtils } from "./PromptUtils";

const utils = new PromptUtils();
describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(1+2).toBe(3);
    });
  });
import { open, readFile, writeFile } from 'node:fs/promises';
import { Exemplar } from "./Exemplars";
import { PromptUtils } from "./PromptUtils";

export class FewShotContextBuilder {
    private exemplars: Exemplar[] = [];

    public constructor(readonly promptUtils: PromptUtils) {}

    public addExemplar(exemplar: Exemplar) {
        this.exemplars.push(exemplar);
    }

    public getTokenSize(): number {
        return 0;
    }
    private async write(shots:string, ext=".txt"): Promise<void> {
        try {
            // const fh = await open(`./responses/${Date.now()}.txt`, 'w');
            // fh.writeFile(response);
            writeFile(`./data/training/${Date.now()}${ext}`, shots)
        } catch (e) {
            console.error(e)
        }
    }

    public build(): string {
        // Get encoding for each exemplar
        // if total number of token exceeds the maximum number of tokens for the model
        // use chunks to create the context https://github.com/openai/openai-cookbook/blob/main/examples/Embedding_long_inputs.ipynb
        // else, create prompt
        return null
    }


}
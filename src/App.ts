import { Configuration, OpenAIApi } from "openai";
import * as express from 'express'

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })

    router.get('/prompt', async (req, res) => {
      const html = req.query.html;
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: this.generatePrompt(html),
        temperature: 0.6,
      });
      console.log(completion.data.choices);
      res.json({
        message: completion.data.choices[0].text
      })
    })

    this.express.use('/', router)
  }

  private generatePrompt (html: string): string {
    return html;
  }

  private generateTestPrompt(): string {
    return ""
  }
}

export default new App().express
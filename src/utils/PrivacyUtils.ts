import { ResultAsync } from "neverthrow";
import path = require("path");
import { OrderScraper } from "../OrderScraper";
import { PromptUtils } from "../PromptUtils";
import { DataUtils } from "./DataUtils";

export class PrivacyUtils {
    public constructor(
        readonly promptUtils: PromptUtils, 
        readonly dataUtils: DataUtils, 
        readonly orderScraper: OrderScraper
    ) {}
    

    public anonymizeHtmlDataUsingScraper(dir: string): ResultAsync<void, Error> {
        
        const fNameRes = this.dataUtils.getFileNames(dir);
        const convertRes = fNameRes.andThen((fNames) => {
            const convertResArr = fNames.map((fName) => {
                const fromPath = path.join(dir, fName);
                console.log(`Anonymizing ${fromPath}`)
                return this.anonymizeHtmlFileUsingScraper(fromPath);

            })

            return ResultAsync.combine(convertResArr).map((res) => undefined);
        })

        return convertRes

    }

    public anonymizeHtmlFileUsingScraper(filePath: string): ResultAsync<void, Error> {

        return this.dataUtils.read(filePath).andThen((htmlData) => {

            return this.orderScraper.getUserInfoFromHtml(htmlData).andThen((userInfo) => {
                const otherMasks = userInfo.addresses.reduce((acc, address) => {
                    const parts = address.split(",").map((part) => part.trim());
                    acc.push(...parts);
                    return acc;
                }, [])

                return this.anonymizeFile(filePath, userInfo.names, otherMasks);
            });
        })
    }

    public anonymizeData(dir: string, masks: string [], otherMasks: string []): ResultAsync<void, Error> {
        
        const fNameRes = this.dataUtils.getFileNames(dir);
        const convertRes = fNameRes.andThen((fNames) => {
            const convertResArr = fNames.map((fName) => {
                const fromPath = path.join(dir, fName)
                return this.anonymizeFile(fromPath, masks, otherMasks);

            })

            return ResultAsync.combine(convertResArr).map((res) => undefined);
        })

        return convertRes

    }

    public anonymizeFile(filePath: string, nameMasks: string[], otherMasks: string []): ResultAsync<void, Error> {

        return this.dataUtils.read(filePath).andThen((rawData) => {
            
            const dataWithoutNames = nameMasks.reduce((acc, mask) => {
                const re = new RegExp(mask, 'g');
                return acc.replace(re, "hidden name");
            }, rawData);

            const dataWithoutOther = otherMasks.reduce((acc, mask) => {
                const re = new RegExp(mask, 'g');
                return acc.replace(re, "hidden info");
            }, dataWithoutNames);
            
            return this.dataUtils.write(`${filePath}_anonymized`, dataWithoutOther);
        })
    }

}
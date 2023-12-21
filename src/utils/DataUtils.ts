import { get_encoding, encoding_for_model, TiktokenModel, Tiktoken } from "@dqbd/tiktoken"; // Can be optimized for browsers to not to load all the encodings
import { open, readFile, writeFile, readdir, stat } from 'node:fs/promises';
import {convert} from 'html-to-text';
import path = require("node:path");
import { okAsync, ResultAsync } from "neverthrow";
import { ok } from "node:assert";

export class DataUtils {

    public mineHtmlToText(srcDir: string, destDir: string): ResultAsync<void, Error> {
        const fNameRes = this.getFileNames(srcDir);
        // const f = this.getFilePaths(srcDir);
        // return fNames.map((fNames) => console.log(fNames));
        const convertRes = fNameRes.andThen((fNames) => {
            const convertResArr = fNames.map((fName) => {
                const fromPath = path.join(srcDir, fName)
                const toPath = path.join(destDir, fName)
                return this.convertHtmlToTextAndSave(fromPath, toPath);

            })

            return ResultAsync.combine(convertResArr).map((res) => undefined);
        })

        return convertRes
    }

    public convertHtmlToTextAndSave(srcPath: string, destPath: string): ResultAsync<void, Error> {
        
        return this.read(srcPath).andThen((html) => {

            return this.convertHtmlToText(html).map((text) => {
                this.write(destPath, text);
            })
        })
    }

    public convertHtmlToText(html: string): ResultAsync<string, Error> {
        
        const options = {
            baseElements: { selectors: ['.your-orders-content-container']},
            selectors: [
                { selector: 'a', options: { ignoreHref: true } },
                { selector: 'img', format: 'skip' }
            ]
        }

        return okAsync(convert(html, options));
    }

    public read(path: string): ResultAsync<string, Error> {
        
        const res = ResultAsync.fromPromise(
            readFile(path, 'utf8'),
            (e) => new Error(`cannot read file ${path}`)
        )
        
        return res
    }

    public write(path:string, data:string): ResultAsync<void, Error>  {

        return ResultAsync.fromPromise(
            writeFile(path, data),
            (e) => new Error((e as Error).message)
        )
    }

    public getFileNames(dir: string): ResultAsync<string[], Error> {
        const lister = ResultAsync.fromPromise(
            readdir(dir),
            (e) => new Error((e as Error).message)
        );

        return lister.andThen((fNames) => {

            const statRes = fNames.map((fName) => {
                
                const fullPath = path.join(dir, fName);
                const fileInfoRes = ResultAsync.fromPromise(
                    stat(fullPath),
                    (e) => new Error((e as Error).message)
                )
                return fileInfoRes.map((fileInfo) => { return fileInfo.isFile()})
            })

            return ResultAsync.combine(statRes).map((isFiles) => {
                const validFiles = isFiles.reduce((acc, isFile, idx) =>{
                    acc.push(fNames[idx]);
                    return acc;
                }, []) as string[];

                return validFiles;
            })

        })
    }

    public getFilePaths(dir: string): ResultAsync<string[], Error> {

        const lister = ResultAsync.fromPromise(
            readdir(dir),
            (e) => new Error((e as Error).message)
        );

        return lister.andThen((fNames) => {

            const statRes = fNames.map((fName) => {
                
                const fullPath = path.join(dir, fName);
                const fileInfoRes = ResultAsync.fromPromise(
                    stat(fullPath),
                    (e) => new Error((e as Error).message)
                )
                return fileInfoRes.map((fileInfo) => { return fileInfo.isFile()})
            })

            return ResultAsync.combine(statRes).map((isFiles) => {
                const validFiles = isFiles.reduce((acc, isFile, idx) =>{
                    acc.push(path.join(dir, fNames[idx]));
                    return acc;
                }, []) as string[];

                return validFiles;
            })

        })
    }


}
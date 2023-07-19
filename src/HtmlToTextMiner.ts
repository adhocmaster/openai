import { DataUtils } from "./utils/DataUtils";

const utils = new DataUtils();
(async function() {
    await utils.mineHtmlToText("./data/html", "./data/text");
})();
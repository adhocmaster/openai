const docType = document.doctype;
console.log("docType: ", docType);
const url = document.URL;
console.log("url: ", url);
const head = document.head;
console.log("head: ", head);
const body = document.body;
console.log("body: ", body);
const html = head.outerHTML + body.outerHTML;
console.log("html: ", html);
const message = {
    type: "scraper", 
    data: {
        url: url,
        html: html
    }
};


(async () => {
    const response = await chrome.runtime.sendMessage(message);
    // do something with response here, not outside the function
    console.log(response);
  })();
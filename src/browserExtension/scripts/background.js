
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
     
        if (request.type === "scraper") {
            data = request.data;
            console.log("Got HTML from scraper:")
            console.log("url", data.url);
            console.log("html", data.html);
            sendResponse({status: `Scraping data from ${data.url}`});
        } else {
            sendResponse({error: "Unknown message type"});
        }
    }
);
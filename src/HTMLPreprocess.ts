
import {convert} from 'html-to-text';

const options = {
    selectors: [
        { selector: 'a', options: { ignoreHref: true } },
        { selector: 'img', format: 'skip' }
    ]
}

const optionsHead = {
    baseElements: { selectors: ['head', 'meta']},
    // selectors: [
    //     { selector: 'a', options: { ignoreHref: true } },
    //     { selector: 'img', format: 'skip' }
    // ]
}

const optionsLinks = {
    baseElements: { selectors: ['body']},
    selectors: [
        { selector: 'img', format: 'skip' }
    ]
}


const optionsImages = {
    baseElements: { selectors: ['body']},
    selectors: [
        { selector: 'a', options: { ignoreHref: true } },
    ]
}

const amazonPagination = {
    baseElements: { selectors: ['.a-pagination']},
}



const html = `
            <!DOCTYPE html>
            <head>
                <title>This is a title</title>
                <meta charset="utf-8" />
                <script src="https://www.js.com"></script>
                <style>
                    body {
                        background-color: red;
                    }
                </style>
                
                <meta charset="UTF-8">
                <meta name="description" content="Free Web tutorials">
                <meta name="keywords" content="HTML, CSS, JavaScript">
                <meta name="author" content="John Doe">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body><h1>This is body</h1>
                <script type="text/javascript">
                    // Nav start should be logged at this place only if request is NOT progressively loaded.
                    // For progressive loading case this metric is logged as part of skeleton.
                    // Presence of skeleton signals that request is progressively loaded.
                    if(!document.getElementById("navbar-skeleton")) {
                    window.uet && uet('ns');
                    }
                    window._navbar = (function (o) {
                    o.componentLoaded = o.loading = function(){};
                    o.browsepromos = {};
                    o.issPromos = [];
                    return o;
                    }(window._navbar || {}));
                    window._navbar.declareOnLoad = function () { window.$Nav && $Nav.declare('page.load'); };
                    if (window.addEventListener) {
                    window.addEventListener("load", window._navbar.declareOnLoad, false);
                    } else if (window.attachEvent) {
                    window.attachEvent("onload", window._navbar.declareOnLoad);
                    } else if (window.$Nav) {
                    $Nav.when('page.domReady').run("OnloadFallbackSetup", function () {
                        window._navbar.declareOnLoad();
                    });
                    }
                    window.$Nav && $Nav.declare('logEvent.enabled',
                    'false');

                    window.$Nav && $Nav.declare('config.lightningDeals', {"activeItems":[],"marketplaceID":"ATVPDKIKX0DER","customerID":"A26RNF8XDFXYIC"});
                </script>
                <p>this is a paragraph</p>
                <a href="https://www.google.com">google</a>
                Product 1 <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
                Product 2 <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
                <div class="a-row a-spacing-top-base">
                
                    
                        <div class="a-fixed-left-grid item-box a-spacing-none"><div class="a-fixed-left-grid-inner" style="padding-left:100px">
                            <div class="a-fixed-left-grid-col a-col-left" style="width:100px;margin-left:-100px;float:left;">
                                <div class="product-image">
                            <a class="a-link-normal" tabindex="-1" href="/dp/B09QC9598S?psc=1&amp;ref=ppx_yo2ov_dt_b_product_details">
                                
                            <img alt="HE401 Filter Replacement for Shark Air Purifier 4 - Compatible with Shark Air Purifier 4 HE401 HE402 HE402AMZ HE405 HE400 Filter Replacement, H13 True HEPA Filter" src="https://m.media-amazon.com/images/I/41pefwMK1VL._SS142_.jpg" data-a-hires="https://m.media-amazon.com/images/I/41pefwMK1VL._SS284_.jpg">

                            </a>

                        </div>
                            </div>
                            <div class="a-fixed-left-grid-col a-col-right" style="padding-left:0%;float:left;">
                                <div class="a-row">
                                    
                                        <a class="a-link-normal" href="/dp/B09QC9598S?psc=1&amp;ref=ppx_yo2ov_dt_b_product_details">
                                            <div class="yohtmlc-product-title">
                                                HE401 Filter Replacement for Shark Air Purifier 4 - Compatible with Shark Air Purifier 4 HE401 HE402 HE402AMZ HE405 HE400 Filter Replacement, H13 True HEPA Filter
                                            </div>
                                        </a>
                                    
                                </div>
                                <div class="a-row a-size-small a-color-secondary">
                                    <span></span>
                                    
                                </div>
                                
                                    <div class="a-row">
                                        
                                            <span class="a-size-small">
                                                Return or replace items: Eligible through September 11, 2023
                                            </span>
                                        
                                    </div>
                                
                                
                                <div class="a-row a-spacing-top-mini">
                                    <div class="yohtmlc-item-level-connections">
                                        
                            <span class="a-button a-button-normal a-spacing-mini a-button-primary" id="a-autoid-55"><span class="a-button-inner"><a href="/gp/buyagain?ats=eyJjdXN0b21lcklkIjoiQTI2Uk5GOFhERlhZSUMiLCJleHBsaWNpdENhbmRpZGF0ZXMiOiJCMDlRQzk1OThTIn0%3D&amp;ref=ppx_yo2ov_dt_b_bia_item" class="a-button-text" role="button" id="a-autoid-55-announce">
                                <div class="buy-it-again-button__icon"></div>
                                <div class="reorder-modal-trigger-text">Buy it again</div>
                            </a></span></span>

                            
                                <span class="a-button a-button-normal a-spacing-mini a-button-base" id="a-autoid-56"><span class="a-button-inner"><a href="/your-orders/pop?ref=ppx_yo2ov_dt_b_pop&amp;orderId=113-7148650-3057835&amp;lineItemId=qisplpkqrpknwny&amp;shipmentId=X4dVkq4jF&amp;packageId=1&amp;asin=B09QC9598S" class="a-button-text" role="button" id="a-autoid-56-announce">
                                    View your item
                                </a></span></span>
                            
                                    </div>
                                </div>
                            </div>
                        </div></div>
                                    </div>

                <div class="a-row">

                    <div class="a-text-center pagination-full"><ul class="a-pagination"><li><a href="/gp/your-account/order-history/ref=ppx_yo_dt_b_pagination_7_6?ie=UTF8&amp;orderFilter=year-2022&amp;search=&amp;startIndex=50">←<span class="a-letter-space"></span><span class="a-letter-space"></span>Previous</a></li>
                    <li class="a-normal"><a href="/gp/your-account/order-history/ref=ppx_yo_dt_b_pagination_7_1?ie=UTF8&amp;orderFilter=year-2022&amp;search=&amp;startIndex=0">1</a></li>
                    <li class="a-normal"><a href="/gp/your-account/order-history/ref=ppx_yo_dt_b_pagination_7_2?ie=UTF8&amp;orderFilter=year-2022&amp;search=&amp;startIndex=10">2</a></li>
                    <li class="a-normal"><a href="/gp/your-account/order-history/ref=ppx_yo_dt_b_pagination_7_3?ie=UTF8&amp;orderFilter=year-2022&amp;search=&amp;startIndex=20">3</a></li>
                    <li class="a-last"><a href="/gp/your-account/order-history/ref=ppx_yo_dt_b_pagination_7_8?ie=UTF8&amp;orderFilter=year-2022&amp;search=&amp;startIndex=70">Next<span class="a-letter-space"></span><span class="a-letter-space"></span>→</a></li></ul></div>

                </div>
            </body>
            </html>
            `
const semiHtml = `THIS IS BODY

this is a paragraph

google [https://www.google.com]
[https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png]`

console.log(convert(html, amazonPagination));

            
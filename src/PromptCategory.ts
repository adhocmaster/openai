import { PromptUtils } from "./PromptUtils";
import { DataUtils } from "./utils/DataUtils";

const promptUtils = new PromptUtils(true);
const dataUtils = new DataUtils();

(async function() {
    // const txtData = (await dataUtils.read('data/text/amazon_2023_raw_whole.txt_anonymized'))._unsafeUnwrap()
    // // const txtData = (await dataUtils.read('data/text/amazon_empty_full'))._unsafeUnwrap()
    // console.log(txtData)
    const txtData = `
    [
        {
            product_id: 1,
            product_name: "Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil With Biotin & Essential Oils, Nourishing Treatment for Split Ends and Dry Scalp for All Hair Types, 2-Fluid Ounces"
        },
        {
            product_id: 2,
            product_name: "Bonnlo 3 Burner Outdoor Portable Propane Stove Gas Cooker, Heavy Duty Iron Cast Patio Burner with Detachable Stand Legs for Camp Cooking (3-Burner 225,000-BTU)"
        },
        {
            product_id: 3,
            product_name: "Genie 7155-TKV Smart Garage Door Opener StealthDrive Connect - Ultra Quiet opener, WiFi, Battery Backup - Works with Alexa & Google Home"
        },
        {
            product_id: 4,
            product_name: "VANMASS Universal Car Phone Mount,【Patent & Safety Certs】 Upgraded Handsfree Stand, Phone Holder for Car Dashboard Windshield Vent, Compatible with iPhone 14 13 12 Samsung Android & Pickup Truck"
        },
        {
            product_id: 5,
            product_name: "Bonnlo 3 Burner Outdoor Portable Propane Stove Gas Cooker, Heavy Duty Iron Cast Patio Burner with Detachable Stand Legs for Camp Cooking (3-Burner 225,000-BTU)"
        },
        {
            product_id: 6,
            product_name: "Genie 7155-TKV Smart Garage Door Opener StealthDrive Connect - Ultra Quiet opener, WiFi, Battery Backup - Works with Alexa & Google Home"
        },
        {
            product_id: 7,
            product_name: "VANMASS Universal Car Phone Mount,【Patent & Safety Certs】 Upgraded Handsfree Stand, Phone Holder for Car Dashboard Windshield Vent, Compatible with iPhone 14 13 12 Samsung Android & Pickup Truck"
        },
        {
            product_id: 9,
            product_name: "Bonnlo 3 Burner Outdoor Portable Propane Stove Gas Cooker, Heavy Duty Iron Cast Patio Burner with Detachable Stand Legs for Camp Cooking (3-Burner 225,000-BTU)"
        },
        {
            product_id: 10,
            product_name: "Genie 7155-TKV Smart Garage Door Opener StealthDrive Connect - Ultra Quiet opener, WiFi, Battery Backup - Works with Alexa & Google Home"
        },
        {
            product_id: 11,
            product_name: "VANMASS Universal Car Phone Mount,【Patent & Safety Certs】 Upgraded Handsfree Stand, Phone Holder for Car Dashboard Windshield Vent, Compatible with iPhone 14 13 12 Samsung Android & Pickup Truck"
        },

    ]  
    
    
    `;

    
    const nTokens = (await promptUtils.getNumberOfTokensForChat(txtData))._unsafeUnwrap()
    console.log("Number of tokens", nTokens)

    // const prompt = `You are an expert in understanding e-commerce. Can you get the product names from the following text? I also need the product brand, price, classification, keywords, and date purchased.
    // Respond with the name, brand, price, classification, keywords, and date only. Please, use JSON structure for output. :\n\n${txtData}` - This is unreliable
    const prompt = `You are an expert in understanding product categories and keywords. I need to extract categories and keywords of some products. Sub-category is more specific.  I need all the output in this format:
    \n\nJSON format for each product: \n
        {
            product_id: number,
            sub_category: string,
            category: string,
            keywords: string[],
        }

        \n\nGive response in a JSON array in the preceding format. The array is enclosed in third brackets.
        Classification denotes the category of the product and keywords describe the products using a few keywords. For categories choose from ['Beauty & Health', 'Outdoors', 'Home & Gardening', 'Electronics', "Automotive"] only. A product has one category and multiple keywords. Here is a list of products seperated by new lines. 
        \n\n${txtData}`
    // I need the purchase history from the following content. A purchase history must have a product name, price, and date of purchase. Can you get the product names from the following text? I also need the product brand, price, classification, keywords, and date purchased. 
    // Give response in a JSON array in the preceding format. :\n\n${txtData}`
    const messages =  [{"role": "system", "content": "You are an helpful assistant."}, {"role": "user", "content": prompt}]
    
    let res = await promptUtils.chat(messages)
    if (res.isOk()) {
        console.log(res._unsafeUnwrap())
    } else {
        console.log(res._unsafeUnwrapErr())
    }

})();
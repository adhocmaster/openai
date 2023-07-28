# In-Context Learning for Product Information via LLMs: 

In this research, given an HTML of a product/purchase history of products, we use ChatGPT, an LLM, to extract product information existing in the prompt and also generate meta information non-existing in the prompt.

## Task 1: Extract Purchase history
From an order history page, we need product name, purchase date, and price.
1. Prompt structures yielding better-structured output
2. Analyze the influence of temperature on exact information extraction and new information generation.
3. One-shot and few-shot exemplar development.

## Task 2: Product Keyword Generation
From an order history, or a product page, or a product name, we generate keywords of the product for product modeling. (It produces keywords that are not in the prompt)

1. Product keyword generation based on order history page
2. Product keyword generation based on Product name
3. Product keyword generation based on Product Page

# User Guide
This is a Node JS application. 

## Installation: 
Requires Node 16.x

1. Install required packages
    ```
    npm install
    ```

2. Create .env file with open ai api key
    ```
    OPENAI_API_KEY="your-api-key"

    ```
3. Run experiments


    Here is a list of commands that works on our given dataset and produces responses.

    1. **yarn names** # converts HTML into text first and runs a prompt to extract information in text format (product names only)
    2. **yarn orders** # converts HTML into text first and runs a prompt to extract information in JSON format
    3. **yarn mine** # converts all the html in **data/html** folder into text files in **data/text**. Useful for faster experimentation.
    4. **yarn anonymize** # removes user name and addresses from source data. You should mine again after anonymizing


## Example Input-Output (Prompt in Text)

Input:
```
  * Your Account
 * ›
 * Your Orders


YOUR ORDERS

Search Orders
 * Orders
 * Buy Again
 * Not Yet Shipped
 * Digital Orders
 * Local Store Orders
 * Amazon Pay
 * Cancelled Orders

23 orders placed in last 30 days past 3 months 2023 2022 2021 2020 2019 2018
Archived Orders past 3 months

AN ITEM YOU BOUGHT HAS BEEN RECALLED

To ensure your safety, go to Your Recalls and Product Safety Alerts and see
recall information.

ACTION IS REQUIRED ON ONE OR MORE OF YOUR ORDERS.

Please see below.

THERE'S A PROBLEM DISPLAYING YOUR ORDERS RIGHT NOW.


Order placed
July 12, 2023
Total
$23.80
Ship to
hidden name
hidden name
hidden info
hidden info, hidden info
hidden info

Order # 114-1517274-7393830
View order details

View invoice

Arriving Thursday

Track package
VANMASS Universal Car Phone Mount,【Patent & Safety Certs】 Upgraded Handsfree
Stand, Phone Holder for Car Dashboard Windshield Vent, Compatible with iPhone 14
13 12 Samsung Android & Pickup Truck


Buy it again
View or edit order
Archive order
Order placed
July 12, 2023
Total
$246.80
Ship to
hidden name
hidden name
hidden info
hidden info, hidden info
hidden info

Order # 114-2496144-2288268
View order details

View invoice

Arriving Thursday

Track package
Genie 7155-TKV Smart Garage Door Opener StealthDrive Connect - Ultra Quiet
opener, WiFi, Battery Backup - Works with Alexa & Google Home


Buy it again
View or edit order
Archive order
Order placed
July 11, 2023
Total
$57.99
Ship to
hidden name
hidden name
hidden info
hidden info, hidden info
hidden info
Order # 114-9708805-8079465
View order details View invoice
Arriving today by 8 PM
Shipped
Flexzilla Garden Hose 5/8 in. x 100 ft., Heavy Duty, Lightweight, Drinking Water
Safe, ZillaGreen - HFZG5100YW-E

Buy it again
Track package Get product support Return or replace items Share gift receipt
Write a product review
Archive order
Order placed
July 9, 2023
Total
$64.94
Ship to
hidden name
hidden name
hidden info
hidden info, hidden info
hidden info
Order # 114-6884294-0047419
View order details View invoice
Delivered July 11

Homall L Shaped Gaming Desk Computer Corner Desk PC Gaming Desk Table with Large
Monitor Riser Stand for Home Office Sturdy Writing Workstation (Black, 51 Inch)

Return items: Eligible through August 10, 2023
Buy it again
View your item
Get product support Problem with order Track package Return items Share gift
receipt Write a product review
Archive order
Order placed
July 9, 2023
Total
$15.14
Policy sent to
adhocmaster@live.com

Order # 114-3068656-9825042
View order details

View invoice

Email delivery

ASURION 3 Year Furniture Protection Plan ($60 - $69.99)


Buy it again
Problem with order Return items Share gift receipt Leave seller feedback Write a
product review
Archive order
Order placed
July 3, 2023
Total
$200.25
Ship to
hidden name
hidden name
hidden info
hidden info, hidden info
hidden info
Order # 114-1479831-3352260
View order details View invoice
Delivered July 11
Package was left in a parcel locker
Rust-Oleum 261845 EpoxyShield Garage Floor Coating , 2 gal, Gray

Buy it again
View your item
Get product support Track package Return or replace items Write a product review
Archive order
Order placed
July 1, 2023
Total
$115.92
Ship to
hidden name
hidden name
hidden info
hidden info, hidden info
hidden info
Order # 113-0866043-5306630
View order details View invoice
Delivered July 6

Bonnlo 3 Burner Outdoor Portable Propane Stove Gas Cooker, Heavy Duty Iron Cast
Patio Burner with Detachable Stand Legs for Camp Cooking (3-Burner 225,000-BTU)

Buy it again
View your item
Problem with order Track package Return or replace items Write a product review
Archive order
Order placed
June 27, 2023
Total
$0.00
Ship to
hidden name
hidden name
hidden info
hidden info, hidden info
hidden info
Order # 113-7330109-7148238
View order details View invoice
Delivered June 28
Your package was left near the front door or porch.
Purrfectzone Bidet Sprayer for Toilet, Handheld Sprayer Kit , Cloth Diaper
Sprayer Set - Easy to Install - Stainless Steel

Return or replace items: Eligible through July 28, 2023
Buy it again
View your item
Get product support Track package Return or replace items Share gift receipt Get
help Write a product review
Archive order
Order placed
June 26, 2023
Total
$9.78
Ship to
hidden name
hidden name
hidden info
hidden info, hidden info
hidden info
Order # 113-4452204-9348259
View order details View invoice
Delivered June 27
Your package was left near the front door or porch.
Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil With Biotin &
Essential Oils, Nourishing Treatment for Split Ends and Dry Scalp for All Hair
Types, 2-Fluid Ounces

Return or replace items: Eligible through July 27, 2023
Buy it again
View your item
Track package Return or replace items Share gift receipt Get help Write a
product review
Archive order
Order placed
June 26, 2023
Total
$25.64
Ship to
hidden name
hidden name
hidden info
hidden info, hidden info
hidden info
Order # 113-4291615-9645819
View order details View invoice
Delivered June 28
Your package was left near the front door or porch.
Cantu Coconut Curling Cream with Shea Butter for Natural Hair, 12 oz (Packaging
May Vary)

Return or replace items: Eligible through July 28, 2023
Buy it again
View your item
Amazon Brand - Mama Bear Organic Kids Vitamin D3 25 mcg (1000 IU) Gummies per
serving, Bone and Immune Health, Strawberry, 80 Count

Buy it again
View your item
Garnier Fructis Sleek & Shine Moroccan Sleek Smoothing Oil for Frizzy, Dry Hair,
Argan Oil, 3.75 Fl Oz, 1 Count (Packaging May Vary)

Return or replace items: Eligible through July 28, 2023
Buy it again
View your item
Get product support Track package Return or replace items Return or replace
items Share gift receipt Write a product review
Archive order
 * ←Previous
 * 1
 * 2
 * 3
 * Next→



```

Output of **yarn names**:

```
VANMASS Universal Car Phone Mount
Genie 7155-TKV Smart Garage Door Opener StealthDrive Connect
Flexzilla Garden Hose 5/8 in. x 100 ft.
Homall L Shaped Gaming Desk Computer Corner Desk
ASURION 3 Year Furniture Protection Plan
Rust-Oleum 261845 EpoxyShield Garage Floor Coating
Bonnlo 3 Burner Outdoor Portable Propane Stove Gas Cooker
Purrfectzone Bidet Sprayer for Toilet
Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil
Cantu Coconut Curling Cream with Shea Butter
Amazon Brand - Mama Bear Organic Kids Vitamin D3 25 mcg (1000 IU) Gummies
Garnier Fructis Sleek & Shine Moroccan Sleek Smoothing Oil

```

Output of **yarn products**:
```
{
  "orders": [
    {
      "product_name": "VANMASS Universal Car Phone Mount",
      "brand": "VANMASS",
      "price": "$23.80",
      "classification": "Electronics",
      "keywords": ["Car Phone Mount", "Phone Holder", "Dashboard", "Windshield", "iPhone", "Samsung", "Android", "Pickup Truck"],
      "date_purchased": "July 12, 2023"
    },
    {
      "product_name": "Genie 7155-TKV Smart Garage Door Opener",
      "brand": "Genie",
      "price": "$246.80",
      "classification": "Home Improvement",
      "keywords": ["Garage Door Opener", "Smart", "WiFi", "Battery Backup", "Alexa", "Google Home"],
      "date_purchased": "July 12, 2023"
    },
    {
      "product_name": "Flexzilla Garden Hose 5/8 in. x 100 ft.",
      "brand": "Flexzilla",
      "price": "$57.99",
      "classification": "Outdoor",
      "keywords": ["Garden Hose", "Heavy Duty", "Lightweight", "Drinking Water Safe"],
      "date_purchased": "July 11, 2023"
    },
    {
      "product_name": "Homall L Shaped Gaming Desk",
      "brand": "Homall",
      "price": "$64.94",
      "classification": "Furniture",
      "keywords": ["Gaming Desk", "Computer Desk", "Corner Desk", "PC Gaming Desk", "Home Office"],
      "date_purchased": "July 9, 2023"
    },
    {
      "product_name": "ASURION 3 Year Furniture Protection Plan",
      "brand": "ASURION",
      "price": "$15.14",
      "classification": "Insurance",
      "keywords": ["Furniture Protection Plan"],
      "date_purchased": "July 9, 2023"
    },
    {
      "product_name": "Rust-Oleum 261845 EpoxyShield Garage Floor Coating",
      "brand": "Rust-Oleum",
      "price": "$200.25",
      "classification": "Home Improvement",
      "keywords": ["Garage Floor Coating"],
      "date_purchased": "July 3, 2023"
    },
    {
      "product_name": "Bonnlo 3 Burner Outdoor Portable Propane Stove",
      "brand": "Bonnlo",
      "price": "$115.92",
      "classification": "Outdoor",
      "keywords": ["Outdoor Propane Stove", "Gas Cooker", "Patio Burner", "Camp Cooking"],
      "date_purchased": "July 1, 2023"
    },
    {
      "product_name": "Purrfectzone Bidet Sprayer for Toilet",
      "brand": "Purrfectzone",
      "price": "$0.00",
      "classification": "Bathroom",
      "keywords": ["Bidet Sprayer", "Handheld Sprayer Kit", "Cloth Diaper Sprayer"],
      "date_purchased": "June 27, 2023"
    },
    {
      "product_name": "Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil",
      "brand": "Mielle Organics",
      "price": "$9.78",
      "classification": "Beauty",
      "keywords": ["Hair Strengthening Oil", "Biotin", "Essential Oils", "Nourishing Treatment"],
      "date_purchased": "June 26, 2023"
    },
    {
      "product_name": "Cantu Coconut Curling Cream",
      "brand": "Cantu",
      "price": "$25.64",
      "classification": "Beauty",
      "keywords": ["Coconut Curling Cream", "Shea Butter", "Natural Hair"],
      "date_purchased": "June 26, 2023"
    },
    {
      "product_name": "Amazon Brand - Mama Bear Organic Kids Vitamin D3 25 mcg (1000 IU) Gummies",
      "brand": "Amazon Brand - Mama Bear",
      "price": "$25.64",
      "classification": "Health",
      "keywords": ["Vitamin D3 Gummies", "Bone Health", "Immune Health"],
      "date_purchased": "June 26, 2023"
    },
    {
      "product_name": "Garnier Fructis Sleek & Shine Moroccan Sleek Smoothing Oil",
      "brand": "Garnier Fructis",
      "price": "$25.64",
      "classification": "Beauty",
      "keywords": ["Hair Smoothing Oil", "Argan Oil", "Frizzy Hair"],
      "date_purchased": "June 26, 2023"
    }
  ]
}
```
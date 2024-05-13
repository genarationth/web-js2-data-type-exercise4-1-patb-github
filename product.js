const products = {
    product_id: 1,
    product_name: 'car',
    quantity_in_stock: 10,
    unit_price: 1000000,
    product_description: {
        product_brand: "Tesla",
        size_or_quantity: "4.7 meters",
        taste_or_scent: "n/a",
        colour: "silver",
        additional_description: null
    }
}

for (let t in products) console.log(`${t}: ${[products[t]]}`);
for (let t in products.product_description) console.log(`${t}: ${[products.product_description[t]]}`);

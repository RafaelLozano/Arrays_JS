let products = [
    {name:'Atmega328', price:90},
    {name:'arduino uno', price:240},
    {name:'arduino mega', price:480},
    {name:'arduino pro mini', price:120},
    {name:'arduino nano', price:140},
]

const productsFilter = products.filter(product=>product.price<200)
console.log(productsFilter)
//Recorrer todo el arreglo para extrar una propiedad de interes
const productsMap = products.map(product=>product.price)
console.log('Prices: ', productsMap);
products.map(product=>console.log(`El ${product.name} cuesta $ ${product.price}.`))

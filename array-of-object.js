const products = [

    {No: 1, name: "lenovo",  price: 165000},
    {No: 2, name: "macBook", price: 150000},
    {No: 3, name: "dell",    price: 135000},
    {No: 4, name: "samsung", price: 185000},

];
/* map() */
// const allProductWithMap = products.map(p => p.price);
// console.log(allProduct);

// /* forEach() */
// products.forEach(p => console.log(p.No));

/* filter() */
//filter is use for  conditions
products.filter(p => console.log(p > 150000 )) 
const userCart = [
    {productId : 1, productName : "Mobile", price : 20000},
    {productId : 2, productName : "Laptop", price : 50000},
    {productId : 3, productName : "Television", price : 50000},
]
const ans = userCart.every((userCart=> userCart.price<70000));
console.log(ans);
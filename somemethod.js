const numbers =[1,6,9,7]
const ans = numbers.some(number=>number%2==0);
console.log(ans);
// some method
// it returns true if it get atleast one element of that condition

const userCart = [
    {productId : 1, productName : "Mobile", price : 20000},
    {productId : 2, productName : "Laptop", price : 100000},
    {productId : 3, productName : "Television", price : 70000},
]
const check= userCart.some(check=>userCart.price<200000);
console.log(check);
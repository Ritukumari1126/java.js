let fruits ={
    fruit1:"apple",
    fruit2:"mango",
};
console.log(fruits);
fruits[1]="pineapple";
console.log(fruits);
console.log(Array. isArray(fruits));
// object destructuring
// this is very important applications in real industry

const users =[
   { userId:1 , firstname : "ritu",gender : "female"},
    {userId:2, firstname : "abhinav", gender: "male"}

]

for(let user of users){
    console.log(user);
    console.log(user.firstname);
}

const band  = {
    
}
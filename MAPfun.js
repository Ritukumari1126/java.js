const users = [
    {firstname : "subh", age :"19"},
    {firstname : "ritu", age :"19"},
    {firstname : "neha", age :"19"},
    {firstname : "ayush", age :"19"},

]
const num= users.map(name => {
     return name.firstname;
});

console.log(num);
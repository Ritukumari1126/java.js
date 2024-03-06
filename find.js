//find method

// the find() method returns the value of the first method

const myArray = ["hello","cat","dog","lion"];
 const res  = myArray.find((String)=>String.length ===3);
 console.log(res);
 // now a realistic ex
 const users = [
    {userId : 1 , userName : "subh"},
    {userId : 2 , userName : "neha"},
    {userId : 3 , userName : "ayush"},
    {userId : 4 , userName : "LOST"},
    {userId : 5 , userName : "HAZEL"},
]
// this can be used to find unique value

const result = users.find( (number)=> number.userId===3);
console.log(result);
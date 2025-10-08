// Modules : module.exports ={...something}
// export const a ; export default b ; // import xyz from b // import {a} from b ;
//Dynamic import means : import('./yz) 

//Sorting Methods
// let a=[3,2,10,5,12];
// a.sort((a,b)=>b-a);
// a.sort((a,b)=>a-b);
// console.log(a);
// let arr=[
//     {name:"wasim",age:22},
//     {name:"sritama",age:20}
// ]
// arr.sort((a,b)=>b.age-a.age);
// console.log(arr);


// Split
// let str="hello";
// let arr=str.split('');
// //[h,e,l,l,o]
// console.log(arr);

//Join
// let arr=[1,2,4,5,6,7,8,9];
// let str=arr.join("|");
// console.log(str);

// Rev a string
// let str="hello world";
// let arr=str.split('');
// arr.reverse();
// str=arr.join('');
// console.log(str);

//Spread Operator
// let arr=[2,4];
// let brr=[...arr,9,0,8];
// console.log(brr);
// function abc(x,y,z){
//     console.log(arguments);
    
//     return x+y+z;
// }
// let x=[1,10,5,20];
// console.log(abc(...x));

// let s="Sritama Kumar"
// let sr=[...s];
// console.log(sr);

// // Spread in Math Operator 
// let x=[1,2,3,5];
// console.log(Math.min(x)); //NaN
// console.log(Math.min(...x)); //NaN

// Destructuring 
// let [a,b]=[20,30];
// console.log({a});
// console.log({b});

// //swapping
// [a,b]=[b,a]
// console.log({a});
// console.log({b});

// How js Engine works behind the scene
// Execution Context 
// GEC and FEC || Memory Allocation Phase and Code Execution Phase 
// varibales  -> undefined and function -> function 
// CallStack : Stack that maintains the order of Execution Contexts. 
// GEC->FEC->Nested FEC (run one by one then leaves the stack ) 

//let and const are also hoisted but they remain in other scope (Script scope)
//let and const remian in TDZ
// TDZ means the time between let and const are hoisted to the time le and const are initialized is called TDZ .

//Diff b/w var , let and const -> var (hoisted global scope) let and const (hoisted script scope) 
// var -> global scope and let and const -> block scope 

//const must be initialized after declaration : Immutable but if its an array or obj then the elements inside can be changed .
// First Class Function -> functions which can be treated like a varibles are called 1st class functions. 
// assign a const to a fun | we can pass it as a arguement | we can return it from a fun

// Higher Order Fun -> fun that takes a fun as an arguement or returns a fun or does both 

// Callback Fun -> A fun that is passed as an arguement to another fun and can be called anywhere inside the parent fun .

// function abc(){
//     console.log("hello world");
// }
// setTimeout(abc,2000);

// Arguements Object 
// When we pass parameters to a function then the parameters are stored in an array like object called
//arguement object -> can be accessed through arguements.

// function abc(a,b,c){
//     console.log(arguments[0]);
// }
// abc(2,3,5);









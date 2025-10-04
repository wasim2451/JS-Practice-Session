// What is a Callback function ?
// function printName(){
//     console.log("hello");
// }

// const a=(printName)=>{
//     printName();
// }
// a(printName);

// Duplicates Elements in Array
// let arr=[0,0,1,2,3,4,5,6,7,8,8,9,9]; // [8,9]
// let obj={};
// console.log(obj);
// let ans=[];

// for (let i=0;i<arr.length;i++){
//     if(obj[arr[i]]){
//         //Duplicate one
//         obj[arr[i]]=obj[arr[i]]+1;
//     }else{
//         //First Time
//         obj[arr[i]]=1;
//     }
// }
// console.log(obj);
// for(let i in obj){
//     //Key -> i 
//     //obj[key] -> value
//     if(obj[i]>1){
//         ans.push(i);
//     }
// }
// console.log(ans);


//Question 3 : String problem
// let str="My name is Wasim Khan as as xyz"
// //find substring as present or not
// let substr="as";
// // console.log(str.includes(substr)); 
// let pos=0;
// let count=0;
// while(pos!==-1){
//     pos=str.indexOf(substr,pos);
//     if(pos!==-1){
//         count++;
//         pos=pos+substr.length;
//     }
// }
// console.log(count);

//Question 4 
// const str1="Wasim";
// const str2="Khan";
// const str3=str1&&str2;
// console.log(str3)// Guess this Output 
// output will be Khan because both are truthy values to it will return the second truthy value 

// Question 5 
// [a]=[100,200,300,400];
// console.log(a); // a->100

// // Question 6
// let a=100;
// const b=++a + a++ ; // 101 + 101 -> 202 || a= 102
// console.log(b);
// console.log(a); // 102

// const c=a++ + ++a; // 100 + (101+1=102) 102 = 202

// Question 1
// If u want to access a char from a particular index which method in JS
// My ans : str[index] , str.charAt(index)
// let str="hello world"
// console.log(str[2]);
// console.log(str.charAt(2));


// Question 2 
//Deep Copy vs Shallow Copy 

// let original={
//     name:"Wasim",
//     subject:{
//         book:"History",
//         book2:"Bio"
//     }
// }
// let shallow={...original};
// // console.log(original.name===shallow.name);
// // console.log(original==shallow);
// shallow.name="abc";
// console.log(original);
// shallow.subject.book="Chem";
// console.log(original);
// //It is creating a new Reference at the top level object but for nested ones it is sharing the reference


// // Deep copy
// let deepCopy=structuredClone(original);
// console.log(deepCopy==original); // false ;
// console.log(deepCopy.subject===original.subject); // false

// //Question 3 
//  console.log(100+"8"+20)
//  // Convert everything to string -> 100820
 
// //Question 4
// let abc=100;
// if(function xyz(){
// }){
//     abc=abc+typeof(xyz)
// }
// console.log(abc); // Guess the output !
// function pqr(){};
// console.log(typeof pqr);

// let arr=[1,2,3];
// // let brr=arr.splice(0,1);
// // console.log("brr",brr); // sliced out 
// // console.log("arr",arr); // remaining in original arr
// let brr=arr.slice(0,1);
// console.log(brr);
// console.log(arr);

// let obj={
//     xyz:"WK",
//     pqr:function(){
//         console.log(this.xyz);
//     }
// }
// const c=obj.pqr; 
// obj.pqr(); 
// c(); 


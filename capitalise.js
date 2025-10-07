// s="hello world";
// o="Hello World"

let str="i am wasim akhtar khan";
let arr=str.split(' ');
// console.log(arr);
let ans="";
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    ans=ans+arr[i][0].toUpperCase()+arr[i].slice(1);
    ans=ans+" ";
}
console.log(ans);


let arr=[20,30,40,50,60,70];
let ans=arr.reduce((acc,curr)=>{
    if(curr<50){
        acc=acc+curr;
    }
    return acc;
},0);
console.log(ans);

let arr=[1,2,3,4,5];
// { even : 6 , odd : 9}
let ans=arr.reduce((acc,curr)=>{
    if(curr%2==0){
        // Even
        acc.even=acc.even+curr;
    }else{
        //Odd
        acc.odd=acc.odd+curr;
    }
    return acc;
},{
    even : 0,
    odd : 0
})
console.log(ans);

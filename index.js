const data=[
    {name:"Wasim",age:22},
    {name:"Sritama",age:20},
    {name:"Rifa",age:20}
]
// const data=null;

const promise=new Promise((resolve,reject)=>{
    if(data!=null){
        setTimeout(()=>{
            resolve(data);
        },5000)
    }else{
        reject(new Error("Something Went Wrong !"));
    }
});
promise.then((r)=>console.log(r)).catch((e)=>console.log(e.message));

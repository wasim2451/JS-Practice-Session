// const data = [
//     { name: "Wasim", age: 22 },
//     { name: "Sritama", age: 20 },
//     { name: "Rifa", age: 20 }
// ]
// // const data=null;

// const promise = new Promise((resolve, reject) => {
//     if (data != null) {
//         setTimeout(() => {
//             resolve(data);
//         }, 5000)
//     } else {
//         reject(new Error("Something Went Wrong !"));
//     }
// });
// promise.then((r) => console.log(r)).catch((e) => console.log(e.message));

// pass->"xyz"

//Create a Promise Function
const checkPass = (retries, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password == 'xyz') {
                resolve("Login Success !");
            } else {
                if (retries > 1) {
                    console.log(`You have ${retries - 1} pending `);
                    reject('Try Again');
                } else {
                    reject('Access Denied !');
                }
            }
        }, 2000)
    })
}

const inputPass = (password, noOfInput) => {
    checkPass(noOfInput, password)
        .then((r) => {
            console.log(r);
        })
        .catch((e) => {
            if (e == 'Try Again' && noOfInput > 1) {
                const x=prompt("Enter Password");
                inputPass(x,noOfInput-1);
            } else {
                console.log(e);
            }

        })
}
// const x=prompt("Enter a password")
// inputPass(x,3);


const p1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{reject("P1 done")},2000);
    })
}
const p2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{reject("P2 done")},5000);
    })
}
const p3=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{reject("P3 reject")},1000);
    })
}
Promise.any([p1(),p2(),p3()])
.then((res)=>console.log(res))
.catch((err)=>console.log(err));
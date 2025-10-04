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
                    reject('No retries left');
                }
            }
        }, 5000)
    })
}

const inputPass = (password, noOfInput) => {
    checkPass(noOfInput, password)
        .then((r) => {
            console.log(r);
        })
        .catch((e) => {
            if (e == 'Try Again' && noOfInput > 1) {
                inputPass('xyz',noOfInput-1);
            } else {
                console.log(e);
            }

        })
}

inputPass('abc',3);
// wasim
// ycuko

function encodeString(str,number){
    let newStr="";
    for(let i in str){
        let x=str.charCodeAt(i);
        // console.log(x);
        x=x+number;
        let newPosString=String.fromCharCode(x);
        // console.log(newPos);
        newStr+=newPosString;
    }
    return newStr;
}
console.log(encodeString("sritama is my love",3));
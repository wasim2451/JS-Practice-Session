const arr = ['a', 'b', 'c', 'a', 'd', 'e', 'b', 'f', 'g', 'e', 'h', 'i', 'i'];
let obj={};
for(item of arr){
    if(obj[item]){
        obj[item]=obj[item]+1;
    }else{
        obj[item]=1;
    }
}
console.log(obj);

function maskstring(str,n,mask_item){
    let len=str.length;
    if(n>len){
       throw new Error(" n is too big !");
    }
    let loopLen=len-n;
    let res="";
    //Length-> 8 then loopLen-> 8-4=4 <loopLen 0,1,2,3
    let i;
    for(i=0;i<loopLen;i++){
        res+=str[i];
    }
    while(i<len){
        res=res+mask_item;
        i++;
    }
    return res;
}
console.log(maskstring("Hello46484846516565",10,'*'));

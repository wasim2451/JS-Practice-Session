function removeVowel(str){
   let vowels=['a','e','i','o','u'];
   let newStr="";
   for(char of str){
    if(vowels.includes(char.toLowerCase())){
        continue;
    }
    newStr+=char;
   }
   return newStr;
}
console.log(removeVowel("The quick Brown fox jumps over the net !"));

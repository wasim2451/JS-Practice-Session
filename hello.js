// Palindrom String
function checkPalindrome(str){
    const arr=str.split('');
    console.log(arr);
    
    arr.reverse();
    console.log(arr);
    
    const revstr=arr.join('');
    return str==revstr;
}
console.log(checkPalindrome("madam"));
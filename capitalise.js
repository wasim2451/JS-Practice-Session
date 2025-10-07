function capitalizeWords(str) {
    // Your implementation
    // Step 1: Split string into words
    let arr = str.split(' ');

    // Step 2: Capitalize the first letter of each word
    arr = arr.map((item) => item[0].toUpperCase() + item.slice(1));

    // Step 3: Join the words back into a single string
    let ans = arr.join(' ');

    // Step 4: Return final answer
    return ans;
}
console.log(capitalizeWords("hello world"));




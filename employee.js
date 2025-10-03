const employees = [
  { name: "Alice", yearsOfExp: 5 },
  { name: "Bob", yearsOfExp: 3 },
  { name: "Charlie", yearsOfExp: 8 },
  { name: "Diana", yearsOfExp: 2 },
  { name: "Ethan", yearsOfExp: 10 },
  { name: "Bethan", yearsOfExp: 20 }
];

let ans=employees.reduce((acc,curr)=>{
    if(curr.yearsOfExp>=10){
        acc.push(curr.name);
    }
    return acc;
},[])
console.log(ans);

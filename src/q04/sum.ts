const myNum : number = parseInt(process.argv[2]);

if(!myNum || myNum<=0){
    console.log("Invalid Input");
    process.exit();
}

let sum = 0;

for(let i = 0;i<=myNum;i++){
    sum+=i;
}

console.log(`Sum: ${sum}`);
const operator : string = process.argv[2];
const num1 : number = Number(process.argv[3]);
const num2 : number = Number(process.argv[4]);

if(!operator || isNaN(num1) || isNaN(num2)){
    console.log("Invalid input");
    process.exit();
}

switch (operator) {
    case "add":
        console.log(String(num1+num2));
        break;
    case "sub":
        console.log(String(num1-num2));
        break
    case "mul":
        console.log(String(num1*num2));
        break
    case "div":
        if(num2 === 0){
            console.log("Infinity");
        }
        console.log(String(num1/num2));
        break
    default:
        console.log("Invalid operator");
        break;
}
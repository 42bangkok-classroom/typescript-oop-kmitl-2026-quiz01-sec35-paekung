const operator : string = process.argv[2];
const num1 : number = Number(process.argv[3]);
const num2 : number = Number(process.argv[4]);

if(!operator || !num1 || !num2 || isNaN(num1) || isNaN(num2)){
    console.log("Invalid input");
    process.exit();
}

switch (operator) {
    case "add":
        
        break;
    case "sub":
        break
    case "mul":
        break
    case "div":
        break
    default:
        console.log("Invalid input");
        break;
}
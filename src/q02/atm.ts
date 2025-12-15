const Balance : number = Number(process.argv[2]);
const Withdrawal : number = Number(process.argv[3]);

if(process.argv[2] == "" || process.argv[3] == ""){
    console.log("Invalid Input");
    process.exit();
}

if(isNaN(Balance) || isNaN(Withdrawal)){
    console.log("Invalid Input")
    process.exit();
}

if(Withdrawal > 5000){
    console.log("Exceeds per-withdrawal limit");
}
else if(Withdrawal > Balance){
    console.log("Insufficient balance");
}
else if (Withdrawal < Balance){
    console.log("Withdrawal approved");
} else {
    console.log("Invalid Input");
}
const myGradeInput : number = Number(process.argv[2]);

if(!myGradeInput || isNaN(myGradeInput)){
    console.log("Invalid Input");
}
else if (myGradeInput>100 || myGradeInput<0){
    console.log("Invalid Input")
} else {
    if(myGradeInput>=80){
        console.log("A")
    }
    else if(myGradeInput>=70){
        console.log("B")
    }
    else if(myGradeInput>=60){
        console.log("C")
    }
    else if(myGradeInput>=50){
        console.log("D")
    }
    else{
        console.log("F")
    }
}
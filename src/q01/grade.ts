const myGradeInput : number = Number(process.argv[2]);

if(isNaN(myGradeInput)){
    console.log("Invalid Input");
}
else if (myGradeInput>100 || myGradeInput<0){
    console.log("Invalid Input")
} else {
    if(myGradeInput>=80){
        console.log("Grade is A")
    }
    else if(myGradeInput>=70){
        console.log("Grade is B")
    }
    else if(myGradeInput>=60){
        console.log("Grade is C")
    }
    else if(myGradeInput>=50){
        console.log("Grade is D")
    }
    else{
        console.log("Grade is F")
    }
}
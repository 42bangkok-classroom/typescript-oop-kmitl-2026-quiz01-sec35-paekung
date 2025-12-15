const myGradeInput = process.argv[2];

if(myGradeInput === ""){
    console.log("Invalid Input");
    process.exit();
}

let myGrade = Number(myGradeInput);

if(isNaN(myGrade)){
    console.log("Invalid Input");
}
else if (myGrade>100 || myGrade<0){
    console.log("Invalid Input")
} else {
    if(myGrade>=80){
        console.log("Grade is A")
    }
    else if(myGrade>=70){
        console.log("Grade is B")
    }
    else if(myGrade>=60){
        console.log("Grade is C")
    }
    else if(myGrade>=50){
        console.log("Grade is D")
    }
    else{
        console.log("Grade is F")
    }
}
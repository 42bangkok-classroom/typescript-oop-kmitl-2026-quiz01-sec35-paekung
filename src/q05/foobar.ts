const myNum : number = Number(process.argv[2]);

if(!myNum || !(myNum>=0)){
    console.log("Invalid Input");
    process.exit();
}


let result = '';
for(let i = 1; i<=myNum;i++){
    if(i%3==0 && i%7==0){
        result+=`FooBar\n`;
        continue
    }else if(i%3 == 0){
        result+="Foo\n";
        continue
    }else if(i%7 == 0){
        result+="Bar\n";
        continue
    }
    result+=`${i}\n`;
}

console.log(result)
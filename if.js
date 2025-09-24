let agee =27;
if(agee>18){
console.log("You are an adult") ;
}

let score=45;
if(score<=50){
console.log("You failed the test") ;
}

let Name="John";
if(Name==="John"){
console.log(`hello ${Name}`) ;
}

let day="monday";
if(day!="saturday"&&"sunday"){
console.log("Its a weekly") ;
}

let num=4;
if(num%2==0){
console.log("The number is even") ;   
}

let char ="a";
if(char==="a"){
console.log("Its a latter") ;   
}

let list =[1,2,3];
if(Array.isArray(list)){
console.log("Its a array") ;   
}

let x=5;
if(x>0){
console.log("Its a positive") ;   
}

let y=-5;
if(y<0){
console.log("Its a negative") ;   
}

let z=9;
if(z%3==0){
console.log("z is a multiple of 3") ;   
}

let  GPA ;
switch ( GPA){
case "a" :
case " A ":
console.log("Excellent") ;  
break;
case "b" :
case "B" :
console.log("Very Good") ;  
break;
case "c":
case "C":
console.log(" Good") ;  
break;
case "f" :
case "F":
console.log("failed") ;  
break;
}

let month ="january";
if(month==="december"|| "january"||"february"){
        console.log("Winter"); }
else if(month==="march"||"april"||"may") {
        console.log("Spring") ;
}else if(month==="June"||"July"||"August"){
        console.log("summer") ;
}else if (month === "September" ||  "October" || "November") {
        console.log("Autumn");
}

let password="mypassword123";
if(password.length>=8){
        console.log("your password is strong");
}

let email="admin@admin.com";
let pass="12345Admin";
if(email==="admin@admin.com"){
    if(pass="12345Admin"){
        console.log("Welcome ");
    }else{ console.log("Incorrect password");}
}else{
        console.log("Incorrect email");

}




if(isNaN(11) ==false){
        console.log("11 is a valid number");
}
if(isNaN("19") ==false){
        console.log("19 is a valid number");
}
if(isNaN("xy")==false){
        console.log("xy is a valid number");
}
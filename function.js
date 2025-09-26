console.log("*task 1*");

function findSmaller(arrS){
let small=arrS[0];
for(i=0;i<=arrS.length;i++){
        if(arrS[i]<small){
        small=arrS[i];
        }
}
console.log(small);}
findSmaller([30,45,60,7]);


console.log("*task 2*");
//sort()
//split("")
//join("")
function AlphabeticalOrder(alpha){
newAlpha=alpha.split("").sort().join("");
console.log(newAlpha);
}
AlphabeticalOrder("hello")



console.log("*task 3*");
function evenOrOdd(number){
if(number%2===0){
    console.log("even");
}else{
        console.log("odd");
}
}
evenOrOdd(9);


console.log("*task 4*");

function evenNum(number){
let even;
    for(i=0;i<=number.length;i++){
if(number[i]%2===0){
  even = number[i];
  console.log(even);
}
}

}
evenNum([1,2,3,4,5,6,7,8,9]);


console.log("*task 5*");
function getAbsSum(numb){
let sum=0;
for(i=0;i<numb.length;i++){
        sum+=Math.abs(numb[i]); 
        
}
console.log(sum);
}
getAbsSum([-1,-3,-5,-4,-10,0]);



console.log("*task 6*");
function factorial(numbers){
fac=1;
for(i=1;i<=numbers;i++){
    fac*=i;
}
console.log(fac);}
factorial(8);


console.log("*task 7*");
function numbersOnly(nOnly){
for(i=0;i<=nOnly.length;i++){
        if(typeof(nOnly[i])=="number"){
        numar=nOnly[i];
          console.log(numar);

        }
}
}

numbersOnly(['ayham',3,7,'alaa',13,'coding']);





console.log("*task 8*");
function addUP(numbe){
let sum=0;
for(i=numbe;i>=0;i--){
        sum+=i; 
}
console.log(sum);
}
addUP(8);



console.log("*task 9*");
function minMaxLengthAverage(ars){
        function mins(ars){
        small=ars[0];
        for(i=0;i<=ars.length;i++){
        if(ars[i]<small){
        small=ars[i];
        }
        }

        return small;
        } 
        function largs(ars) {
        larg=ars[0];
        for(i=0;i<=ars.length;i++){
        if(ars[i]>larg){
        larg=ars[i];
        }
        }
        return larg;
        }
        
        function leng(ars){
        return ars.length;
        }

        function avr(ars){
        let sum1=0;
        for(i=0;i<ars.length;i++){
        sum1+=ars[i]; 
        }
        let average=sum1/ars.length;
        return average;
        }
        let all=[mins(ars),largs(ars),leng(ars),avr(ars)];
        console.log(all);
}
minMaxLengthAverage([7,13,3,77,100]);



console.log("*task 8*");
function romanNumbers(num) {
  const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  let romanResult = ''; 

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      romanResult += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }
  return romanResult; 
}
console.log(romanNumbers(1989));



console.log("*task 11*");
function countWords(text) {
      const words = text.trim().split(/\s+/); 
      console.log( words.length);
    }
countWords('hello from CodingAcademy');



console.log("*task 12*");
function multiplyByLength(words){
for(i=0;i<words.length;i++){
        console.log(words[i]*words.length);
}
}
multiplyByLength([4,2,5]);

console.log("*task 13*");
function checkEnding(st1,st2){
        if(st1.endsWith(st2)){
                console.log(true) ;
        }else{
                console.log(false) ;
      
        }
}
checkEnding("CodingSchool","Ac");

console.log("*task 14*");
function doubleChar(char){
        rep="";
for(i=0;i<char.length;i++){
    origin= char.charAt(i);
    rep+=origin.repeat(2);
   
} return rep;
}

console.log(doubleChar("Coding"));

console.log("*task 15*");
function findIndex(aar,element){
for(i=0;i<aar.length;i++){
        if(aar[i]===element){
                console.log(i+1);

        }
}
}
findIndex(['Ali','Mazen','Murad','Ayham','Murad'],'Ali')
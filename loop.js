//task1
console.log("*task 1*");
for(i=1;i<=10;i++){
console.log(i);
}

//task 2
console.log("*task 2*");
i=1;
while(i<=10){
    console.log(i);   
    i++;
}

//task 3
console.log("*task 3*");
let arr=[1,2,3,4,5];
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//task 4
console.log("*task 4*");
for(i=0;i<=10;i++){
    if(i%2===0){
        console.log(i);
    }
}

//task 5
console.log("*task 5*");
let sum=0;
for(i=0;i<=10;i++){
        sum+=i; 
}
console.log(sum);

//task 6
console.log("*task 6*");
larg=arr[0];
for(i=0;i<=arr.length;i++){
        if(arr[i]>larg){
        larg=arr[i];
        }
}
console.log(larg);

//task 7
console.log("*task 7*");
arrS=[5,4,3,2,1]
small=arr[0];
for(i=0;i<=arrS.length;i++){
        if(arrS[i]<small){
        small=arrS[i];
        }
}
console.log(small);

//task 8
console.log("*task 8*");

let sum1=0;
for(i=0;i<arr.length;i++){
        sum1+=arr[i]; 
}
let average=sum1/arr.length;
console.log(average);

//task 9
console.log("*task 9*");
fac=1;
for(i=1;i<=5;i++){
    fac*=i;
}
console.log(fac);

//task 10
console.log("*task 10*");

//task 11
console.log("*task 11*");
for (i=1;i<=10;i++){
   let multiplication=5*i;
console.log(`5 * ${i}=${multiplication}`);
}

//task 12
console.log("*task 12*");

for(i=0;i<arr.length;i+=2){
console.log(arr[i]);
}


//task 13
console.log("*task 13*");
for(i=arr.length-1;i>=0;i--){

    console.log(arr[i]);
}

//task 14
console.log("*task 14*");

for(i=0;i<arr.length;i++){
    if(i>=2 && i<=4){
console.log(arr[i]);}
}

//task 15
console.log("*task 15*");
for(i=0;i<arr.length;i++){
    if(arr[i]===4){
console.log("true");}
}

//task 16
console.log("*task 16*");
let arrays=[1,2,1,3,2,1];
let z=0;
for(i=0;i<arrays.length;i++){
    if(arrays[i]===1){
        z++;}
}console.log(z++);

//task 17
console.log("*task 17*");

let m= 10;
x=0;
y=1;
console.log(x);
console.log(y);

for(i=0;i<=m;i++){ 
result=x+y; 
if(result<=8){
console.log(result);
x=y;
y=result;}
}


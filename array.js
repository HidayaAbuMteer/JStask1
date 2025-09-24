let arr= [1,2,3,4,5];

console.log(arr.slice(0,arr.length).join());


let b=[];
for(let i=0;i<arr.length;i++){
    let  a=arr[i];
  b=b.concat(a)}
console.log(b.join());


for(let i=0;i<arr.length;i++){

console.log(i+1);}



    console.log(Array.isArray(arr));




let arrayFrom = {0:"a",1:"b",2:"c" , length: 3};
console.log(Array.from(arrayFrom))


// 6 for each


let arr1=[1,2,3];
let arr2=[3,4,5];
let arrMain=arr1.concat(arr2);
console.log(arrMain);

for(i=0;i<arr.length;i++){
console.log(arr.indexOf(arr[i])+1);}



let main=[1,2,3,4,5,6,[2,4]];
let s=[] ;
s=main.slice(0,6);
let s1=s.slice(0,2);
let s2=s.slice(4,6);
console.log(s1.concat(s2));

let mainn=[1,2,3,4,5,[3]];
let ss=[] ;
sl=mainn.slice(0,5);
let sp=sl.splice(1,1);
console.log(sp);

console.log(arr.join());

let text="12345";
let spp=text.split();
console.log(spp[0][4]);

let arrOf= Array.of(1,2,3);
console.log(arrOf);

let f=[1,2,3,4,5,[0,3]];
let f1=f.slice(0,5);
let f2=f1.fill(0,0,3);
console.log(f2);


let c=[1,2,3,4,5,[1,3]];
let c1=f.slice(0,5);
let c2=c1.copyWithin(1, 0,1);
console.log(c2.copyWithin(2, 0,1)); 


fruts=["apple","banana","cherry"];

console.log(fruts.sort());

console.log(fruts.reverse());
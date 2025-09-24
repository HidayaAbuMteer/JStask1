//basic
//task1
let arr= [1,2,3,4,5];

console.log(arr.slice(0,arr.length).join());

//task2
let b=[];
for(let i=0;i<arr.length;i++){
    let  a=arr[i];
  b=b.concat(a)}
console.log(b.join());

//task3
for(let i=0;i<arr.length;i++){

console.log(i+1);}

//task4
    console.log(Array.isArray(arr));



//task6
let arrayFrom = {0:"a",1:"b",2:"c" , length: 3};
console.log(Array.from(arrayFrom))


// 6 for each

//mid
//task1
let arr1=[1,2,3];
let arr2=[3,4,5];
let arrMain=arr1.concat(arr2);
console.log(arrMain);

//task2
for(i=0;i<arr.length;i++){
console.log(arr.indexOf(arr[i])+1);}


//task3
let main=[1,2,3,4,5,6,[2,4]];
let s=[] ;
s=main.slice(0,6);
let s1=s.slice(0,2);
let s2=s.slice(4,6);
console.log(s1.concat(s2));

//task4
let mainn=[1,2,3,4,5,[3]];
let ss=[] ;
sl=mainn.slice(0,5);
let sp=sl.splice(1,1);
console.log(sp);


//task5
console.log(arr.join());

//task6
let text="12345";
let spp=text.split();
console.log(spp[0][4]);

//task7
let arrOf= Array.of(1,2,3);
console.log(arrOf);


//task8
let f=[1,2,3,4,5,[0,3]];
let f1=f.slice(0,5);
let f2=f1.fill(0,0,3);
console.log(f2);

//task9
let c=[1,2,3,4,5,[1,3]];
let c1=f.slice(0,5);
let c2=c1.copyWithin(1, 0,1);
console.log(c2.copyWithin(2, 0,1)); 

//task10
fruts=["apple","banana","cherry"];

console.log(fruts.sort());


//task11
console.log(fruts.reverse());


//takalef1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
myFriends.pop();
console.log(myFriends); 
let myFriends1 = ["Ahmed", "Elham", "Osama", "Gamal"];
myFriends1.splice(num);
console.log(myFriends1); 


//takalef2
let num0=0;
let num1=1;
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.splice(num);
friends.splice(num0,num1);
console.log(friends); 

//takalef3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr=arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr);

//takalef4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO


//takalef5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
if(haystack.indexOf(needle)){
  console.log("Found");
}
if(haystack.lastIndexOf(needle)){
    console.log("Found");
}
if(haystack.includes(needle)){
    console.log("Found");
}

//takalef6
let arr11 = ["A", "C", "X"];
let arr22 = ["D", "E", "F", "Y"];
let allArrs = [];//a c d e f x y
allArrs=arr11.concat(arr22).sort().slice(4,7).join("").toLowerCase();
console.log(allArrs); 


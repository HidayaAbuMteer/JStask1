console.log("task1");
let person={
    name:"Adam",
    age:25,
    gender:"male",
};
console.log(person.name);
console.log(person.age);
console.log(person.gender);


console.log("task2");
let person2={
    name:"Adam",
    age:25,  
};
person2.gender="male";
console.log(`name:${person2.name},age:${person2.age},gender:${person2.gender}`);


console.log("task3");
let person3={
    name:"Adam",
    age:25,  
};
person3["gender"]="male";
console.log(`name:${person3["name"]},age:${person3["age"]},gender:${person3["gender"]}`);


console.log("task4");
let person4={
    name:"Adam",
    age:25,  
};
console.log(person4.name);


console.log("task5");
let person5={
    "name":"Adam",
    "age":25,  
};
console.log(person5["name"]);


console.log("task6");
for (let key in person) {
    console.log(key + " : " + person[key]);
}




console.log("task7");
console.log(Object.keys(person));


console.log("task8");
console.log(Object.values(person));


console.log("task9");
console.log(Object.entries(person));

//person2
console.log("task10");
genderPerson={
    gender:"male"
}
console.log(Object.assign(person2,genderPerson));


console.log("task11");
let person11={
    "name":"Adam",
    "age":25,  
};
Object.freeze(person11);




console.log("task12");
let person12={
    "name":"Adam",
    "age":25,  
};

Object.seal(person12);
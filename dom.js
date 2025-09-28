//basic

let myForm =document.createElement("form");
let nameText =document.createElement("label");
let nameInput =document.createElement("input");
let pasText =document.createElement("label");
let pasInput =document.createElement("input");
let confText =document.createElement("label");
let confInput =document.createElement("input");
let registerButton =document.createElement("button");
let hr = document.createElement("hr");

nameInput.setAttribute("type","text");
nameInput.setAttribute("class","nameText");
pasInput.setAttribute("type","password");
pasInput.setAttribute("class","passText");
confInput.setAttribute("type","password");
confInput.setAttribute("class","confText");
registerButton.setAttribute("class","register");
registerText = document.createTextNode("Register");

document.body.appendChild(myForm);
myForm.appendChild(nameText);
myForm.appendChild(document.createElement("br"));
myForm.appendChild(nameInput);
myForm.appendChild(document.createElement("br"));
myForm.appendChild(pasText);
myForm.appendChild(document.createElement("br"));
myForm.appendChild(pasInput);
myForm.appendChild(document.createElement("br"));
myForm.appendChild(confText);
myForm.appendChild(document.createElement("br"));
myForm.appendChild(confInput);
myForm.appendChild(document.createElement("br"));
myForm.appendChild(registerButton);
registerButton.appendChild(registerText);


nameText.innerHTML="Name: ";
pasText.innerHTML="Password: ";
confText.innerHTML="ConfirmPassword: ";

myForm.style.width="300px";
myForm.style.padding="20px";
registerButton.style.backgroundColor="blue";
registerButton.style.color="white";
registerButton.style.width="169.6px";
registerButton.style.height="40px";
registerButton.style.marginTop="10px";

//validate
nameInput.required = true;
pasInput.required = true;
confInput.required = true;


let nameError = document.createElement("span");
nameError.style.color = "red";
nameError.style.fontSize = "12px";
nameError.style.marginLeft = "5px";
nameInput.after(nameError);

let pasError = document.createElement("span");

pasError.style.color = "red";
pasError.style.fontSize = "12px";
pasError.style.marginLeft = "5px";
pasInput.after(pasError);

let confError = document.createElement("span");
confError.style.color = "red";
confError.style.fontSize = "12px";
confError.style.marginLeft = "5px";
confInput.after(confError);

// validation
registerButton.addEventListener("click", function(e) {
    e.preventDefault();

    let valid = true;

    if(nameInput.value.trim() === "") {
        nameError.textContent = "required";

        valid = false;
    } else {
        nameError.textContent = "";
    }

    if(pasInput.value.trim() === "") {
        pasError.textContent = "required";
        valid = false;
    } else {
        pasError.textContent = "";
    }

    if(confInput.value.trim() === "") {
        confError.textContent = "required";
        valid = false;
    } else if(confInput.value !== pasInput.value){
        confError.textContent = "not match";
        valid = false;
    } else {
    confError.textContent = "";}
    if(valid) {
        alert("Registration successful");
    }
});
document.body.appendChild(hr);







//mid 
let myDiv1 =document.createElement("div");
let header =document.createElement("h1");
let paragraph =document.createElement("p");

myDiv1.setAttribute("class","mid");

header.textContent="Heading";


document.body.appendChild(myDiv1);
myDiv1.appendChild(header);
myDiv1.appendChild(paragraph);



let text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let word=text.trim().split(/\s+/ );

word.forEach(function(word) {
    let span = document.createElement("span");
    span.textContent = word + " "; 
    if(word.length >= 8) {
        span.style.backgroundColor = "yellow";
    }
    paragraph.appendChild(span);
});

document.body.appendChild(hr);

//advanced
let myDiv2 =document.createElement("div");
let title =document.createElement("h1");
let formlist =document.createElement("form");
let itemlabel =document.createElement("label");
let itemInput =document.createElement("input");
let addButton =document.createElement("button");

myDiv2.setAttribute("class","shooping");

title.textContent="My shopping list";
itemlabel.textContent="Enter a new item: ";
itemInput.setAttribute("type","text");
itemInput.setAttribute("class","itemInput");
addButton.setAttribute("class","addButton");
let addText = document.createTextNode("Add");

document.body.appendChild(myDiv2);
myDiv2.appendChild(formlist);
formlist.appendChild(title);
formlist.appendChild(itemlabel);
formlist.appendChild(itemInput);
formlist.appendChild(addButton);
addButton.appendChild(addText);

let divList = document.createElement("div");
myDiv2.appendChild(divList);
let ulList = document.createElement("ul");
divList.appendChild(ulList);

addButton.addEventListener("click", function(e) {
    e.preventDefault();

     if(itemInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = itemInput.value;
        ulList.appendChild(li);
        itemInput.value = "";
        itemInput.focus();
    }
});


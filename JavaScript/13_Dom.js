const divElement = document.getElementById("seesh");

// single element
console.log(divElement);

const pElement = document.getElementsByTagName("p");

// Array 
console.log(pElement);

const  listElement = document.getElementsByClassName("lists");

// Array
console.log(listElement);

console.log(typeof(listElement));

divElement.innerHTML = "<p>This is injected text</p>";

document.getElementsByTagName("input")[0].type = "email";

const toggle = () => {
    for (let index = 0; index < pElement.length; index++) {
        const element = pElement[index];
        
        if (element.className == "myStyle") {
            element.className = "newStyle";
            element.style.color = "green";
        }
        else {
            element.className = "myStyle";
            element.style.color = "red";
        }
    }
}

divElement.addEventListener("click", toggle);
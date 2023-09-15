let obj = `{
    "name": "ekShitA",
    "roll": 47, 
    "trait": "pyaara baccha"
}`;

let jsonOBJ = JSON.parse(obj);

console.log(jsonOBJ.name);
console.log(jsonOBJ["name"]);

let obj1 = {
    name: "ekShitA",
    roll: 47, 
    trait: "cute"
};

let jsonOBJ1 = JSON.stringify(obj1);
console.log(jsonOBJ1); // jsonOBJ1 is a string
console.log(typeof(jsonOBJ1));


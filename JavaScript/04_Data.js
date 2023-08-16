const name = "Shubh";
const age = 20;

const message = (name, age) => {
    console.log(`Hello ${name}!`);
    if (age > 18) {
        console.log("Join us tommorow in our voting campaign.")
    }
    else {
        console.log("Stay home");
    }
}

export default message;
export {name, age};
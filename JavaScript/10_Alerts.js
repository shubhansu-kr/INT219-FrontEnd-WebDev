let count = 0;

const load = () => {
    let counterElement = document.getElementById("counter");
    counterElement.innerText = `${count}`;
}

const incrementor = () => {

    ++count;
    if (count == 2099) {
        window.alert("Max value reached. Resetting the value");
        count = 0;
    }

    load();

    if (count % 5 == 0) {
        window.alert("5 increments done");
    }

}

const decrementor = () => {
    if (count == 0) {
        window.alert("Cannot decrement less than 0");
        return;
    }
    --count;
    load();
}

const reset = () => {
    let confirmation = confirm("Do you want to set counter to 0 ?");
    if (confirmation) {
        count = 0;
        load();
        window.alert("Counter successfully reset to 0");
    }
    else {
        window.alert("Resumed");
    }
}

const setCounter = () => {
    let input = prompt("Enter the value of Counter", "Enter count number");
    if (input >= 0 && input < 2100) {
        count = input;
        load();
    }
    else {
        window.alert("Enter a valid counter [0-2100]");
    }
}
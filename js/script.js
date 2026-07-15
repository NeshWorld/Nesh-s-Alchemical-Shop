console.log("Connected!")

function test() {
    let counter = 0;
    console.log("Test");
    counter++;
    if (counter < 5) {
        document.getElementById("test").innerHTML = "Bravo tu as cliqué. Clique encore...";
    }
    else if (counter === 1) {
        console.log("Oui")
    }
}
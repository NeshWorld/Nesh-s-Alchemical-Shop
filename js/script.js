console.log("Connected!")

btnTest = docume,t.getElentById("btnTest")

function test() {
    let counter = 0;
    console.log("Test");
    counter = counter + 1;
    if (counter < 5) {
        btnTest.innerHTML = "Bravo tu as cliqué. Clique encore...";
    }

    else if (counter === 1) {
        console.log("Oui")
    }
}

document.addEventListener('click', (test()))
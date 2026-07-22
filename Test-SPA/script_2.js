console.log("Hello World!");

const main = document.getElementById("main-page");
console.log(main);
const potions = document.getElementById("potions-page");
console.log(potions);
const newProducts = document.getElementById("new-products-page");
console.log(newProducts);
const parchment = document.getElementById("parchment-page");
console.log(parchment);

const btnHome = document.querySelector(".flaticon-spellbook");
console.log(btnHome);

const btnPotions = document.querySelector(".flaticon-potion");
console.log(btnPotions);

const btnNewProducts = document.querySelector(".flaticon-dragon");
console.log(btnNewProducts);

const btnParchment = document.querySelector(".flaticon-ancient-scroll");
console.log(btnParchment);

btnHome.addEventListener('click', function() {
    showPages(main);
})

btnPotions.addEventListener('click', function() {
    showPages(potions);
})

btnNewProducts.addEventListener('click', function() {
    showPages(newProducts);
})

btnParchment.addEventListener('click', function() {
    showPages(parchment);
})

function showPages(activePage) {
    main.hidden = true;
    potions.hidden = true;
    newProducts.hidden = true;
    parchment.hidden = true;

    activePage.hidden = false;
}







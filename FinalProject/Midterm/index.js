// Read the file with menu items :
fetch("./data.json")
.then(response => response.json())
.then(myItem => loadFoods(myItem));

// Replace image and text per every one in HTML
function loadFoods(myItem) {
    var imgFood1 = document.getElementById("imgFood1"); // 
    var imgFood2 = document.getElementById("imgFood2"); // 
    var imgFood3 = document.getElementById("imgFood3"); // 
    var imgFood4 = document.getElementById("imgFood4"); // 
    var txtFood1 = document.getElementById("txtFood1"); 
    var txtFood2 = document.getElementById("txtFood2"); // 
    var txtFood3 = document.getElementById("txtFood3"); // 
    var txtFood4 = document.getElementById("txtFood4"); // 

    var imgDrink1 = document.getElementById("imgDrink1"); // 
    var imgDrink2 = document.getElementById("imgDrink2"); // 
    var imgDrink3 = document.getElementById("imgDrink3"); // 
    var imgDrink4 = document.getElementById("imgDrink4"); // 
    var txtDrink1 = document.getElementById("txtDrink1"); // 
    var txtDrink2 = document.getElementById("txtDrink2"); // 
    var txtDrink3 = document.getElementById("txtDrink3"); // 
    var txtDrink4 = document.getElementById("txtDrink4");

    for (var i = 0; i < myItem.menuItems.length; i++){
        let name = myItem.menuItems[i].name;
        let price = myItem.menuItems[i].price;
        let url = myItem.menuItems[i].url;
        let details = myItem.menuItems[i].details;
        let img = document.createElement("div");
        img.innerHTML = `<img src=${url} class="card-img-top" alt="..."></img>`;
        let txt = document.createElement("p");
        txt.innerHTML = `<p class="card-text"> <strong>${name}</strong> <br> ${details} <br> <small class="text-body-secondary"> ${price} </small></p>`;
        if (myItem.menuItems[i].name === "Deluxe Hamburger") {
            imgFood1.appendChild(img);
            txtFood1.appendChild(txt);
            } else if (myItem.menuItems[i].name === "Chicken Tenders") {
            imgFood2.appendChild(img);
            txtFood2.appendChild(txt);
            } else if (myItem.menuItems[i].name === "Hot Dog") {
            imgFood3.appendChild(img);
            txtFood3.appendChild(txt);
            } else if (myItem.menuItems[i].name === "World's Best French Fries") {
            imgFood4.appendChild(img);
            txtFood4.appendChild(txt);
            } else if (myItem.menuItems[i].name === "Glass of Water") {
            imgDrink1.appendChild(img);
            txtDrink1.appendChild(txt);
            } else if (myItem.menuItems[i].name === "Classic Cola") {
            imgDrink2.appendChild(img);
            txtDrink2.appendChild(txt);
            } else if (myItem.menuItems[i].name === "Iced Tea") {
            imgDrink3.appendChild(img);
            txtDrink3.appendChild(txt);
            } else if (myItem.menuItems[i].name === "Lemonade") {
            imgDrink4.appendChild(img);
            txtDrink4.appendChild(txt);
            }
     } // end of for
} // end of function

// Toggle button :
var toggleFoodButton = document.getElementById('toggleFoodButton');
var card1 = document.getElementById('foods');
var collapsableCard1 = new bootstrap.Collapse(card1, {toggle: false});
toggleFoodButton.addEventListener('click', function () {
    console.log('Button clicked');
collapsableCard1.toggle();
});

var toggleDrinksButton = document.getElementById('toggleDrinksButton');
var drinkCard = document.getElementById('drinks');
var collapsableDrinksCard = new bootstrap.Collapse(drinkCard, {toggle: false});
toggleDrinksButton.addEventListener('click', function () {
    console.log('Button clicked');
collapsableDrinksCard.toggle();
});

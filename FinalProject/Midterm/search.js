/*fetch("./nclarke_fullMenu.json")
    .then(response => response.json())
    .then(myFood => loadFoods(myFood));
*/
function getInputValue() {
    let itemName = document.forms["my_form"]["inputItemName"];
    let inputItemName = itemName.value;
    //console.log("inputMovieName.value");
    fetch("./data.json")
        .then(response => response.json())
        .then(myFood => loadMenu(myFood));
    function loadMenu(menu) {
        var mainContainer = document.getElementById("menuItem");
        for (var i = 0; i < menu.menuItems.length; i++) {
            if (menu.menuItems[i].name.toLowerCase().includes(inputItemName.toLowerCase())) {
                let name = menu.menuItems[i].name;
                let descritiption = menu.menuItems[i].details;
                let price = menu.menuItems[i].price;
                let url = menu.menuItems[i].url;

                //DOM
                let div = document.createElement("div");
                div.innerHTML = `<h3>${name}</h3> <br>
        ${descritiption} <br><br>
        <img src=${url} width="200"><br><br></img>
        <br>${price}<br>
        `;
                mainContainer.appendChild(div);
            }
        }
    }
}   
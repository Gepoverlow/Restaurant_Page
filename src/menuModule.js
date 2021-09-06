import Bife from "./images/beef.jpg";
import Choripan from "./images/choripan.jpg";
import EnsaladaMixta from "./images/ensaladaMixta.jpg";
import GrilledPork from "./images/grilledpork.jpg";
import Morcilla from "./images/morcilla.jpg";
import Mollejas from "./images/mollejas.jpg";

function menuPage() {
  let content = document.getElementById("content");

  //////// MAIN
  let contentMainMenu = document.createElement("div");
  contentMainMenu.id = "content-main-menu";
  content.appendChild(contentMainMenu);
  ////// H1
  let titleMenu = document.createElement("h1");
  titleMenu.id = "title-menu";
  contentMainMenu.appendChild(titleMenu);
  titleMenu.innerHTML = "Menu";
  ////// MENU
  let contentMenu = document.createElement("div");
  contentMenu.id = "content-menu";
  contentMainMenu.appendChild(contentMenu);
  ////DISHES
  function dishFactory(dishName, dishDesc, dishImg) {
    let dish = document.createElement("div");
    contentMenu.appendChild(dish);
    //
    let dishN = document.createElement("h2");
    dishN.innerHTML = dishName;
    let dishD = document.createElement("h4");
    dishD.innerHTML = dishDesc;
    let dishI = document.createElement("img");
    dishI.src = dishImg;
    //
    dish.appendChild(dishN);
    dish.appendChild(dishD);
    dish.appendChild(dishI);
  }

  dishFactory(
    "Choripan",
    "Choripán is a meal that basically consists of a grilled chorizo ​​between two pieces of bread, typical of Argentine cuisine.",
    Choripan
  );
  dishFactory(
    "Bife",
    "Grilled or charcoal-grilled cut of beef. Traditionally it is accompanied with some hot sauce, guacamole, beans and tortillas",
    Bife
  );
  dishFactory(
    "Morcilla",
    "It can be consumed raw, roasted, grilled or fried and as a main dish, it is usually accompanied by piquillo peppers.",
    Morcilla
  );
  dishFactory(
    "Puerco al Gril",
    "Prepared either indoors or outdoors, juicy pork ribs are always a treat. There are two types of pork ribs, namely spare ribs and baby back ribs.",
    GrilledPork
  );
  dishFactory(
    "Mollejas",
    "The sweetbreads are in the Argentine barbecue where they have their place of honor and are the expression of a true national passion.",
    Mollejas
  );
  dishFactory(
    "Ensalada Mixta",
    "It's important to eat a variety of fresh fruits and vegetables, in as many different colors as possible. Combining them in a salad is both easy and delicious!",
    EnsaladaMixta
  );
}
export { menuPage };

//   let pictureTest = document.createElement("img");
//   pictureTest.src = "../src/beef.jpg";
//   contentMainMenu.appendChild(pictureTest);
// Grilled chorizo ​​between two pieces of bread, typical of Argentine cuisine.

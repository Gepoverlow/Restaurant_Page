function menuPage() {
  let content = document.getElementById("content");

  //   ////// NAV
  //   let contentNav = document.createElement("div");
  //   contentNav.id = "content-nav";
  //   content.appendChild(contentNav);
  //   //// UL
  //   let nav = document.createElement("ul");
  //   nav.id = "nav";
  //   contentNav.appendChild(nav); //
  //   // LI
  //   let home = document.createElement("li");
  //   let menu = document.createElement("li");
  //   let contact = document.createElement("li");
  //   home.innerHTML = "HOME";
  //   menu.innerHTML = "MENU";
  //   contact.innerHTML = "CONTACT";
  //   nav.appendChild(home);
  //   nav.appendChild(menu);
  //   nav.appendChild(contact);

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

  dishFactory("Choripan", "Bla, Bla, Bla", "../src/choripan.jpg");
  dishFactory("Beef", "Bla, Bla, Bla", "../src/beef.jpg");
  dishFactory("Morcilla", "Bla, Bla, Bla", "../src/morcilla.jpg");
  dishFactory("Grilled Pork", "Bla, Bla, Bla", "../src/grilledpork.jpg");
  dishFactory("Mollejas", "Bla, Bla, Bla", "../src/mollejas.jpg");
  dishFactory("Sunday Salad", "Bla, Bla, Bla", "../src/Ensalada.jpg");
}
export { menuPage };

//   let pictureTest = document.createElement("img");
//   pictureTest.src = "../src/beef.jpg";
//   contentMainMenu.appendChild(pictureTest);

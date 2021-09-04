function homePage() {
  let content = document.getElementById("content");

  ////// NAV
  let contentNav = document.createElement("div");
  contentNav.id = "content-nav";
  content.appendChild(contentNav);
  //// UL
  let nav = document.createElement("ul");
  nav.id = "nav";
  contentNav.appendChild(nav); //
  // LI
  let home = document.createElement("li");
  let menu = document.createElement("li");
  let contact = document.createElement("li");
  home.innerHTML = "HOME";
  menu.innerHTML = "MENU";
  contact.innerHTML = "CONTACT";
  home.id = "homeBtn";
  menu.id = "menuBtn";
  contact.id = "contactBtn";
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  ////// MAIN
  let contentMainHome = document.createElement("div");
  contentMainHome.id = "content-main-home";
  content.appendChild(contentMainHome);
  //// H1
  let titleHome = document.createElement("h1");
  titleHome.id = "title-home";
  contentMainHome.appendChild(titleHome);
  titleHome.innerHTML = "Welcome to La Parrilla";
  //// HOME
  let contentHome = document.createElement("div");
  contentHome.id = "content-home";
  contentMainHome.appendChild(contentHome);
  // PARAGRAPH
  let paragraph = document.createElement("p");
  contentHome.appendChild(paragraph);
  paragraph.innerHTML =
    "In Argentina, asado is everything. The factor that brings the family together on Sundays, and friends some night of the week. The Argentine barbecue is a cult, a ritual, something much bigger than a simple meal.";
}

export { homePage };

function menuPage() {
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
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  ////// MAIN
  let contentMainMenu = document.createElement("div");
  contentMainMenu.id = "content-main-menu";
  content.appendChild(contentMainMenu);
  //// H1
  let titleMenu = document.createElement("h1");
  titleMenu.id = "title-menu";
  contentMainMenu.appendChild(titleMenu);
  titleMenu.innerHTML = "Menu";
  //// MENU
  let contentMenu = document.createElement("div");
  contentMenu.id = "content-menu";
  contentMainMenu.appendChild(contentMenu);
}
export { menuPage };

//   let pictureTest = document.createElement("img");
//   pictureTest.src = "../src/beef.jpg";
//   contentMainMenu.appendChild(pictureTest);

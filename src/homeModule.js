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
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  // MAIN
  let contentMainHome = document.createElement("div");
  contentMainHome.id = "content-main-home";
  content.appendChild(contentMainHome);
  //
}

export { homePage };

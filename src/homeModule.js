function homePage() {
  let content = document.getElementById("content");

  ////// MAIN
  let contentMainHome = document.createElement("div");
  contentMainHome.id = "content-main-home";
  content.appendChild(contentMainHome);
  //// H1
  let titleHome = document.createElement("h1");
  titleHome.id = "title-home";
  contentMainHome.appendChild(titleHome);
  titleHome.innerHTML = "Welcome to GP's Parrilla";
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

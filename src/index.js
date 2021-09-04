import "./style.css";

import { initialHomePage } from "./initialHomeModule";
import { homePage } from "./homeModule";
import { menuPage } from "./menuModule";

window.addEventListener("load", function () {
  initialHomePage();

  let content = document.getElementById("content");

  let homeBtn = document.getElementById("homeBtn");
  let menuBtn = document.getElementById("menuBtn");
  let contactBtn = document.getElementById("contactBtn");

  homeBtn.addEventListener("click", function () {
    content.removeChild(content.lastChild);
    homePage();
  });
  menuBtn.addEventListener("click", function () {
    content.removeChild(content.lastChild);
    menuPage();
  });
  contactBtn.addEventListener("click", function () {});
});

// while (content.hasChildNodes()) {
//     content.removeChild(content.lastChild);
//   }

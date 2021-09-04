import "./style.css";

import { homePage } from "./homeModule";
import { menuPage } from "./menuModule";

window.addEventListener("load", function () {
  homePage();

  let content = document.getElementById("content");

  let homeBtn = document.getElementById("homeBtn");
  let menuBtn = document.getElementById("menuBtn");
  let contactBtn = document.getElementById("contactBtn");

  homeBtn.addEventListener("click", function () {});
  menuBtn.addEventListener("click", function () {
    let contentMainHome = document.getElementById("content-main-home");

    content.removeChild(contentMainHome);
    menuPage();
  });

  contactBtn.addEventListener("click", function () {});
});

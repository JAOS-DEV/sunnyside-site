"use strict";

const toggle_nav = document.querySelector(".toggle_nav_links");

function myFunction() {
  if (toggle_nav.style.display === "block") {
    toggle_nav.style.display = "none";
  } else {
    toggle_nav.style.display = "block";
  }
}

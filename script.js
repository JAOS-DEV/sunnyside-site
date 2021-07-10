"use strict";

const toggle_nav = document.querySelector(".toggle_nav_links");

const navID = document.getElementById("toggleNavID");

// window.addEventListener("resize", (e) => {
//   console.log(e.target.innerWidth);
//   let windowWidth = e.target.innerWidth;
//  if()
// });

function toggleNav() {
  if (toggle_nav.style.display === "block") {
    navID.classList.toggle("toggleNavClass");
  } else {
    navID.classList.toggle("toggleNavClass");
  }
}

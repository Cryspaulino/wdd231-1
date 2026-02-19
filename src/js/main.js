import { getInfoLinks, getParkData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { parkInfoCard } from "./template.mjs";

import "../css/style.css";
import "../css/main.css";

function setIntro(parkData) {
  const introsec = document.querySelector(".intro");
  introsec.innerHTML = `<h1>${parkData.fullName}</h1>
  <p>${parkData.description}</p>`;
  // return `<h1> ${parkInfoLinks.name}</h1>
  //         <p> ${parkInfoLinks.description} </p>
  // `
}

function setInfo(data) {
  const infosec = document.querySelector(".info");
  const infohtml = data.map(parkInfoCard);
  infosec.insertAdjacentHTML("afterbegin", infohtml.join(""));
}


function enableNavigation() {
  // use a querySelector to get the menu buttons
  const menuButton = document.querySelector("#global-nav-toggle");

  // when the main menu button is clicked:
  menuButton.addEventListener("click", (ev) => {
    let target = ev.target;
    // toggle the show class on the global-nav
    document.querySelector(".global-nav").classList.toggle("show");

    // check to see if target is the button or something inside the button
    if (target.tagName != "BUTTON") {
      target = target.closest("button");
    }

    // check to see if we just opened or closed the menu
    // if we opened it then set the aria-expanded attribute on the button to true
    // if we closed it then set the aria-expanded attribute on the button to false

    if (document.querySelector(".global-nav").classList.contains("show")) {
      target.setAttribute("aria-expanded", true);
    } else {
      target.setAttribute("aria-expanded", false);
    }

  });
}
async function init() {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);

  setHeaderFooter(parkData);
  setIntro(parkData);
  setInfo(links);
  enableNavigation();
}

init();






// setHeader();
// setIntro();


// <span>${info.designation}</span>
// <span>${info.states}</span>


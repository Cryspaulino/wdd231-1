import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { parkInfoCard } from "./template.mjs";

const parkData = getParkData();

function setIntro(data) {
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

setHeaderFooter(parkData);
setIntro(parkData);
setInfo(parkInfoLinks);



// setHeader();
// setIntro();


  // <span>${info.designation}</span>
  // <span>${info.states}</span>


import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

function parkTemplate(info) {
    return `<a href="/" class="hero_title">${info.name}</a>
  <p class="hero_subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;

}





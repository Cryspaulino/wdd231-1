import { parkTemplate, footerTemplate } from "./template.mjs";

function setHeader(parkData) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = parkData.url;
  disclaimer.innerHTML = parkData.fullName;

  document.querySelector("head title").textContent = parkData.fullName;

  document.querySelector(".hero-banner img").src = parkData.images[0].url;

  document.querySelector(".hero_content").innerHTML = parkTemplate(parkData);
}

function setFooter(data) {
  const footerEl = document.querySelector("#park-footer");
  footerEl.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

export default function setHeaderFooter(parkData) {
    setHeader(parkData);
    setFooter(parkData);
    // setHeaderFooter(parkData);
}
import "../css/style.css";
import "../css/conditions.css";

import { getParkData, getParkAlerts, getParkVisitorCenters } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { alertTemplate, activityListTemplate, visitorCenterTemplate } from "./template.mjs";

function setAlerts(alerts) {
  const alertContainer = document.querySelector(".alerts-sec > ul");
  alertContainer.innerHTML = "";
  const alertInfo = alerts.map(alertTemplate);
  alertContainer.insertAdjacentHTML("beforeend", alertInfo.join(""));

}

function setVisitorCenters(centers) {
    const centerContainer = document.querySelector(".visitor-sec ul");
    const centerInfo = centers.map(visitorCenterTemplate);
    centerContainer.insertAdjacentHTML("beforeend", centerInfo.join(""))
}

function setActivities(activities) {
    const activitiesContainer = document.querySelector(".activities-sec ul");
    const actInfo = activityListTemplate(activities);
    activitiesContainer.insertAdjacentHTML("beforeend", actInfo);
}


async function init() {
  const parkData = await getParkData();
  const alerts = await getParkAlerts(parkData.parkcode);
  const visitorCenters = await getParkVisitorCenters(parkData.parkcode);
  setAlerts(alerts);
  setHeaderFooter(parkData);
  setVisitorCenters(visitorCenters);
  setActivities(parkData.activities);
}

init();
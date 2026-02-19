import spritePath from '../images/sprite.symbol.svg';

export function parkTemplate(info) {
    return `<a href="/" class="hero_title">${info.name}</a>
    <p class="hero_subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}


export function parkInfoCard(info) {
    return `
    <div class="cards">
    <a href="${info.link}">
    <img src="${info.image}" alt="${info.name}" class="card_img">
    <h3 href="/" class="card_title">${info.name}</h3>
    <p class="hero_subtitle"> ${info.description} </p>
    </div>`;

}


function getMailing(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
}
function getVoice(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}

export function footerTemplate(info) {
    const mailing = getMailing(info.addresses);
    const voice = getVoice(info.contacts.phoneNumbers)

    return `<section class="contact">
  <h3>Contact Info</h3>
  <h4>Mailing Address:</h4>
  <div><p>${mailing.line1}<p>
  <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
  <h4>Phone:</h4>
  <p>${voice}</p>
  </section>`;
}


export function alertTemplate(alert) {
    let alertType = "";
    switch (alert.category) {
        case "Park Closure":
            alertType = "closure";
            break;
        default:
            alertType = alert.category.toLowerCase();
    }

    return `<li class="alerts-sec">
            <svg class="icon" focusable="false" aria-hidden="true">
                <use xlink:href="${spritePath}#alert-${alertType}"></use>  
            </svg>
            <div>
                <h3 class="alert-${alertType}">${alert.title}</h3>
                <p>${alert.description}</p>
            </div>
        </li>`;
}

export function visitorCenterTemplate(center) {
    return `<li class="visitor-center">
    <h3>${center.name}</h3>
    <p>${center.description}</p>
    <p>${center.directionsInfo}</p>
  </li>`;
}

export function activityListTemplate(activities) {
    return activities.map(activity => `<li>${activity.name}</li>`).join("");
}


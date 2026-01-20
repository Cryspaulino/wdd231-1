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



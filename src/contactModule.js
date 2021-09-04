function contactPage() {
  let content = document.getElementById("content");

  //////// MAIN
  let containerMainContact = document.createElement("div");
  containerMainContact.id = "content-main-contact";
  content.appendChild(containerMainContact);
  ////// H1
  let titleContact = document.createElement("h1");
  titleContact.id = "title-contact";
  containerMainContact.appendChild(titleContact);
  titleContact.innerHTML = "Contact";
  ////// CONTACT
  let contentContact = document.createElement("div");
  contentContact.id = "content-contact";
  containerMainContact.appendChild(contentContact);
  //// INFO
  let contactInfo = document.createElement("div");
  contactInfo.id = "contact-info";
  contentContact.appendChild(contactInfo);
  let infoAddress = document.createElement("h3");
  infoAddress.innerHTML = "a Real Street, 101, A Real City, A Real Country";
  contactInfo.appendChild(infoAddress);

  let infoNumber = document.createElement("h2");
  infoNumber.innerHTML = "0800-AREALNUMBER-1337";
  contactInfo.appendChild(infoNumber);

  let infoMail = document.createElement("p");
  infoMail.innerHTML = "ARealEmail@ARealDomain.com";
  contactInfo.appendChild(infoMail);

  let aplauso = document.createElement("img");
  aplauso.src = "../src/aplauso.jpg";
  contactInfo.appendChild(aplauso);
}

export { contactPage };

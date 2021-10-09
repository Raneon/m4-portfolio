function main() {
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  contactFormSection = document.querySelector(".contact-form-container");
  addHeader(header);
  addContactForm(contactFormSection);
  addFooter(body);
  addServiceItem();
}
main();

function addServiceItem() {
  const spaceId = "41tt7s3uv5bq";
  const accessToken = "ntSR296LUkQUwZeVlhDRyjBPmitWcpA8i0WA_LUNDI4";
  const environmentId = "master";
  const template = document.querySelector("#template-item");
  const serviceTitle = template.content.querySelector(".services__item-title");
  const servicesContainer = document.querySelector(".services__container");
  const serviceDescription = template.content.querySelector(
    ".services__item-text"
  );
  const serviceImageUrl = template.content.querySelector(".services__img");
  fetch(
    `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .then((res) => {
      const imgs = res.includes.Asset;
      const data = res.items.filter((i) => {
        return i.sys.contentType.sys.id == "services";
      });
      data.forEach((x) => {
        serviceTitle.innerText = x.fields.title;
        serviceDescription.innerText =
          x.fields.serviceDescription.content[0].content[0].value;
        var img = {};
        if (x.fields.picture) {
          img = imgs.find((imgItem) => {
            return x.fields.picture.sys.id == imgItem.sys.id;
          });
          serviceImageUrl.src = img.fields.file.url;
        }

        const clone = document.importNode(template.content, true);
        servicesContainer.appendChild(clone);
        serviceImageUrl.src = "./imgs/monitor.png";
      });
    });
}

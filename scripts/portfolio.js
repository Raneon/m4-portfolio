function main() {
  const header = document.querySelector(".header");
  const body = document.querySelector("body");
  addHeader(header);
  addServiceItem();
  addFooter(body);
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
  const portfolioItemLink = template.content.querySelector(
    ".portfolio__item-link"
  );
  const serviceImageUrl = template.content.querySelector(".services__img");
  fetch(
    `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      const imgs = res.includes.Asset;
      const data = res.items.filter((i) => {
        return i.sys.contentType.sys.id == "work";
      });
      data.forEach((x) => {
        console.log;
        serviceTitle.innerText = x.fields.title;
        serviceDescription.innerText = x.fields.description;
        console.log(portfolioItemLink);
        portfolioItemLink.innerText = x.fields.url;
        portfolioItemLink.href = x.fields.url;
        var img = {};
        if (x.fields.picture) {
          img = imgs.find((imgItem) => {
            console.log("Data img ID");
            console.log(x.fields.picture[0].sys.id);
            console.log("Img ID");
            console.log(imgItem.sys.id);
            return x.fields.picture[0].sys.id == imgItem.sys.id;
          });
          console.log(img);
          console.log(img.fields.file.url);
          serviceImageUrl.src = img.fields.file.url;
        }

        const clone = document.importNode(template.content, true);
        servicesContainer.appendChild(clone);
        serviceImageUrl.src = "./imgs/monitor.png";
      });
    });
}

function main() {
  const header = document.querySelector(".header");
  const body = document.querySelector("body");
  const contactFormContainer = document.querySelector(
    ".contact-form__container"
  );
  addHeader(header);
  addFooter(body);
  addContactForm(contactFormContainer);
}
main();

function addContactForm(el) {
  const component = document.createElement("form");
  component.className = "contact-form";
  component.innerHTML = `
      <div class="contact-form-write-me">Contacto</div>
      <div class="contact-form-form">
        <div class="fieldset">
          <label for="name" class="label">NOMBRE</label>
          <input id="name" type="text" name="name" class="input" />
        </div>
        <div class="fieldset">
          <label for="email" class="label">EMAIL</label>
          <input id="email" type="email" name="to" class="input" />
        </div>
        <div class="fieldset">
          <label for="message" class="label">Mensaje</label>
          <textarea
            class="text-area"
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div class="button-container">
          <button type="submit" class="button">Enviar</button>
        </div>
      </div>
`;
  el.appendChild(component);
  sendForm();
}
function sendForm() {
  var form = document.querySelector(".contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formData = new FormData(event.target);
    data = Object.fromEntries(formData.entries());
    delete data.name;
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((res) => console.log(res));
  });
}

function addFooter(el) {
  const component = document.createElement("footer");
  component.innerHTML = `
  <nav class="navbar-footer">
    <a href="./index.html" class="navbar-footer__logo">Matias</a>
    <ul class="navbar__social-media">
        <li class="navbar__social-media-item">
            <a href="#" class="navbar__link-footer">Instagram<img src="./imgs/instagram.png" alt="instagram logo" class="navbar__social-media-logo"></a>
        </li>
        <li class="navbar__social-media-item">
            <a href="https://www.linkedin.com/in/matias-parodi-928676b8/?locale=en_US" class="navbar__link-footer">Linkedin<img src="../imgs/linkedin.png" alt="linkedin logo" class="navbar__social-media-logo"></a>
        </li>
        <li class="navbar__social-media-item">
            <a href="#" class="navbar__link-footer">Github<img src="../imgs/github.png" alt="github logo" class="navbar__social-media-logo"></a>
        </li>
`;
  el.insertBefore(component, el.lastChild);
}

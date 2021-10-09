function addHeader(el) {
  const component = document.createElement("div");
  component.className = "div1";
  component.innerHTML = `
  <nav class="navbar">
    <a href="./index.html" class="navbar__logo">Matias</a>
    <ul class="navbar__menu">
        <li class="navbar__item">
            <a href="./portfolio.html" class="navbar__link">Portfolio</a>
        </li>
        <li class="navbar__item">
            <a href="./servicios.html" class="navbar__link">Servicios</a>
        </li>
        <li class="navbar__item">
            <a href="./contacto.html" class="navbar__link">Contacto</a>
        </li>
    </ul>
                <button class="navbar__hamburger">
                <span class="navbar__bar"></span>
                <span class="navbar__bar"></span>
                <span class="navbar__bar"></span>
                </button>
                </nav>
    <div class="navbar__menu-window">    
    <button class="navbar__close-button">
    ✖</button>
     <ul class="navbar__menu--vertical">
        <li class="navbar__item">
            <a href="./portfolio.html" class="navbar__link">Portfolio</a>
        </li>
        <li class="navbar__item">
            <a href="./servicios.html" class="navbar__link">Servicios</a>
        </li>
        <li class="navbar__item">
            <a href="./contacto.html" class="navbar__link">Contacto</a>
        </li>
    </ul></div>
`;
  el.insertBefore(component, el.firstChild);
  const hamburgerButton = document.querySelector(".navbar__hamburger");
  const navbarMenuWindow = document.querySelector(".navbar__menu-window");
  const closeButton = document.querySelector(".navbar__close-button");
  hamburgerButton.addEventListener("click", () => {
    navbarMenuWindow.style.display = "inherit";
  });
  closeButton.addEventListener("click", () => {
    navbarMenuWindow.style.display = "none";
  });
}

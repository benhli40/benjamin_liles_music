// nav.js – SPA Navbar for Benjamin Liles site

export function renderNavbar() {
  const header = document.querySelector('header');

  const nav = document.createElement('nav');
  nav.className = 'navbar';

  nav.innerHTML = `
    <div class="nav-left">
      <a href="#home" class="logo">Benjamin Liles</a>
    </div>
    <div class="nav-center">
      <a href="#home">Home</a>
      <a href="#music">Music</a>
      <a href="#store">Store</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  `;

  header.appendChild(nav);
}
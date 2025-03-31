// footer.js – Footer component

export function renderFooter() {
  const footer = document.querySelector('footer');

  const wrapper = document.createElement('div');
  wrapper.className = 'footer-content';

  const year = new Date().getFullYear();

  wrapper.innerHTML = `
    <p>© ${year} Benjamin Liles. All rights reserved.</p>
    <p>
      <a href="#contact">Contact</a> |
      <a href="#store">Merch</a> |
      <a href="#music">Music</a>
    </p>
  `;

  footer.appendChild(wrapper);
}
// home.js – Homepage for Benjamin Liles

export function renderHome(container) {
  const section = document.createElement('section');
  section.className = 'home-section center';

  section.innerHTML = `
    <h1 class="headline">Benjamin Liles</h1>
    <p class="subtext">Guitarist • Pianist • Singer</p>
    <p class="bio-line">Crafting soundscapes since forever.</p>

    <a href="#music" class="cta-button">🎧 Listen Now</a>
  `;

  container.appendChild(section);
}
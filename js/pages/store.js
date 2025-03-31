// store.js – Merch / ecommerce store
import { merchCard } from '../components/card.js';

export function renderStore(container) {
  const section = document.createElement('section');
  section.className = 'store-section';

  section.innerHTML = `
    <h1>🛒 Official Merch</h1>
    <p class="subtext">Support the music. Wear the vibe.</p>
  `;

  const merchGrid = document.createElement('div');
  merchGrid.className = 'merch-grid';

  const merchItems = [
    { name: 'Nocturnal Bloom Tee', price: '$28', img: 'assets/images/tee.jpg' },
    { name: 'Echoes in Grey Vinyl', price: '$35', img: 'assets/images/vinyl.jpg' },
    { name: 'Signed Lyric Poster', price: '$18', img: 'assets/images/poster.jpg' },
    { name: 'Piano Sheet Pack (PDF)', price: '$12', img: 'assets/images/sheets.jpg' }
  ];

  merchItems.forEach(item => {
    merchGrid.appendChild(merchCard(item));
  });

  section.appendChild(merchGrid);
  container.appendChild(section);
}
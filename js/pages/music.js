// music.js – Discography + music section
import { albumCard } from '../components/card.js';

export function renderMusic(container) {
  const section = document.createElement('section');
  section.className = 'music-section';

  section.innerHTML = `
    <h1>🎵 Music</h1>
    <p class="subtext">Explore the sonic journey of Benjamin Liles</p>
  `;

  const albumGrid = document.createElement('div');
  albumGrid.className = 'album-grid';

  const albumData = [
    { title: 'Echoes in Grey', year: '2024', img: 'assets/images/echoes.jpg', link: '#' },
    { title: 'Nocturnal Bloom', year: '2023', img: 'assets/images/nocturnal.jpg', link: '#' },
    { title: 'Static & Soul', year: '2022', img: 'assets/images/static.jpg', link: '#' }
  ];

  albumData.forEach(data => {
    albumGrid.appendChild(albumCard(data));
  });

  section.appendChild(albumGrid);
  container.appendChild(section);
}
// card.js – Reusable card components

export function albumCard({ title, year, img, link }) {
  const card = document.createElement('div');
  card.className = 'album-card';

  card.innerHTML = `
    <img src="${img}" alt="${title} cover" class="album-art"/>
    <h3>${title}</h3>
    <p>${year}</p>
    <a href="${link}" class="stream-button">▶ Stream</a>
  `;

  return card;
}

export function merchCard({ name, price, img }) {
  const card = document.createElement('div');
  card.className = 'merch-card';

  card.innerHTML = `
    <img src="${img}" alt="${name}" class="merch-image" />
    <h3>${name}</h3>
    <p class="price">${price}</p>
    <button class="buy-btn">Add to Cart</button>
  `;

  return card;
}
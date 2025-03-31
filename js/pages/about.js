// about.js – Artist bio and background

export function renderAbout(container) {
  const section = document.createElement('section');
  section.className = 'about-section';

  section.innerHTML = `
    <h1>🎤 About Benjamin Liles</h1>
    <p class="bio-text">
      Benjamin Liles is a guitarist, pianist, and singer crafting cinematic soundscapes from shadows and soul. 
      Blending lo-fi textures with classical roots, his music slips between melancholy and clarity like fog in headlights.
    </p>

    <p class="bio-text">
      Starting as a street performer in dim-lit subway tunnels, Benjamin’s journey has been one of raw voice, late-night chords, and handwritten lyrics on coffee-stained napkins. 
      His discography echoes a personal revolution — one that speaks softly, but resonates deeply.
    </p>

    <p class="bio-text">
      When he’s not recording at 3 a.m. or losing time in piano loops, you’ll find him sketching song ideas in the margins of old poetry books.
    </p>

    <blockquote class="artist-quote">
      “I don’t write music to be heard. I write it to be felt.”
    </blockquote>
  `;

  container.appendChild(section);
}
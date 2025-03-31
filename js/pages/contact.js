// contact.js – Booking + fan contact page

export function renderContact(container) {
  const section = document.createElement('section');
  section.className = 'contact-section';

  section.innerHTML = `
    <h1>📫 Get in Touch</h1>
    <p class="subtext">Booking • Questions • Collabs • Fan Letters</p>

    <form class="contact-form">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Write your message here..." rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>

    <p class="note">This form is a demo. Nothing is actually sent.</p>
  `;

  // Optional fake submit handler
  section.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! This is a demo site.");
    e.target.reset();
  });

  container.appendChild(section);
}
import { renderNavbar } from './components/nav.js';
import { renderFooter } from './components/footer.js';
import { initTheme } from './components/toggleTheme.js';

// Lazy-load each view
import { renderHome } from './pages/home.js';
import { renderMusic } from './pages/music.js';
import { renderStore } from './pages/store.js';
import { renderAbout } from './pages/about.js';
import { renderContact } from './pages/contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderNavbar();
  renderFooter();
  handleRouteChange();
  window.addEventListener('hashchange', handleRouteChange);
});

function handleRouteChange() {
  const route = location.hash.slice(1) || 'home';
  const app = document.getElementById('app');
  app.innerHTML = ''; // clear the view

  switch (route) {
    case 'home':
      renderHome(app);
      break;
    case 'music':
      renderMusic(app);
      break;
    case 'store':
      renderStore(app);
      break;
    case 'about':
      renderAbout(app);
      break;
    case 'contact':
      renderContact(app);
      break;
    default:
      app.innerHTML = '<h2>404 – Page Not Found</h2>';
  }
}
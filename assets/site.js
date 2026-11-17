// Progressive enhancement: navigation and game details work without JavaScript.
const menu = document.querySelector('.menu');
const links = document.getElementById('site-links');
if (menu && links) {
  document.documentElement.classList.add('js');
  menu.hidden = false;
  function closeMenu() {
    menu.setAttribute('aria-expanded', 'false');
    links.classList.remove('is-open');
    menu.textContent = 'Menu';
  }
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('is-open', !expanded);
    menu.textContent = expanded ? 'Menu' : 'Close menu';
  });
  links.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
}

/**
 * fonty.io
 * Official website for the fonty project.
 * @author James Ooi <wengteikooi@gmail.com>
 */
import Typed from 'typed.js';

window.addEventListener('DOMContentLoaded', main);

function main() {

  
  // Hero CLI typing animation
  const fontNames = ['Lato', 'Open Sans', 'Merriweather', 'Montserrat', 'Poppins'];
  const heroCli = document.querySelector('[data-js=hero-cli]');
  const heroCliTyped = new Typed(heroCli, {
    strings: [
      'fonty install <em>Lato</em>',
      'fonty uninstall <em>Lato</em>',
      'fonty list',
      'fonty webfont --files <em>*.ttf</em>',
    ],
    loop: true,
    startDelay: 100,
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 2000,
    cursorChar: '_',
    preStringTyped: (index, self) => {
      // Randomize `fonty install <font_name>`
      if (index == 0) {
        self.strings[0] = `fonty install <em>${fontNames[Math.floor(Math.random()*fontNames.length)]}</em>`;
      }

      // Randomize `fonty uninstall <font_name>`
      if (index == 1) {
        self.strings[0] = `fonty uninstall <em>${fontNames[Math.floor(Math.random()*fontNames.length)]}</em>`;
      }
    }
  });

  console.log(heroCliTyped);
}
/**
 * fonty.io
 * Official website for the fonty project.
 * @author James Ooi <wengteikooi@gmail.com>
 */
import Typed from 'typed.js';
import anime from 'animejs';

window.addEventListener('DOMContentLoaded', main);

function main() {
  startHeroCliAnimations();
  startDownloadFeatureAnimation();
  startManageFeatureAnimation();
  startConvertFeatureAnimation();
}

/** Starts the command prompt typing animation. */
function startHeroCliAnimations() {
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
}


/** Starts the download feature visual animation. */
function startDownloadFeatureAnimation() {
  const visualEl = document.querySelector('[data-js=download-fonts-visual]');
  const bubbles = Array.from(visualEl.querySelectorAll('[data-js=bobbing]'));

  const animations = bubbles.map((bubble, index) => {
    const offset = 20 + (Math.random() * 10) * (Math.random() > 0.5 ? +1 : -1);

    // Animate
    return anime({
      targets: bubble,
      loop: true,
      duration: 1500 + (Math.random() * 250),
      direction: 'alternate',
      easing: 'easeInOutQuad',
      translateY: [0, offset],
    });
  });
}


/** Starts the manage feature visual animation. */
function startManageFeatureAnimation() {
  const visualEl = document.querySelector('[data-js=manage-fonts-visual]');
  const cogs = Array.from(visualEl.querySelectorAll('[data-js=spinning]'));
  const animations = cogs.map((cog, index) => {
    // Set transform origin to center of element
    const box = cog.getBBox();
    cog.style.transformOrigin = `${box.x + box.width/2}px ${box.y + box.height/2}px`;

    // Animate
    return anime({
      targets: cog,
      loop: true,
      duration: 6000 + (Math.random() * 2000),
      easing: 'linear',
      rotate: '1turn',
    });
  });
}


/** Starts the convert feature visual animation. */
function startConvertFeatureAnimation() {
  const visualEl = document.querySelector('[data-js=convert-fonts-visual]');
  const shapes = Array.from(visualEl.querySelectorAll('[data-js=bobbing]'));

  const animations = shapes.map((shape, index) => {
    const offset = 10 + (Math.random() * 10) * (Math.random() > 0.5 ? +1 : -1);

    // Animate
    return anime({
      targets: shape,
      loop: true,
      duration: 1500 + (Math.random() * 250),
      direction: 'alternate',
      easing: 'easeInOutQuad',
      translateY: [0, offset],
    });
  });
}
const link = document.querySelectorAll('.navigation__link');
const checkbox = document.querySelector('.navigation__checkbox');
const adventureButtons = document.querySelectorAll('.adventure__link');
const overlay = document.querySelector('.overlay');
const overlayContent = document.querySelector('.overlay__content');
const overlayButton = document.querySelector('.overlay__button');

link.forEach((link) => {
  link.addEventListener('click', (event) => {
    checkbox.checked = false;
  });
});

const icon = document.querySelector('.overlay__icon');
icon.addEventListener('click', () => {
  overlay.style.display = 'none';
});

adventureButtons.forEach((adventureButton) => {
  adventureButton.addEventListener('click', () => {
    overlay.style.display = 'flex';
  });
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overlayContent.addEventListener('click', (e) => {
  e.stopPropagation();
});

overlayButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

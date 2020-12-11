const btn = document.querySelector('[data-action="click"');
const list = document.querySelector('.scores-list');
btn.addEventListener('click', () => {
  list.classList.toggle('show');
});

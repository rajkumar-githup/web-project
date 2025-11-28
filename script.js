// Counter demo
const countEl = document.getElementById('count');
const incBtn = document.getElementById('increment');
const resetBtn = document.getElementById('reset');

let count = 0;

function render() {
  countEl.textContent = count;
}

incBtn.addEventListener('click', () => {
  count++;
  render();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  render();
});

render();

// Theme toggler
const toggleThemeBtn = document.getElementById('toggle-theme');

toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
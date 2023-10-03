const button = document.getElementById('catchMeBtn');

button.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - button.clientWidth;
  const maxY = window.innerHeight - button.clientHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;
});

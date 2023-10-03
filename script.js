const button = document.getElementById('catchMeBtn');
const video = document.getElementById('myVideo');

button.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - button.clientWidth;
  const maxY = window.innerHeight - button.clientHeight;

  setTimeout(() => {
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;

  }, 100);
});

button.addEventListener('click', () => {
  video.style.display = 'block';
  video.requestFullscreen();
  video.play();
});

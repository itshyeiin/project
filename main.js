const buttonElement = document.querySelector('.crazy-button');

buttonElement.addEventListener('mouseenter', moveButton = () => {
  const offsetLeft = Math.random() * (window.innerWidth - buttonElement.clientWidth);
  const offsetTop = Math.random() * (window.innerHeight - buttonElement.clientHeight);
  buttonElement.style.top = offsetTop + 'px';
  buttonElement.style.left = offsetLeft + 'px';
});


const buttonElement = document.querySelector('.crazy-button');

buttonElement.addEventListener('mouseenter', moveButton = () => {
  const offsetLeft = Math.random() * (window.innerWidth - buttonElement.clientWidth);
  const offsetTop = Math.random() * (window.innerHeight - buttonElement.clientHeight);
  buttonElement.style.top = offsetTop + 'px';
  buttonElement.style.left = offsetLeft + 'px';
});

const yesButton = document.getElementById("yes-button");

yesButton.addEventListener("click", () => {
    alert("SABI NA YES EH AHAHAAHAH, NOW GO AND SAY IT TO HIM!");
});

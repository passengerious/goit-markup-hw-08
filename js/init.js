document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.getElementsByClassName('burger-icon')[0];

  burgerButton.onclick = function () {
    this.classList.toggle('open');
    this.parentElement.parentElement.parentElement.classList.toggle('shown');
  };
});

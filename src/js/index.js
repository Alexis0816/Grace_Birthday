// import confetti from 'canvas-confetti'

let firstSlideContainer = document.getElementsByClassName("slide--content")[0];

let secondSlideContainer = document.getElementsByClassName(
  "slide--content--one"
)[0];

let secondCanvas = document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style", "display:none");
secondCanvas.setAttribute("style", "display:none");

let thirdCanvas = document.getElementsByClassName("third--canvas")[0];

thirdCanvas.setAttribute("style", "display:none");

let containerToggleOne = setTimeout(function () {
  firstSlideContainer.setAttribute("style", "display:none");
  secondSlideContainer.setAttribute("style", "display:block");
}, 2500);

let removeFirstSlide = setTimeout(function () {
  document
    .getElementsByClassName("first--slide")[0]
    .setAttribute("style", "display:none;");
  secondCanvas.setAttribute("style", "display:block");
}, 6500);

let removeSecondCanvas = setTimeout(function () {
  secondCanvas.setAttribute("style", "display:none");
  thirdCanvas.setAttribute("style", "display:block");

  // Mostrar confeti al final
  confetti({
    particleCount: 300, // Más partículas para una explosión más grande
    spread: 120, // Mayor dispersión
    startVelocity: 50, // Velocidad inicial más alta
    scalar: 1.5, // Tamaño más grande de las partículas
    zIndex: 999, // Asegura que esté por encima de otros elementos
  });


  let interval = setInterval(() => {
    confetti({
      particleCount: 200,
      spread: 100,
      startVelocity: 40,
      scalar: 1.5,
    });
  }, 1000); // Cada segundo lanza otra explosión
	setTimeout(() => clearInterval(interval), 3000);
}, 9800);

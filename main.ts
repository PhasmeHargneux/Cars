import { Car } from "./Car.js";

document.addEventListener("DOMContentLoaded", () => {
  const redCar = new Car("McQueen", "Cars", "red", 2006);
  const greenCar = new Car("Verdant", "Cars", "green", 2006);
  const blueCar = new Car("Dinoco", "Cars", "blue", 2006);

  const startBtn = document.getElementById("startBtn") as HTMLButtonElement;
  const redImg = document.getElementById("redCarImg") as HTMLImageElement;
  const greenImg = document.getElementById("greenCarImg") as HTMLImageElement;
  const blueImg = document.getElementById("blueCarImg") as HTMLImageElement;
  const chronoSpan = document.getElementById("chrono") as HTMLSpanElement;

  if (!startBtn || !redImg || !greenImg || !blueImg || !chronoSpan) {
    console.error("⚠️ Impossible de trouver le bouton, les images ou le chrono !");
    return;
  }

  startBtn.addEventListener("click", () => {
    startBtn.disabled = true;

    redCar.start();
    greenCar.start();
    blueCar.start();

    let redPos = 0;
    let greenPos = 0;
    let bluePos = 0;
    const finish = 600;

    let chrono = 0;
    chronoSpan.textContent = "Chrono : 0.0s";
    const chronoInterval = setInterval(() => {
      chrono += 0.3;
      chronoSpan.textContent = `Chrono : ${chrono.toFixed(1)}s`;
    }, 300);

    const interval = setInterval(() => {
      redCar.accelerate(25);
      redPos += 25;
      redImg.style.left = redPos + "px";

      const greenSpeed = Math.floor(Math.random() * 40 + 10);
      const blueSpeed = Math.floor(Math.random() * 40 + 10);

      greenCar.accelerate(greenSpeed);
      greenPos += greenSpeed;
      greenImg.style.left = greenPos + "px";

      blueCar.accelerate(blueSpeed);
      bluePos += blueSpeed;
      blueImg.style.left = bluePos + "px";

      if (redPos >= finish || greenPos >= finish || bluePos >= finish) {
        redCar.stop();
        greenCar.stop();
        blueCar.stop();
        clearInterval(interval);
        clearInterval(chronoInterval);

        // Actualise le chrono sur la page avant l'alerte
        chronoSpan.textContent = `Chrono : ${chrono.toFixed(1)}s`;

        const winner =
          redPos >= finish ? "McQueen" :
          greenPos >= finish ? "Verdant" : "Dinoco";

        alert(`🏁 ${winner} a gagné !\nTemps : ${chrono.toFixed(1)}s`);
      }
    }, 300);
  });
});

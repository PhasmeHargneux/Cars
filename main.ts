import { Car } from "./Car.js";

document.addEventListener("DOMContentLoaded", () => {
  const redCar = new Car("McQueen", "Cars", "red", 2006);
  const greenCar = new Car("Verdant", "Cars", "green", 2006);
  const blueCar = new Car("Dinoco", "Cars", "blue", 2006);

  const startBtn = document.getElementById("startBtn") as HTMLButtonElement;
  const redImg = document.getElementById("redCarImg") as HTMLImageElement;
  const greenImg = document.getElementById("greenCarImg") as HTMLImageElement;
  const blueImg = document.getElementById("blueCarImg") as HTMLImageElement;

  if (!startBtn || !redImg || !greenImg || !blueImg) {
    console.error("⚠️ Impossible de trouver le bouton ou les images !");
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

    const interval = setInterval(() => {
      redCar.accelerate(10);
      redPos += 10;
      redImg.style.left = redPos + "px";

      const greenSpeed = Math.floor(Math.random() * 11) + 5;
      const blueSpeed = Math.floor(Math.random() * 11) + 5;

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

        const winner =
          redPos >= finish ? "McQueen" :
          greenPos >= finish ? "Verdant" : "Dinoco";

        alert(`🏁 ${winner} a gagné !`);
      }
    }, 300);
  });
});

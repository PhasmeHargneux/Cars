export class Car {
  model: string;
  brand: string;
  color: string;
  year: number;
  speed: number;
  started: boolean;

  constructor(model: string, brand: string, color: string, year: number, speed: number = 0) {
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.speed = speed;
    this.started = false;
  }

  start(): void {
    this.started = true;
    console.log(`${this.brand} ${this.model} démarre !`);
  }

  stop(): void {
    this.started = false;
    this.speed = 0;
    console.log(`${this.brand} ${this.model} s'arrête.`);
  }

  accelerate(amount: number): void {
    if (this.started) {
      this.speed += amount;
      console.log(`${this.brand} ${this.model} accélère à ${this.speed} km/h`);
    }
  }
}

export class Car {
    constructor(model, brand, color, year, speed = 0) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = speed;
        this.started = false;
    }
    start() {
        this.started = true;
        console.log(`${this.brand} ${this.model} démarre !`);
    }
    stop() {
        this.started = false;
        this.speed = 0;
        console.log(`${this.brand} ${this.model} s'arrête.`);
    }
    accelerate(amount) {
        if (this.started) {
            this.speed += amount;
            console.log(`${this.brand} ${this.model} accélère à ${this.speed} km/h`);
        }
    }
}

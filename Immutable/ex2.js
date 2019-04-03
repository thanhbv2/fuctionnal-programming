class MutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    this.amount = Math.max(this.amount - value, 0)
    return this;
  }
}

const mutable = new MutableGlass('water', 100)
const mu2 = mutable.takeDrink(20);

console.log('===============>', mutable === mu2);
console.log('===============>', mu2.amount === mutable.amount);


class ImmutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    return new ImmutableGlass(this.content, Math.max(this.amount - value, 0))
  }
}

const imu = new ImmutableGlass('water', 100);
const imu2 = imu.takeDrink(20)

console.log('===============>', imu === imu2);
console.log('===============>', imu.amount === imu2.amount);
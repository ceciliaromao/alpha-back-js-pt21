class Avatar {
  #x;
  #y;
  #coins;
  #lives;
  #damage;

  constructor(x, y, coins) {
    this.#x = x;
    this.#y = y;
    this.#coins = coins;
    this.#lives = 10;
    this.#damage = 1;
  }

  //getters
  get getAvatar() {
    return this.dead()
      ? false
      : {
        x: this.#x,
        y: this.#y,
        coins: this.#coins,
      };
  }

  get getPosition() {
    return this.dead()
      ? false
      : {
        x: this.#x,
        y: this.#y,
      };
  }

  get getCoins() {
    return this.dead()
      ? false
      : this.#coins;
  }

  //setters
  forward() {
    if (this.dead()) return false;
    this.#y++;
  }

  back() {
    if (this.dead()) return false;
    this.#y > 0 && this.#y--;
  }

  right() {
    if (this.dead()) return false;
    this.#x++;
  }

  left() {
    if (this.dead()) return false;
    this.#x > 0 && this.#x--;
  }

  addCoins() {
    if (this.dead()) return false;
    this.#coins++;
  }

  spendCoins(value) {
    if (this.dead()) return false;
    this.#coins >= value && (this.#coins -= value);
  }

  attack() {
    if (this.dead()) return false;
    return this.#damage;
  }

  sufferDamage(value) {
    if (this.dead()) return false;
    this.#lives -= value;
  }

  dead() {
    return this.#lives <= 0;
  }
}


class Cowboy extends Avatar {
  #damage
  #ammo

  constructor(x, y, coins) {
    super(x, y, coins, lives);
    this.#damage = 2;
    this.#ammo = 10;
  }

  attack() {
    if (this.dead() || this.#ammo <= 0) return false;

    this.#ammo--;
    return this.#damage;
  }

  addAmmo() {
    if (this.dead()) return false;
    this.#ammo++;
  }
}

class Wizard extends Avatar {
  #damage
  #spells

  constructor(x, y, coins) {
    super(x, y, coins, lives);
    this.#damage = 3;
    this.#spells = 10;
  }

  attack() {
    if (this.dead()) return false;

    if (this.#spells <= 0) {
      setTimeout(() => {
        this.#spells = 10;
      }, 10000);
      return true;
    }
    
    this.#spells--;
    return this.#damage;
  }
}
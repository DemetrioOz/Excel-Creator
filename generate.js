const Chance = require("chance");

module.exports = class Utils {
  constructor() {
    this.chance = new Chance();
  }

  GetRandomNumber(length) {
    return this.chance.string({ length });
  }

  GetRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  cpf() {
    return this.chance.cpf();
  }

  generatePerson() {
    let birthday = {
      day: this.chance.integer({ min: 1, max: 26 }),
      month: this.chance.integer({ min: 1, max: 12 }),
      year: this.chance.integer({ min: 1960, max: 1995 }),
    };

    let name = this.#name("male");

    let email = `${name
      .replace(" ", "")
      .replace(" ", "")
      .replace(" ", "")}@outlook.com`;

    if (birthday.day < 10) {
      birthday.day = `0${birthday.day}`;
    }
    if (birthday.month < 10) {
      birthday.month = `0${birthday.month}`;
    }

    let number =
      this.chance.integer({ min: 10, max: 99 }) +
      "-9" +
      this.chance.integer({ min: 10000000, max: 999999999 });

    return {
      cpf: this.cpf(),
      name: name,
      nomeMae: this.#name("female"),
      nomePai: this.#name("male"),
      birthday: `${birthday.day}/${birthday.month}/${birthday.year}`,
      email: email,
      tel1: number,
      matricula: String(this.chance.integer({ min: 1000, max: 9999 })),
      agencia: String(this.chance.integer({ min: 1000, max: 9999 })),
      conta: String(this.chance.integer({ min: 100000, max: 999999 })),
    };
  }

  #name(gender) {
    return this.chance.name({
      middle: true,
      nationality: "it",
      gender: gender,
    });
  }
};

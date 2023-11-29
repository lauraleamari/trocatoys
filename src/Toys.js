export class Toys {
  type;
  rangeAge;
  emitsSound;
  emitsLight;
  fromMount

  constructor(type, rangeAge, emitsSound, emitsLight, fromMount) {
    this.type = type;
    this.rangeAge = rangeAge;
    this.emitsSound = emitsSound;
    this.emitsLight = emitsLight;
    this.fromMount = fromMount;
  }

  addToys(client) {
    client.toys.push({
      type: this.type,
      rangeAge: this.rangeAge,
      emitsSound: this.emitsSound,
      emitsLight: this.emitsLight,
      fromMount: this.fromMount,
    });
  }
}
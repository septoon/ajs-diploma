import Character from '../js/Character';

test('new target', () => {
  const expected = () => new Character('name');
  expect(expected).toThrow()
});

test('new extends target', () => {
  class Bowman extends Character {
    constructor(level) {
      super(level);
      this.level = level;
      this.attack = 25;
      this.defence = 25;
      this.health = 50;
      this.type = 'Bowman';
    }
  }

  const received = new Bowman(1);
  const expected = { level: 1, attack: 25, defence: 25, health: 50, type: 'Bowman' };
  expect(received).toEqual(expected)
});
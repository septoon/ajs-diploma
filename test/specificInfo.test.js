import icons from '../src/js/iconsInfo';
import Bowman from '../src/js/characters/Bowman';

test('showSpecific', () => {
  const bowman = new Bowman(1);
  const received = `${icons.level}${bowman.level} ${icons.attack}${bowman.attack} ${icons.defence}${bowman.defence} ${icons.health}${bowman.health}`;
  const expected = '🎖1 ⚔25 🛡25 ❤50';

  expect(received).toBe(expected);
});

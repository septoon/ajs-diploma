import calcTileType from '../js/utils';

test('top-left', () => {
  const received = calcTileType(0, 8);
  const expected = 'top-left';
  expect(received).toBe(expected);
});

test('top-right', () => {
  const received = calcTileType(7, 8);
  const expected = 'top-right';
  expect(received).toBe(expected);
});

import { calcTileType, calcHealthLevel } from '../src/js/utils';

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

test('bottom-left', () => {
  const received = calcTileType(56, 8);
  const expected = 'bottom-left';
  expect(received).toBe(expected);
});

test('bottom-right', () => {
  const received = calcTileType(63, 8);
  const expected = 'bottom-right';
  expect(received).toBe(expected);
});

test('top', () => {
  const received = calcTileType(5, 8);
  const expected = 'top';
  expect(received).toBe(expected);
});

test('right', () => {
  const received = calcTileType(31, 8);
  const expected = 'right';
  expect(received).toBe(expected);
});

test('bottom', () => {
  const received = calcTileType(60, 8);
  const expected = 'bottom';
  expect(received).toBe(expected);
});

test('left', () => {
  const received = calcTileType(32, 8);
  const expected = 'left';
  expect(received).toBe(expected);
});

test('center', () => {
  const received = calcTileType(28, 8);
  const expected = 'center';
  expect(received).toBe(expected);
});

test('critical', () => {
  const received = calcHealthLevel(10);
  const expected = 'critical';
  expect(received).toBe(expected);
});

test('normal', () => {
  const received = calcHealthLevel(25);
  const expected = 'normal';
  expect(received).toBe(expected);
});

test('high', () => {
  const received = calcHealthLevel(70);
  const expected = 'high';
  expect(received).toBe(expected);
});

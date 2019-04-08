/* eslint-disable no-unused-vars */
export function calcTileType(index, boardSize) {
  // TODO: write logic here
  const bs = boardSize - 1;
  if (index === 0) return 'top-left';
  if (index === bs) return 'top-right';
  if (index === boardSize * bs) return 'bottom-left';
  if (index === boardSize * boardSize - 1) return 'bottom-right';
  if (index > 0 && index < bs) return 'top';
  if (index % boardSize === 0) return 'left';
  if (index % boardSize === bs) return 'right';
  if (index / boardSize >= bs) return 'bottom';

  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

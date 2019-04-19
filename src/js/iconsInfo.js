const icons = {
  level: 'U+1F396',
  attack: 'U+2694',
  defence: 'U+1F6E1',
  health: 'U+2764',
};

for (const key in icons) { // eslint-disable-line
  icons[key] = String.fromCodePoint(icons[key].replace('U+', '0x'));
}

export default icons;

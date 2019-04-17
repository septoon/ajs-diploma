/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  try {
    for (const iterator of allowedTypes) {
      yield new iterator(maxLevel + 1);
    }
  } catch (e) {
    console.log(e);
  }
}


export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const result = [];
  const generator = characterGenerator(allowedTypes, maxLevel);

  if (characterCount > 2) console.error('must be 2 characters on team');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < characterCount; i++) {
    result.push(generator.next().value);
  }
  return result;
}

/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import Team from './Team';
import arrCharacters from './characters/arrCharacters';
/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  for (arrCharacters of allowedTypes) {
    yield new allowedTypes(maxLevel);
  }
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const result = []; 
  const generator = characterGenerator(allowedTypes, maxLevel);
  const team = new Team(result);
  
  if (characterCount > 2) console.error('must be 2 characters on team');
  
  for (let value of generator) {
    result.push(value);
  }
  return team;
}

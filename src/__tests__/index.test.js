import { lifeShowing } from '../index.js';

test.each([
  ['critical',{name: 'Маг', health: 10},'critical'],
  ['cwounded',{name: 'Маг', health: 25},'cwounded'],
  ['healthy',{name: 'Маг', health: 60},'healthy'],
])(('life showing test'), (__, testObject, result) => {
  expect(lifeShowing(testObject)).toBe(result);
})


/* test('life showing test', () => {
  let hero = {name: 'Маг', health: 51};
  expect(lifeShowing(hero)).toBe('cwounded');
}) */

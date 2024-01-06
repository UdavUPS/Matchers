import { lifeTop } from '../index.js';


test ('Проверка сортировки', () => {
  let mas = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]

  let resultMas = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]

  expect(lifeTop(mas)).toEqual(resultMas);
})



/* test.each(
  ['test_1',[
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ],[
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]],
  ['test_2',[
    {name: 'маг', health: 25},
    {name: 'мечник', health: 44},
    {name: 'лучник', health: 70},
  ],[
    {name: 'лучник', health: 70},
    {name: 'мечник', health: 44},
    {name: 'маг', health: 25},
  ]],
  ['test_3',[
    {name: 'лучник', health: 54},
    {name: 'маг', health: 3},
    {name: 'мечник', health: 15},
  ],[
    {name: 'маг', health: 54},
    {name: 'лучник', health: 15},
    {name: 'мечник', health: 3},
  ]]),(
    ('Проверка сортировки'), (__, inputData, outputData) => {
      expect(lifeTop(inputData)).toEqual(outputData);
    }); */
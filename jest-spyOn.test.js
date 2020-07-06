const libStats = require('./libStats');

test('testing function call, times called, parameters and returns', () => {

  // implementação original
  expect(libStats.healthPoints(5)).toBe(60);

  // implementação `mockada`
  let spyHealthPoints = jest
    .spyOn(libStats, 'healthPoints')
    .mockImplementation((value, booster) => value + booster);

  expect(spyHealthPoints(8, 3)).toBe(11);
  expect(spyHealthPoints).toHaveBeenCalled();
  expect(spyHealthPoints).toHaveBeenCalledTimes(1);
  expect(spyHealthPoints).toHaveBeenCalledWith(8, 3);

  // retorno a função original
  spyHealthPoints.mockRestore();
  spyHealthPoints = jest.spyOn(libStats, 'healthPoints');

  spyHealthPoints(5);

  expect(spyHealthPoints).toHaveBeenCalled();
  expect(spyHealthPoints).toHaveBeenCalledTimes(1);
  expect(spyHealthPoints).toHaveBeenCalledWith(5);
  expect(spyHealthPoints(5)).toBe(60);
  expect(spyHealthPoints).toHaveBeenCalledTimes(2);

  const spyStrength = jest.spyOn(libStats, 'strength');

  spyStrength(5);

  expect(spyStrength).toHaveBeenCalled();
  expect(spyStrength).toHaveBeenCalledTimes(1);
  expect(spyStrength).toHaveBeenCalledWith(5);
  expect(spyStrength(5)).toBe(15);
  expect(spyStrength).toHaveBeenCalledTimes(2);

})
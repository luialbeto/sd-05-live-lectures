function randomDice(sides) {
  const rng = Math.random();
  return Math.round(rng * sides);
}

test('testando se a função foi chamada', () => {
  randomDice = jest
    .fn()
    .mockReturnValueOnce(8)
    .mockReturnValueOnce(6)
    .mockReturnValue(10);

  expect(randomDice()).toBe(8);
  expect(randomDice).toHaveBeenCalled();
  expect(randomDice).toHaveBeenCalledTimes(1);

  expect(randomDice()).toBe(6);
  expect(randomDice).toHaveBeenCalled();
  expect(randomDice).toHaveBeenCalledTimes(2);

  expect(randomDice()).toBe(10);
  expect(randomDice).toHaveBeenCalled();
  expect(randomDice).toHaveBeenCalledTimes(3);
})
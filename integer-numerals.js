const romanToIntegerMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const valueOf = romanSymbol => romanToIntegerMap[romanSymbol];

const convertToInteger = (romanNum) => {
  if (typeof romanNum !== 'string') {
    throw new Error('Argument must be a string');
  }

  if (romanNum.replace(/[^IVXLCDM]/gi, '').length !== romanNum.length) {
    throw new Error("Argument can't contain invalid roman symbols");
  }

  const result = romanNum.split('').reduce(
    (accumulator, symbol, index, symbols) => {
      const currentValue = valueOf(symbol);
      const nextValue = valueOf(symbols[index + 1]);

      if (currentValue < nextValue) return accumulator - currentValue;
      // console.log('acum', accumulator, 'value',  valueOf(symbol), 'symbol', symbol);
      return accumulator + valueOf(symbol);
    },
    0
  );
  return result;
}

module.exports = convertToInteger;

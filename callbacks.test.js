const pokeTips = (callback) => {
  setTimeout(() => {
    callback('Bulbasaur é o melhor pokemon para começar.')
  }, 2000);
}

test('pokeTips returns the string we expect', (done) => {
  const callback = (data) => {
    expect(data).toBe('Bulbasaur é o melhor pokemon para começar.');
    done();
  };
  pokeTips(callback);
})
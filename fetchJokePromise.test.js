const fetch = require('node-fetch');
const fetchJokePromise = require('./fetchJokePromise');

jest.mock('node-fetch');

test('should fetch jokes', () => {
  const joke = {
    "id": "7h3oGtrOfxc",
    "joke": "Whiteboards ... are remarkable.",
    "status": 200
  }

  fetch.mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }))

  return fetchJokePromise()
    .then((data) => expect(data).toEqual("Teste alterado"))
})
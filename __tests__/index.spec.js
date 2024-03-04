function sumNumbers(a, b) {
  return a + b;
}

function applyCallback(callback, a, b) {
  return callback(a, b);
}

function forEach(items, callback) {
  for (const item of items) {
    callback(item);
  }
}

const mockCallback = jest.fn(x => 42 + x);

it('adds 1 + 2 to equal 3', () => {
  expect(sumNumbers(1, 2)).toBe(3);
});

it('should call the mock function at least once', () => {
  const mock = jest.fn();
  applyCallback(mock, 1, 2);
  expect(mock).toHaveBeenCalled();
});

it('should call the mock function twice', () => {
  forEach([0, 1], mockCallback);

  expect(mockCallback.mock.calls).toHaveLength(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.instances.length).toBe(2);
});

it('should keep 3 items on array', () => {
  const myMock = jest.fn();
  const items = [1, 2, 3, 4, 5];

  myMock.mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValue(false);

  const result = items.filter(myMock);

  expect(result).toHaveLength(3);
});
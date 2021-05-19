import { PokemonStore } from './pokemon-store';
function getMockStore() {
  return {
    setItem: jest.fn(),
    getItem: jest.fn(),
  };
}
test('should store', (done) => {
  const mockStorage = getMockStore();
  const store = new PokemonStore('my-favs', mockStorage);
  store.add({ name: 'squirtle', url: '' });
  expect(mockStorage.setItem).toHaveBeenCalledTimes(1);
  expect(mockStorage.setItem).toHaveBeenCalledWith(
    'my-favs',
    JSON.stringify({
      squirtle: { name: 'squirtle', url: '' },
    })
  );
  store.has('squirtle').subscribe((has) => {
    expect(has).toBe(true);
    done();
  });
});

test('should remove', (done) => {
  const mockStorage = getMockStore();
  const store = new PokemonStore('my-favs', mockStorage);
  store.add({ name: 'charmander', url: '' });
  store.remove('charmander');
  expect(mockStorage.setItem).toHaveBeenCalledTimes(2);
  expect(mockStorage.setItem).toHaveBeenLastCalledWith(
    'my-favs',
    JSON.stringify({})
  );

  store.has('squirtle').subscribe((has) => {
    expect(has).toBe(false);
    done();
  });
});

test('should seed from storage', (done) => {
  const mockStorage = getMockStore();
  mockStorage.getItem.mockReturnValue(
    JSON.stringify({ squirtle: { name: 'squirtle', url: '' } })
  );
  const store = new PokemonStore('my-favs', mockStorage);
  expect(mockStorage.getItem).toHaveBeenLastCalledWith('my-favs');

  store.has('squirtle').subscribe((has) => {
    expect(has).toBe(true);
    done();
  });
});

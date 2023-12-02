const {Toys} = require("./Toys");

describe('Testing Toys Classes', () => {
  test('Toys should be initialized correctly', () => {
    const toy = new Toys('Doll', '3-5', false, false, 'Toy Store');
    expect(toy.type).toBe('Doll');
    expect(toy.rangeAge).toBe('3-5');
    expect(toy.emitsSound).toBe(false);
    expect(toy.emitsLight).toBe(false);
    expect(toy.fromMount).toBe('Toy Store');
  });

  test('addToys should add the toy to the clients toys array', () => {
    const client = new Client(1, 'João', '123.456.789-01', 1990, '99999-9999', '12345-678');
    const toy = new Toys('Doll', '3-5', false, false, 'Toy Store');
    toy.addToys(client);
    expect(client.toys).toHaveLength(1);
    expect(client.toys[0]).toEqual({
      type: 'Doll',
      rangeAge: '3-5',
      emitsSound: false,
      emitsLight: false,
      fromMount: 'Toy Store',
    });
  });
});
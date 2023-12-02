const {AllowedChanges} = require("./AllowedChanges");

describe('Testing AllowedChanges Classes', () => {
  test('AllowedChanges should be initialized correctly', () => {
    const allowedChanges = new AllowedChanges('3-5', 'Toy Store');
    expect(allowedChanges.rangeAge).toBe('3-5');
    expect(allowedChanges.location).toBe('Toy Store');
  });

  test('canExchange should return true for matching toys', () => {
    const allowedChanges = new AllowedChanges('3-5', 'Toy Store');
    const toy = new Toys('Doll', '3-5', false, false, 'Toy Store');
    expect(allowedChanges.canExchange()(toy)).toBe(true);
  });

  test('makeExchange should exchange toys between two clients', () => {
    const allowedChanges = new AllowedChanges('3-5', 'Toy Store');
    const client1 = new Client(1, 'João', '123.456.789-01', 1990, '99999-9999', '12345-678');
    const client2 = new Client(2, 'Maria', '987.654.321-01', 1985, '88888-8888', '54321-876');
    const toy1 = new Toys('Doll', '3-5', false, false, 'Toy Store');
    const toy2 = new Toys('Car', '6-8', true, false, 'Supermarket');
    toy1.addToys(client1);
    toy2.addToys(client2);

    allowedChanges.makeExchange(client1, toy1, client2, toy2);

    expect(client1.toys).toEqual([{
      type: 'Car',
      rangeAge: '6-8',
      emitsSound: true,
      emitsLight: false,
      fromMount: 'Supermarket',
    }]);
    expect(client2.toys).toEqual([{
      type: 'Doll',
      rangeAge: '3-5',
      emitsSound: false,
      emitsLight: false,
      fromMount: 'Toy Store',
    }]);
  });
});

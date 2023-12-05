const {AllowedChanges} = require("./AllowedChanges");

describe('Testing AllowedChanges Classes', () => {

  let allowedChanges;
  let client1, client2, toy1, toy2;

  beforeEach(() => {
    allowedChanges = new AllowedChanges(5, 'City');

    client1 = { toys: [{ rangeAge: 5, fromMount: 'City' }] };
    client2 = { toys: [{ rangeAge: 5, fromMount: 'City' }] };

    toy1 = { rangeAge: 5, fromMount: 'City' };
    toy2 = { rangeAge: 5, fromMount: 'City' };
  });

  test('makeExchange exchange toys between clients', () => {
    const exchangeToys = allowedChanges.makeExchange();
    exchangeToys(client1, toy1, client2, toy2);

    expect(client1.toys).toEqual([toy2]);
    expect(client2.toys).toEqual([toy1]);
  });

  test('makeExchange do nothing if one of the toys is not found in the client', () => {
    const exchangeToys = allowedChanges.makeExchange();
    exchangeToys(client1, { rangeAge: 3, fromMount: 'City' }, client2, toy2);

    expect(client1.toys).toEqual([{ rangeAge: 5, fromMount: 'City' }]);
    expect(client2.toys).toEqual([toy2]);
  });

  test('canExchange should return true for toys within the allowed range and location', () => {
    const exchangeToys = allowedChanges.makeExchange();
    const checkExchange = allowedChanges.canExchange();

    expect(checkExchange(toy1)).toBe(true);
    expect(checkExchange(toy2)).toBe(true);
  });

  test('canExchange return false for toys outside the allowed range or location', () => {
    const exchangeToys = allowedChanges.makeExchange();
    const checkExchange = allowedChanges.canExchange();

    const toyOutOfRange = { rangeAge: 3, fromMount: 'City' };
    const toyWrongLocation = { rangeAge: 5, fromMount: 'Village' };

    expect(checkExchange(toyOutOfRange)).toBe(false);
    expect(checkExchange(toyWrongLocation)).toBe(false);
  });
});

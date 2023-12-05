const {Client} = require("./Client");

describe('Testing Client Classes', () => {
  test('create a new client', () => {
    const client = new Client(1, 'John Doe', '12345678901', 1990, '123-456-7890', '12345-678');
    expect(client).toBeInstanceOf(Client);
  });

  test('Checking client CPF', () => {
    const client = new Client(1, 'John Doe', '12345678901', 1990, '123-456-7890', '12345-678');
    expect(client.cpf).toBe('12345678901');

    client.cpf = '98765432109';
    expect(client.cpf).toBe('98765432109');
  });

  test('Checking client phone', () => {
    const client = new Client(1, 'John Doe', '12345678901', 1990, '123-456-7890', '12345-678');
    expect(client.phone).toBe('123-456-7890');

    client.phone = '987-654-3210';
    expect(client.phone).toBe('987-654-3210');
  });

  test('Checking client cep', () => {
    const client = new Client(1, 'John Doe', '12345678901', 1990, '123-456-7890', '12345-678');
    expect(client.cep).toBe('12345-678');

    client.cep = '98765-432';
    expect(client.cep).toBe('98765-432');
  });

  test('Add client to the clients list', () => {
    const client = new Client(1, 'John Doe', '12345678901', 1990, '123-456-7890', '12345-678');
    const clientsList = client.addClient();
    expect(clientsList.length).toBe(5);
    expect(clientsList[0]).toEqual({
      id: 1,
      name: 'John Doe',
      cpf: '12345678901',
      yearBirth: 1990,
      phone: '123-456-7890',
      cep: '12345-678',
      toys: [],
    });
  });
});

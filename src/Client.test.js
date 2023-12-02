const {Client} = require("./Client");

describe('Testing Client Classes', () => {
  test('Client should be initialized correctly', () => {
    const client = new Client(1, 'João', '123.456.789-01', 1990, '99999-9999', '12345-678');
    expect(client.id).toBe(1);
    expect(client.name).toBe('João');
    expect(client.cpf).toBe('123.456.789-01');
    expect(client.yearBirth).toBe(1990);
    expect(client.phone).toBe('99999-9999');
    expect(client.cep).toBe('12345-678');
    expect(client.toys).toEqual([]);
  });

  test('addClient should add the client to the clientsList', () => {
    const client = new Client(1, 'João', '123.456.789-01', 1990, '99999-9999', '12345-678');
    client.addClient();
    expect(Client.clientsList).toHaveLength(1);
    expect(Client.clientsList[0]).toEqual({
      id: 1,
      name: 'João',
      cpf: '123.456.789-01',
      yearBirth: 1990,
      phone: '99999-9999',
      cep: '12345-678',
      toys: [],
    });
  });
});
const {Client} = require("../Client/Client");
const {MeetingPoint} = require("./MeetingPoint");

describe('Testing MeetingPoint Classes', () => {
  test('MeetingPoint should be initialized correctly', () => {
    const meetingPoint = new MeetingPoint('Park');
    expect(meetingPoint.location).toBe('Park');
    expect(meetingPoint.clientsWithToys).toEqual([]);
  });

  test('MeetingPoint constructor initializes properties correctly', () => {
    const meetingPoint = new MeetingPoint('Shopping');
    expect(meetingPoint.location).toBe('Shopping');
    expect(meetingPoint.clientsWithToys).toEqual([]);
  });

  test('addExchangePoint add the client to clientsWithToys array', () => {
    const meetingPoint = new MeetingPoint('Park');
    const client = new Client(1, 'João', '123.456.789-01', 1990, '99999-9999', '12345-678');
    meetingPoint.addExchangePoint(client);
    expect(meetingPoint.clientsWithToys).toHaveLength(1);
    expect(meetingPoint.clientsWithToys[0]).toEqual({
      client: {
        id: 1,
        name: 'João',
        cpf: '123.456.789-01',
        yearBirth: 1990,
        phone: '99999-9999',
        cep: '12345-678',
      },
      toys: [],
    });
  });
});
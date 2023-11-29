export class MeetingPoint {
  constructor(location) {
    this.location = location;
    this.clientsWithToys = [];
  }

  addExchangePoint(client) {
    this.clientsWithToys.push({
      client: {
        id: client.id,
        name: client.name,
        cpf: client.cpf,
        yearBirth: client.yearBirth,
        phone: client.phone,
        cep: client.cep,
      },
      toys: client.toys,
    });
  }
}
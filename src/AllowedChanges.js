const {Client} = require("./Client");
const {Toys} = require("./Toys");
const {MeetingPoint} = require("./MeetingPoint");

class AllowedChanges {
  constructor(rangeAge, location) {
    this.rangeAge = rangeAge;
    this.location = location;
  }

  makeExchange() {
    return (client1, toy1, client2, toy2) => {
      const index1 = client1.toys.findIndex((toy) => toy === toy1);
      const index2 = client2.toys.findIndex((toy) => toy === toy2);

      if (index1 !== -1 && index2 !== -1) {
        client1.toys[index1] = toy2;
        client2.toys[index2] = toy1;
      }
    };
  }

  canExchange() {
    return (toy) => toy.rangeAge === this.rangeAge && toy.fromMount === this.location;
  }
}

module.exports = {AllowedChanges}

// Criar clientes
const client1 = new Client(1, 'João', '123.456.789-01', 1990, '99999-9999', '12345-678');
const client2 = new Client(2, 'Maria', '987.654.321-01', 1985, '88888-8888', '54321-876');

// Criar brinquedos
const toy1 = new Toys('Doll', '3-5', false, false, 'Praça');
const toy2 = new Toys('Car', '6-8', true, false, 'Shopping');

// Adicionar brinquedos aos clientes
toy1.addToys(client1);
toy2.addToys(client2);

// Criar ponto de encontro
const meetingPoint = new MeetingPoint('Park');

// Adicionar ponto de encontro
meetingPoint.addExchangePoint(client1);
meetingPoint.addExchangePoint(client2);

// Criar regra de trocas permitidas
const allowedChanges = new AllowedChanges('3-5', 'Praça');

// Fazer troca entre dois clientes
allowedChanges.makeExchange(client1, toy1, client2, toy2);

console.log(Client.clientsList);
console.log(meetingPoint.clientsWithToys);

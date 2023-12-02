class Client {
  #cpf;
  #phone;
  #cep;

  static clientsList = [];

  constructor(id, name, cpf, yearBirth, phone, cep) {
    this.id = id;
    this.name = name;
    this.#cpf = cpf;
    this.yearBirth = yearBirth;
    this.#phone = phone;
    this.#cep = cep;
    this.toys = [];
    Client.clientsList.push({
      id: id,
      name: name,
      cpf: cpf,
      yearBirth: yearBirth,
      phone: phone,
      cep: cep,
      toys: this.toys,
    });
  }

  get cpf() {
    return this.#cpf;
  }

  get phone() {
    return this.#phone;
  }

  get cep() {
    return this.#cep;
  }

  set cpf(newCpf) {
    this.#cpf = newCpf;
  }

  set phone(newPhone) {
    this.#phone = newPhone;
  }

  set cep(newCep) {
    this.#cep = newCep;
  }

  addClient() {
    return Client.clientsList;
  }
}

module.exports = { Client }
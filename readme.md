Você foi contratado para fazer a versão inicial de um sistema que faz troca de brinquedos.  Nessa versão o sistema conta com as seguintes funcionalidades:

- classe `Client`, que possue como atributo:
  - `id`, recebido na instanciação
  - `name`, recebido na instanciação
  - `cpf`, privado e recebido na instanciação
  - `yearBirth`, recebido na instanciação
  - `phone`,  privado e recebido na instanciação
  - `cep`,  privado e recebido na instanciação

  - Propriedade **estática**, sendo ela uma array de objetos que é inicialmente vazia e é atualizada a cada vez que um novo cliente é criado, contendo:
    - `os dados do cliente`
    - `Os brinquedos que esse cliente possue`

  E como métodos:
  - `get cpf()`
  - `get phone()`
  - `get cep()`
  - `set cpf()`
  - `set phone()`
  - `set cep()`
  - `get addClient()`, adiciona o cliente.

---

- classe `Toys`, que possue como atributo:
  - `type`, recebido na instanciação
  - `rangeAge`, recebido na instanciação
  - `emitsSound`, recebido na instanciação
  - `emitsLight`, recebido na instanciação
  - `fromMount`, recebido na instanciação

  E como métodos:
  - `get cpf()`
  - `get addToys(toy)`, adiciona o brinquedo ao Cliente. Implemente a lógica de adicionar brinquedo ao cliente.

---

- clase `meetingPointing` - faz o cadastro dos pontos de encontro dos clientes
 - `location`, recebido na instanciação

  E como métodos:
  - `get addExchangePoint(client)`, adiciona local do ponto de encontro e os clientes com os brinquedos que levarão.

----

- classe `allowedChanges`
 - `rangeAge`, recebido na instanciação
 - `location`, recebido na instanciação

   E como métodos:
  - `get makeExchange(toy)`, faz a troca do brinquedo entre os clientes
  - `get canExchange(toy)`, qual brinquedo pode ser trocado

___

Com isso, temos as seguintes regras:
- Crie as classes
- Implemente a criação de brinquedo para cada cliente
- Crie ponto de encontro
- Faça a troca entre dois clientes com dois tipos de brinquedos

Teste tudo o que foi criado.
export class Empresa {
    constructor(
      public name: string,
      public cnpj: string,
      public coloboradores: Colaborador[] = []
    ) {}
}

export class Colaborador {
    constructor(
      public name: string,
      public sobrenome: string
    ) {}}


const empresa1 = new Empresa('Empresa A', '123456789');
const colaborador1 = new Colaborador('João', 'Silva');
const colaborador2 = new Colaborador('Maria', 'Santos');

empresa1.coloboradores.push(colaborador1, colaborador2);

console.log(empresa1); // Output: Empresa { name: 'Empresa A', cnpj: '123456789', coloboradores: [ Colaborador { name: 'João', sobrenome: 'Silva' }, Colaborador { name: 'Maria', sobrenome: 'Santos' } ] }

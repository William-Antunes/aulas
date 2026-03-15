interface TipoNome {
  nome: string;
}
interface TipoSobrenome {
  sobrenome: string;
}
interface TipoNomeCompleto {
  nomeCompleto: () => string;
}

type Number = number | string;


  export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
      return `${this.nome} ${this.sobrenome}`;
    }
  }

const pessoa = new Pessoa ('William', 'Silva');
console.log(pessoa.nomeCompleto()); // Output: William Silva

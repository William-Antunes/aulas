// *eslint-disable

let nome : string = 'William' //string
let idade : number = 18 // number
let isStudent : boolean = true //true or false
let simbolo : symbol = Symbol('simbolo') //symbol
let big : bigint = 9007199254740991n //bigint

// Arrays

let Numbers : number[] = [1, 2, 3, 4, 5] // array de números
let Strings : string[] = ['a', 'b', 'c'] // array de strings
let Booleans : boolean[] = [true, false, true] // array de booleanos

//Objetos

// let pessoa : {nome : string, idade : number} = {nome: 'William', idade: 18}

// console.log(pessoa.nome)

// Funções

function soma(a: number , b: number) : number {
    return a + b
}

const soma2: (a: number, b: number) => number = (a, b) => a + b


// type any
function showMessage(msg: any) : any {
  return msg
}

// type void

function semRetorno(...args: string[]) : void {
  console.log(args.join(' '))
}

// type object

const obj: { chave: string; chave2: number } = {
  chave: 'valor',
  chave2: 123
}

// type array

function multiplicaargs(...args: number[]): number[] {
  return args.map(arg => arg * 2)
}

// console.log(multiplicaargs(1, 2, 3)) [2, 4, 6]

// type tuple

let tuple: [string, number] = ['William', 18]

const dadosCliente: [string, number, ...string[]] = ['William', 18, 'Rua Antonio Alves', 'Bairro Melos']

// type null e undefined

export function createPerson(firstName: string, lastName: string): {firstName: string, lastName?: string} {
  return {
    firstName,
    lastName
  }
}

export function squareOF(x: any) {
  if(typeof x === 'number')return x * x
  return null

}

// type enum

enum Color {
  Red,
  Green,
  Blue
}

enum Color {
  Yellow,
  Purple
}

// type unknown

function processValue(value: unknown) { // O tipo 'unknown' é mais seguro do que 'any' porque força a verificação de tipo antes de usar o valor
  if (typeof value === 'string') {
    console.log('É uma string:', value);
  }else if (typeof value === 'number') {
    console.log('É um número:', value);
  }
}
console.log(processValue('Olá, mundo!')) // É uma string: Olá, mundo!
console.log(processValue(42)) // É um número: 42


//type union

function formatID(id: string | number): string {
  if (typeof id === 'string') {
    return `ID: ${id.toUpperCase()}`;
  } else {
    return `ID: ${id}`;
  }
}


// tipos literais

const pessoaa = {
  nome: 'William' as const,
  idade: 18
}

function escolhaCor(cor: 'vermelho' | 'verde' | 'azul') {
}

//type alias

type Idade = number

type Pessoa = {
  nome: string,
  idade: Idade
  salario: number
  corPreferida?: CorPreferida
}

type CorRGB = 'vermelho' | 'verde' | 'azul'
type CorCMYK = 'ciano' | 'magenta' | 'amarelo' | 'preto'
type CorPreferida = CorRGB | CorCMYK

const pessoa : Pessoa = {
  idade: 18,
  nome: 'William',
  salario: 30000,
}


export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return {...pessoa, corPreferida: cor}
}

console.log(setCorPreferida(pessoa, 'vermelho')) // adiciona a cor preferida 'vermelho' ao objeto pessoa


// type intersection

type TemNome = {nome: string}
type TemIdade = {idade: number}
type TemSalario = {salario: number}

type PessoaCompleta = TemNome & TemIdade & TemSalario

// type function

type  mapStringsCallback = (str: string) => string

function mapStrings(array: string[], callbackfn: mapStringsCallback): string[]{
  return array.map(callbackfn)
}

const abc = ['a', 'b', 'c']

const abcMapped = mapStrings(abc, str => str.toUpperCase())

console.log(abcMapped) // ['A', 'B', 'C']

// structural type

type VerifyUserFn = (user: User, sentValue: User) => boolean
type User = {
  name: string,
  password: string
}

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return user.name === sentValue.name && user.password === sentValue.password
}

const bdUser = {
  name: 'William',
  password: '123456'
}
const sentUser = {
  name: 'William',
  password: '123456'
}

console.log(verifyUser(bdUser, sentUser)) // true

// type assertion

const input = document.getElementById('.myInput') as HTMLInputElement

const pessoas = [
    {id : 3 , nome : 'William'},
    {id : 2 , nome : 'Isamara'},
    {id : 1 , nome : 'Wesley'},

]
// const novasPessoas = {}
// for (const pessoa of pessoas){
//     const { id } = pessoa
//     novasPessoas[id] = [...pessoas]
// }

const novasPessoas = new Map()
for (const pessoa of pessoas){
    const { id } = pessoa
    novasPessoas.set(id, [...pessoas])
}

console.log(novasPessoas.get(2))
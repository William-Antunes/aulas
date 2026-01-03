function soma(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error ("x e y precisam ser numeros")
    }
    return x + y
}

try {
    console.log(soma(1, 3))
    console.log(soma("1", 3))
} catch(error){
    console.log("Alguma coisa vem aqui")
}



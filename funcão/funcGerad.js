function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1();
for (let valor of g1) {
    console.log(valor)
}

function* geradora2() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora3() {
    yield* geradora2()
    yield 3;
    yield 4;
    yield 5;
}
const g3 = geradora3()

for (let valor of g3) {
    console.log(valor)
}
const { helloWorld } = require('./index');

function testHelloWorld() {
    const result = helloWorld();
    if (result === "Hola, Mundo!") {
        console.log("Prueba pasada: helloWorld() devuelve 'Hola, Mundo!'");
    } else {
        console.error("Prueba fallida: helloWorld() no devuelve 'Hola, Mundo!'");
    }
}

testHelloWorld();
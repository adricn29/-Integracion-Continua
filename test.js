const suma = require('./sum');

test('suma 1 + 2 para ser igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});
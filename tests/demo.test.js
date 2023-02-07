
describe('Pruebas en Demo', () => {

    test('Debe ser verdadero', () => {
        // Si no lanza error la prueba pasa
        //Inicializacion
        const message1 = 'Hola Mundo';
        //2. Estimulo
        const message2  = message1.trim();
        //3. Asersiones observar el comportamiento ... esperado
        expect( message1 ).toBe( message2);


    });
});

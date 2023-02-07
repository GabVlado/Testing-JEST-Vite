import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Prueba en 11-async-await', () => {
    test('getImagen retornar la URL fetch', async() => {
        const url = await getImagen();
        //console.log(url)
        expect(typeof url).toBe('string');
    });

});


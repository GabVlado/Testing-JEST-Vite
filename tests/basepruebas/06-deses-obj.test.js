import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba en 06-deses', () => {
    test('Debe retornar un objeto ', () => {

        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const user = usContext(persona)
        expect(user).toEqual({
            nombreClave: persona.clave,
            anios: persona.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232,
            }

        })

    });

});


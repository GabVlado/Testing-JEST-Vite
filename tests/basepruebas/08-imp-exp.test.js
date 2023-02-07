import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID ', () => {
        const id = 1;
        const hero = getHeroeById(id)

        //console.log(hero)
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroeById debe de retornar undefined si no existe id ', () => {
        const id = 100;
        const hero = getHeroeById(id)

        //console.log(hero)
        expect(hero).toBeFalsy()
    });

    //Tarea
    test('getHeroesByOwner debe retornar un arreglo de los heroes de DC ', () => {
        const owner = 'DC'
        const heroesT = getHeroesByOwner(owner)

        expect(heroesT).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])
        expect(heroesT.length).toBe(3)
        expect(heroesT).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
        console.log(heroes)
        //console.log(heroes.length);


    });
    test('getHeroesByOwner debe retornar un arreglo de los heroes de Marvel', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)
        expect(heroes).toEqual(
            [
                { id: 2, name: 'Spiderman', owner: 'Marvel' },
                { id: 5, name: 'Wolverine', owner: 'Marvel' }
            ]
        )
        expect(heroes.length).toBe(2)
        //console.log(heroes);
    });



});


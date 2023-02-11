/** @jest-environment jsdom */
import { FirstApp } from '../src/FirstApp';
import { render, screen } from '@testing-library/react'


describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola, Soy Goku'
    const subTitle = "Soy un subtitulo"

    test('Debe de hacer match con el snapshoot', () => {

        const { container } = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar el mensaje "Hola, Soy Goku"', () => {

        render(<FirstApp title={title} />)
        //screen.debug();
        expect(screen.getByText(title)).toBeTruthy();

    });

    test('Debe de mostrar el titulo en un h1', () => {
        render(<FirstApp title={title} />)
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        )
        expect(screen.getAllByText(subTitle).length).toBe(2);

    });



});


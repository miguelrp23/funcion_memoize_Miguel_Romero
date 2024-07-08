import { memoize } from './memoize';

describe('función memoize', () => {
    it('debería cachear los resultados para los mismos argumentos', () => {
        const mockFn = jest.fn((x: number) => x * 2);
        const memoizedFn = memoize(mockFn);

        // Primera llamada
        expect(memoizedFn(3)).toBe(6);
        expect(mockFn).toBeCalledTimes(1); // Llamada al mockFn

        // Segunda llamada con el mismo argumento
        expect(memoizedFn(3)).toBe(6);
        expect(mockFn).toBeCalledTimes(1); // No se llama al mockFn nuevamente (se usa el cache)
    });

    it('debería funcionar correctamente con argumentos diferentes', () => {
        const mockFn = jest.fn((x: number, y: number) => x + y);
        const memoizedFn = memoize(mockFn);

        // Primera llamada
        expect(memoizedFn(2, 3)).toBe(5);
        expect(mockFn).toBeCalledTimes(1); // Llamada al mockFn

        // Segunda llamada con argumentos diferentes
        expect(memoizedFn(2, 4)).toBe(6);
        expect(mockFn).toBeCalledTimes(2); // Llamada al mockFn nuevamente (argumentos diferentes)
    });
});


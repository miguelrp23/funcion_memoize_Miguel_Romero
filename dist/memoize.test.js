"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = require("./memoize");
describe('función memoize', () => {
    it('debería cachear los resultados para los mismos argumentos', () => {
        const mockFn = jest.fn((x) => x * 2);
        const memoizedFn = (0, memoize_1.memoize)(mockFn);
        // Primera llamada
        expect(memoizedFn(3)).toBe(6);
        expect(mockFn).toBeCalledTimes(1); // Llamada al mockFn
        // Segunda llamada con el mismo argumento
        expect(memoizedFn(3)).toBe(6);
        expect(mockFn).toBeCalledTimes(1); // No se llama al mockFn nuevamente (se usa el cache)
    });
    it('debería funcionar correctamente con argumentos diferentes', () => {
        const mockFn = jest.fn((x, y) => x + y);
        const memoizedFn = (0, memoize_1.memoize)(mockFn);
        // Primera llamada
        expect(memoizedFn(2, 3)).toBe(5);
        expect(mockFn).toBeCalledTimes(1); // Llamada al mockFn
        // Segunda llamada con argumentos diferentes
        expect(memoizedFn(2, 4)).toBe(6);
        expect(mockFn).toBeCalledTimes(2); // Llamada al mockFn nuevamente (argumentos diferentes)
    });
});
//# sourceMappingURL=memoize.test.js.map
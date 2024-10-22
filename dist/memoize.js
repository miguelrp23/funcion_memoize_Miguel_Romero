"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = exports.fibonacci = void 0;
const memoize = (fn) => {
    const cache = {};
    const memoizedFn = (...args) => {
        const key = args.join('-');
        if (key in cache) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
    memoizedFn.cache = cache; // Exponer el caché para pruebas
    return memoizedFn;
};
exports.memoize = memoize;
const fibonacci = memoize((n) => {
    if (n <= 0) {
        throw new Error('El número debe ser mayor que cero');
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
});
exports.fibonacci = fibonacci;
//# sourceMappingURL=memoize.js.map
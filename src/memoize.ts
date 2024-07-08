// Función de memoización
const memoize = (fn: Function): Function => {
    const cache: Record<string, any> = {};
    return (...args: any[]): any => {
        const key = args.join('-');
        if (key in cache) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
};

// Función recursiva de Fibonacci con memoización
const fibonacci = memoize((n: number): number => {
    if (n <= 0) {
        throw new Error('El número debe ser mayor que cero');
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
});

export { fibonacci, memoize };


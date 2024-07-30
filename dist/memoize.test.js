"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = require("./memoize");
describe('function memoize', () => {
    test('should is a function', () => {
        expect(typeof memoize_1.memoize).toBe("function");
    });
});
describe('function fibonacci', () => {
    test('should is a function', () => {
        expect(typeof memoize_1.fibonacci).toBe("function");
    });
    test("should show the fibonacci sequence", () => {
        const fibonaccifunc = memoize_1.fibonacci;
        const n1 = 1;
        const n2 = 2;
        const result1 = fibonaccifunc(n1);
        const result2 = fibonaccifunc(n2);
        expect(result1).toBe(1);
        expect(result2).toBe(1);
    });
});
//# sourceMappingURL=memoize.test.js.map
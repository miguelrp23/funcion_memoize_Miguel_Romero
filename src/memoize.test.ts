import { memoize, fibonacci } from './memoize';



describe('function memoize', () => {
    test('should is a function', () => {
       expect(typeof memoize).toBe("function")
    });
});

describe('function fibonacci', () => {
    test('should is a function', () => {
       expect(typeof fibonacci).toBe("function")
    });
    
    test("should show the fibonacci sequence", () => {
        const fibonaccifunc = fibonacci
        const n1 = 1
        const n2 = 2

        const result1 = fibonaccifunc(n1)
        const result2 = fibonaccifunc(n2)
        
       
        expect(result1).toBe(1)
        expect(result2).toBe(1)
    })
});



"use strict";
function fibonacci(n) {
    if (n <= 0) {
        throw new Error('El número debe ser mayor que cero');
    }
    const series = [];
    let a = 0;
    let b = 1;
    series.push(a);
    if (n > 1) {
        series.push(b);
    }
    for (let i = 2; i < n; i++) {
        const next = a + b;
        series.push(next);
        a = b;
        b = next;
    }
    return series;
}
// clic en el botón "Generar Serie"
document.getElementById('generateButton').addEventListener('click', () => {
    const numberInput = document.getElementById('numberInput');
    const n = parseInt(numberInput.value, 10);
    const fibSeries = fibonacci(n);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Los primeros ${n} números de la serie de Fibonacci son: ${fibSeries.join(', ')}`;
});
//# sourceMappingURL=index.js.map
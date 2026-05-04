/**
 * Implementación del algoritmo de Kadane para encontrar subarray de suma máxima.
 * Se exporta para poder realizar pruebas unitarias con Jest.
 */
export function maxSubArray(arr) {
    if (!arr || arr.length === 0) return { subarray: [], maxSum: 0 };

    let maxActual = arr[0];
    let maxGlobal = arr[0];
    let inicio = 0, fin = 0, tempInicio = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxActual + arr[i]) {
            maxActual = arr[i];
            tempInicio = i;
        } else {
            maxActual += arr[i];
        }

        if (maxActual > maxGlobal) {
            maxGlobal = maxActual;
            inicio = tempInicio;
            fin = i;
        }
    }

    return {
        subarray: arr.slice(inicio, fin + 1),
        maxSum: maxGlobal
    };
}

function fnSubarrayMaximo() {
    let html = `
        <label for="subarrayInput">Ingresa números separados por coma:</label>
        <input type="text" id="subarrayInput" placeholder="Ej: -2,1,-3,4,-1,2,1,-5,4">
        <button id="btnSubarray26">Encontrar Subarray Máximo</button>
        <p id="resultado26"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    document.getElementById("btnSubarray26").onclick = function () {
        let texto = document.getElementById("subarrayInput").value.trim();

        if (texto === "") {
            document.getElementById("resultado26").innerHTML = "Ingresa al menos un número.";
            return;
        }

        let arr = texto.split(",").map(n => parseFloat(n.trim()));

        if (arr.some(isNaN)) {
            document.getElementById("resultado26").innerHTML = "Todos los elementos deben ser números válidos.";
            return;
        }

        // Llamada a la función exportada
        let resultado = maxSubArray(arr);

        document.getElementById("resultado26").innerHTML = `
            <strong>Subarray de suma máxima:</strong><br>
            [ ${resultado.subarray.join(", ")} ]<br><br>
            <strong>Suma máxima:</strong> ${resultado.maxSum}
        `;
    };

    return "✅";
}

export { fnSubarrayMaximo };
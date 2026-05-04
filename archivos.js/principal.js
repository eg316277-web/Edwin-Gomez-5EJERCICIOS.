import * as combine from "./combine.js";

const operacionSelect = document.getElementById("operacion");
const resultadosDiv = document.getElementById("resultados");
const ejecutar = document.getElementById("ejecutar");

function calcular() {
    try {
        const operacion = operacionSelect.value;
        let resultado;

        // Es indispensable abrir el switch aquí
        switch (operacion) {
            case "eje26":
                // Llama a la función de ejemplo26.js[cite: 1, 2]
                resultado = combine.eje26.fnSubarrayMaximo();
                break;
            case "eje27":
                // Llama a la función de ejemplo27.js[cite: 1, 3]
                resultado = combine.eje27.fnCombinarVectoresOrdenados();
                break;
            case "eje28":
                // Llama a la función de ejemplo28.js
                resultado = combine.eje28.fnCribaEratostenes();
                break;
            case "eje29":
                // Llama a la función de ejemplo29.js[cite: 1, 5]
                resultado = combine.eje29.fnMultiplicacionMatrices();
                break;
            case "eje30":
                // Llama a la función de ejemplo30.js[cite: 1, 6]
                resultado = combine.eje30.fnOrdenamientoMezcla();
                break;
            default:
                throw new Error("Operación no válida");
        }

        // Mostrar confirmación de carga
        mostrarResultado(`Cargado: ${resultado}`);
        console.log(`Estado: ${resultado}`);

    } catch (error) {
        mostrarResultado(`Error: ${error.message}`, "error");
        console.error(`Error: ${error.message}`);
    }
}

function mostrarResultado(mensaje, tipo = "success") {
    resultadosDiv.textContent = mensaje;
    resultadosDiv.className = `result-${tipo}`;
}

ejecutar.addEventListener("click", calcular);
console.log("Usa los botones para calcular");
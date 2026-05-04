import * as combine from "./combine.js";

const operacionSelect = document.getElementById("operacion");
const resultadosDiv = document.getElementById("resultados");
const ejecutar = document.getElementById("ejecutar");

function calcular() {
    try {
        const operacion = operacionSelect.value;
        let resultado;

        switch (operacion) {
            case "ejemplo26":
                resultado = combine.ejemplo26.fnSubarrayMaximo();
                break;
            case "ejemplo27":
                resultado = combine.ejemplo27.fnCombinarVectoresOrdenados();
                break;
            case "ejemplo28":
                resultado = combine.ejemplo28.fnCribaEratostenes();
                break;
            case "ejemplo29":
                resultado = combine.ejemplo29.fnMultiplicacionMatrices();
                break;
            case "ejemplo30":
                resultado = combine.ejemplo30.fnOrdenamientoMezcla();
                break;
            default:
                throw new Error("Operación no válida");
        }

        mostrarResultado(`Cargado: ${resultado}`);
    } catch (error) {
        mostrarResultado(`Error: ${error.message}`, "error");
    }
}

function mostrarResultado(mensaje, tipo = "success") {
    resultadosDiv.textContent = mensaje;
    resultadosDiv.className = `result-${tipo}`;
}

ejecutar.addEventListener("click", calcular);
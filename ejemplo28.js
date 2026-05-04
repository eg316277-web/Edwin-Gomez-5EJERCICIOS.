// 1. Lógica pura (esta es la que se exporta para el test)
export function criba(n) {
    let primos = new Array(n + 1).fill(true);
    primos[0] = primos[1] = false;

    for (let p = 2; p * p <= n; p++) {
        if (primos[p]) {
            for (let i = p * p; i <= n; i += p)
                primos[i] = false;
        }
    }

    let resultado = [];
    for (let i = 2; i <= n; i++) {
        if (primos[i]) resultado.push(i);
    }
    return resultado;
}

// 2. Función para la interfaz (esta es la que usa el panel)
function fnCribaEratostenes() {
    let html = `
        <label for="cribaInput">Límite para buscar primos:</label>
        <input type="number" id="cribaInput" placeholder="Ej: 50">
        <button id="btnCriba28">Generar Primos</button>
        <p id="resultado28"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    // Acción del botón
    document.getElementById("btnCriba28").onclick = function () {
        let limite = parseInt(document.getElementById("cribaInput").value);

        if (isNaN(limite) || limite < 2) {
            document.getElementById("resultado28").innerHTML = "Ingresa un número mayor o igual a 2.";
            return;
        }

        // Llamamos a la lógica pura
        let listaPrimos = criba(limite);
        document.getElementById("resultado28").innerHTML = 
            `<strong>Números primos hasta ${limite}:</strong><br>` + listaPrimos.join(", ");
    };

    return "✅";
}

export { fnCribaEratostenes };
const display = document.getElementById("display");

// --- Fungsi Dasar ---
function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Menggunakan Function constructor sebagai alternatif eval yang lebih aman
        display.value = new Function('return ' + display.value)();
    } catch (e) {
        display.value = "Error";
    }
}

// --- Fungsi Rumus Sains ---
function getInputs(prompts) {
    const values = prompts.map(msg => parseFloat(prompt(msg)));
    return values.every(v => !isNaN(v)) ? values : null;
}

function calcMirror() {
    const data = getInputs(["Jarak Fokus (f):", "Jarak Benda (s):"]);
    if (!data) return alert("Input tidak valid!");

    const [f, s] = data;
    if (s === f) return display.value = "s' = Tak Terhingga";

    const sPrime = (f * s) / (s - f);
    const m = Math.abs(sPrime / s);
    const sifat = sPrime > 0 ? "Nyata" : "Maya";
    
    display.value = `s'=${sPrime.toFixed(1)}, ${sifat}`;
}


function calcForce() {
    const data = getInputs(["Massa (m):", "Percepatan (a):"]);
    if (data) display.value = `F = ${data[0] * data[1]} N`;
}

// Tambahkan fungsi calcGradient dan calcMean sesuai pola di atas...
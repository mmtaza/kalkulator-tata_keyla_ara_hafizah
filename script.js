function appendValue(value) {
  const display = document.getElementById("display");
  if (display.value === "0" || display.value === "Error") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

// --- RUMUS KELAS 8 ---

function calculateGradient() {
  const y2 = parseFloat(document.getElementById("display").value);
  if (isNaN(y2)) return alert("Masukkan nilai y2 di layar!");
  const y1 = parseFloat(prompt("Masukkan nilai y1:"));
  const x2 = parseFloat(prompt("Masukkan nilai x2:"));
  const x1 = parseFloat(prompt("Masukkan nilai x1:"));
  if (!isNaN(y1) && !isNaN(x2) && !isNaN(x1)) {
    const dy = y2 - y1;
    const dx = x2 - x1;
    if (dx === 0) {
      document.getElementById("display").value = "Vertikal";
    } else {
      const m = dy / dx;
      document.getElementById("display").value = "m = " + Number(m.toFixed(2));
    }
  }
}

function calculateMean() {
  const total = parseFloat(document.getElementById("display").value);
  if (isNaN(total)) return alert("Masukkan total jumlah nilai di layar!");
  const n = parseFloat(prompt("Masukkan banyak data (n):"));
  if (!isNaN(n) && n !== 0) {
    const mean = total / n;
    document.getElementById("display").value = "Mean = " + Number(mean.toFixed(2));
  }
}

function calculateNewtonForce() {
  const m = parseFloat(document.getElementById("display").value);
  if (isNaN(m)) return alert("Masukkan nilai Massa (kg) di layar!");
  const a = parseFloat(prompt("Masukkan nilai Percepatan (m/s²):"));
  if (!isNaN(a)) {
    const f = m * a;
    document.getElementById("display").value = f.toFixed(1) + " Newton";
  }
}

function calculatePressure() {
  const f = parseFloat(document.getElementById("display").value);
  if (isNaN(f)) return alert("Masukkan nilai Gaya (N) di layar!");
  const a = parseFloat(prompt("Masukkan Luas Penampang (m²):"));
  if (!isNaN(a) && a !== 0) {
    const p = f / a;
    document.getElementById("display").value = p.toFixed(1) + " Pa";
  }
}
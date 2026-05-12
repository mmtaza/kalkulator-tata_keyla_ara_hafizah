// --- FUNGSI DASAR KALKULATOR ---
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

// --- RUMUS MATEMATIKA KELAS 8 ---



// 2. Pola Bilangan (Suku ke-n Aritmetika)
function calculateArithmeticSequence() {
  const a = parseFloat(document.getElementById("display").value);
  if (isNaN(a)) return alert("Masukkan Suku Pertama (a) di layar!");
  const b = parseFloat(prompt("Masukkan Beda (b):"));
  const n = parseFloat(prompt("Cari Suku keberapa (n)?"));
  if (!isNaN(b) && !isNaN(n)) {
    const un = a + (n - 1) * b;
    document.getElementById("display").value = "U" + n + " = " + un;
  }
}

// 3. Bangun Ruang (Luas Permukaan Kubus)
function calculateCubeSurfaceArea() {
  const s = parseFloat(document.getElementById("display").value);
  if (isNaN(s)) return alert("Masukkan panjang rusuk (s) di layar!");
  const luas = 6 * Math.pow(s, 2);
  document.getElementById("display").value = "L.Permukaan = " + luas + " cm²";
}


// --- RUMUS IPA FISIKA KELAS 8 ---

// 5. Usaha (W = F * s)
function calculateWork() {
  const f = parseFloat(document.getElementById("display").value);
  if (isNaN(f)) return alert("Masukkan nilai Gaya (Newton) di layar!");
  const s = parseFloat(prompt("Masukkan nilai Perpindahan (meter):"));
  if (!isNaN(s)) {
    const w = f * s;
    document.getElementById("display").value = w.toFixed(1) + " Joule";
  }
}



// 7. Getaran (Frekuensi: f = n / t)
function calculateFrequency() {
  const n = parseFloat(document.getElementById("display").value);
  if (isNaN(n)) return alert("Masukkan Jumlah Getaran (n) di layar!");
  const t = parseFloat(prompt("Masukkan Waktu (detik):"));
  if (!isNaN(t) && t !== 0) {
    const f = n / t;
    document.getElementById("display").value = f.toFixed(2) + " Hz";
  }
}


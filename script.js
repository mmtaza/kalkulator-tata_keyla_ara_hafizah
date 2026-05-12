// Fungsi input dasar
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

// --- FUNGSI RUMUS SMP ---

// Pythagoras: Masukkan 'a', tekan tombol, masukkan 'b'
function calculatePythagoras() {
  // 1. Ambil angka pertama dari layar sebagai sisi 'a'
  const a = parseFloat(document.getElementById("display").value);

  if (isNaN(a)) {
    return alert("Masukkan angka sisi pertama (a) di layar!");
  }

  // 2. Minta angka kedua sebagai sisi 'b'
  const bInput = prompt("Masukkan nilai sisi tegak kedua (b):");
  const b = parseFloat(bInput);

  if (b) {
    // 3. Proses: (a kuadrat) + (b kuadrat)
    const kuadratC = Math.pow(a, 2) + Math.pow(b, 2);

    // 4. PROSES AKAR: di sinilah fungsi akarnya bekerja
    const c = Math.sqrt(kuadratC);

    // 5. Tampilkan hasil akhir yang sudah diakar
    // Kita tampilkan prosesnya sedikit di console biar kamu bisa cek
    console.log(`Akar dari ${kuadratC} adalah ${c}`);

    document.getElementById("display").value = Number(c.toFixed(2));
  }
}

// Massa Jenis: Masukkan massa (m), tekan tombol, masukkan volume (v)
function calculateDensity() {
  const m = parseFloat(document.getElementById("display").value);
  if (isNaN(m)) return alert("Masukkan nilai Massa (m) di layar!");

  const v = prompt("Masukkan nilai Volume (v):");
  if (v) {
    const result = m / parseFloat(v);
    document.getElementById("display").value = result.toFixed(2) + " kg/m³";
  }
}

// Tekanan: Masukkan Gaya (F), tekan tombol, masukkan Luas (A)
// Rumus Energi Potensial (Ep = m * g * h)
function calculateEnergy() {
  // 1. Ambil nilai Massa (m) dari layar
  const m = parseFloat(document.getElementById("display").value);

  if (isNaN(m)) {
    return alert("Masukkan nilai Massa (m) dalam kg di layar!");
  }

  // 2. Kita tetapkan gravitasi bumi (g) = 10 m/s^2 agar lebih praktis
  const g = 10;

  // 3. Minta input Ketinggian (h) melalui prompt
  const hInput = prompt("Masukkan Ketinggian (h) dalam meter:");
  const h = parseFloat(hInput);

  if (!isNaN(h)) {
    // 4. Hitung Ep = m * g * h
    const ep = m * g * h;

    // 5. Tampilkan hasil dengan satuan Joule (J)
    document.getElementById("display").value = ep.toFixed(1) + " Joule";
  }
}

// Luas Lingkaran: Masukkan jari-jari (r), tekan tombol
function calculateCircleArea() {
  const r = parseFloat(document.getElementById("display").value);

  if (isNaN(r)) {
    return alert("Masukkan angka jari-jari (r) dulu!");
  }

  // Pakai 3.14 biar hasilnya mirip hitungan manual di buku sekolah
  const phi = 3.14;
  const hasil = phi * r * r;

  // Menampilkan hasil dan membatasi biar gak kepanjangan (maks 2 desimal)
  // Contoh: 10 -> 314 | 7 -> 153.86
  document.getElementById("display").value = Number(hasil.toFixed(2));
}

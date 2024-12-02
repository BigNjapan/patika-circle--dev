const radius = process.argv[2];

// Parametre kontrolü
if (radius === undefined) {
	console.log("Lütfen yarıçap değerini girin!");
	console.log("Örnek: node circle.js 5");
	process.exit(1);
}

// Sayı kontrolü
if (isNaN(radius)) {
	console.log("Lütfen geçerli bir sayı girin!");
	process.exit(1);
}

// Alan hesaplama
const area = Math.PI * Math.pow(Number(radius), 2);

// Sonucu 2 ondalık basamakla yazdırma
console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area.toFixed(2)}`);

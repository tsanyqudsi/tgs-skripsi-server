export const hitungMargin = (margin: number, jual: boolean, harga: string) => {
	const totalMargin = (parseFloat(harga) * margin) / 100;
	const totalHarga = jual
		? parseFloat(harga) + totalMargin
		: parseFloat(harga) - totalMargin;
	return {totalMargin: totalMargin.toString(16), totalHarga: totalHarga.toString(16)};
};

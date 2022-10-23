import {load} from 'cheerio';
import axios from 'axios';
// Import {hitungMargin} from './hitungMargin';

export type DataNilaiProps = {
	mataUang: string;
	nilaiJualAwal: number;
	nilaiBeliAwal: number;
};

export const ambilKurs = async (url: string, _marginPersen: number) => {
	try {
		const dataNilai: DataNilaiProps[] = [];

		const {data} = await axios.get(url);
		const $ = load(data);
    console.log($)
		const nilai = $('table table table table table table table tr');
		nilai.each(function () {
			const mataUang = $(this).find('td.kurs:nth-child(1)').text();
			const dataBeli = $(this)
				.find('td.kurs:nth-child(2)')
				.text()
				.replace('.', '')
				.replace(',', '.');
			const dataJual = $(this)
				.find('td.kurs:nth-child(3)')
				.text()
				.replace('.', '')
				.replace(',', '.');

			// Const jual = hitungMargin(marginPersen, true, dataJual);
			// const beli = hitungMargin(marginPersen, false, dataBeli);

			dataNilai.push({
				mataUang,
				nilaiJualAwal: parseFloat(dataJual),
				nilaiBeliAwal: parseFloat(dataBeli),
				// Nilai_jual_akhir: jual.totalHarga,
				// nilai_beli_akhir: beli.totalHarga,
				// margin_beli: beli.totalMargin,
				// margin_jual: jual.totalMargin,
			});
		});

		return dataNilai;
	} catch (err: unknown) {
    console.error(err);
    return [];
	}
};

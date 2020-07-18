import Cart from './index';

describe('test cart handler', () => {
  it('should show cart same as input', () => {
    const keranjang = new Cart();
    keranjang.tambahProduk("Pisang Hijau", 2);
    keranjang.tambahProduk("Semangka Kuning", 3);
    keranjang.tambahProduk("Apel Merah", 1);
    keranjang.tambahProduk("Apel Merah", 4);
    keranjang.tambahProduk("Apel Merah", 2);
    keranjang.hapusProduk("Semangka Kuning");
    keranjang.hapusProduk("Semangka Merah");

    const res = keranjang.tampilkanCart();

    expect(res).toEqual(`Pisang Hijau (2) \nApel Merah (7) \n`)
  })
})
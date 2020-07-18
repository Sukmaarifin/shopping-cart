class Cart {

  constructor() {
    this.item = {}
  }

  tampilkanCart = () => {
    const message = Object.keys(this.item).reduce((acc, itemKey) => {
        const qty = `(${this.item[itemKey]})`;
        acc  += `${itemKey} ${qty} \n` ;
        return acc
    }, '');
    return message;
  }

  tambahProduk = (kodeProduk, kuantitas) => {
    const oldQuantity = this.item[kodeProduk] || 0
    if (oldQuantity) {
      this.item[kodeProduk] = oldQuantity + kuantitas
    } else {
      this.item[kodeProduk] = kuantitas
    }
  }

  hapusProduk = (kodeProduk) => {
    delete this.item[kodeProduk]
  }
}

module.exports = Cart;
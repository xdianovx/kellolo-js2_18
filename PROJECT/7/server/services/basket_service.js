module.exports = {
    // obj === item
    add(basket, item) {
        basket.contents.push(item);
        return basket
    },
    change(basket, id, amount) {
        let find = this._search(basket.contents, id);
        find.quantity += amount; //amount: +1 || -1
        return basket
    },
    delete(basket, id) {
        let find = this._search(basket.contents, id);
        basket.contents.splice(basket.contents.indexOf(find), 1);
        return basket
    },
    _search(array, id) {
        return array.find(item => item.id_product == id);
    }
}
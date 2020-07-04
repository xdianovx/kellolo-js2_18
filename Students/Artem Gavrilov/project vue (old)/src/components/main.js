let app = new Vue({
    el: '#app',
    data: {
        itemsInCatalog: [],
        items: [],
        basketItems: [],
        url: 'https://raw.githubusercontent.com/gavrilovem/catalogData/master/catalogData.json',
        basket: false
    },
    methods: {
        add(item) {
            let find = this.basketItems.find(el => el.id_product == item.id_product)
            if (find) {
                find.quantity++;
            } else {
                let newItem = {
                    img: item.imgS,
                    product_name: item.product_name,
                    price: item.price,
                    id_product: item.id_product,
                    quantity: 1
                }
                this.basketItems.push(newItem);
            }
        },
        remove(item) {
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                this.basketItems.splice(this.basketItems.indexOf(item), 1)
            }
        },
        filterItems() {
            let inpValue = document.querySelector('#search-field').value;
            let itemsFound = this.items.filter((el) =>
              el.product_name.toLowerCase().indexOf(inpValue.toLowerCase()) > -1
            );
            if (itemsFound) {
                this.itemsInCatalog = itemsFound;
            } else {
                this.itemsInCatalog = this.items;
            }
        }
    },
    mounted() {
        return fetch(this.url).then(data => data.json())
            .then(data => {
                this.itemsInCatalog = data;
                this.items = data;
            })
    }
})
// export default function(){ 
//     let app = new Vue({
//         el: '#app', 
//         data: {
//             basketItems: [], // массив для корзины
//             catalogItems: [], // массив для каталога
//             catalogUrl: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
//             showBasket: false,
//             basketUrl: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json'
//         },
//         methods: {
//             _get(url) {
//                 return fetch(url).then(d => d.json());
//             },
    
//             add(item) {
//                 let find = this.basketItems.find(el => el.id_product == item.id_product); // либо ссылка на объект с товаром, либо false если ничего не найдет
//                 if (find) {
//                     find.quantity++;
//                 } else {
//                     let itemNew = {
//                         id_product: item.id_product,
//                         product_name: item.product_name,
//                         price: +item.price,
//                         quantity: 1
//                     }
//                     this.basketItems.push(itemNew);
//                 }
//             },
    
//             remove(item) {
//                 if (item.quantity != 1) {
//                     item.quantity--;
//                 } else {
//                     this.basketItems.splice(this.basketItems.indexOf(item), 1);
//                 }
//             }
//         },
//         async mounted() {
//             try {
//                 this.catalogItems = await this._get(this.catalogUrl);
//                 this.basketItems = await this._get(this.basketUrl);
//                 this.basketItems = this.basketItems.contents;
//             }
//             finally {
//                 console.log('data loaded');
//             }
//         }
//     })
// }
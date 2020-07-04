
// export default function () {
// let app = new VTTCue({
//     el: '#app',
//     data: {
//         catalogItems: [],
//         basketItems: [],
//         //showBasket: false,
//         catalogUrl: 'https://raw.githubusercontent.com/anton-maslinsky/test/master/catalogData.json',
//         basketUrl: 'https://raw.githubusercontent.com/anton-maslinsky/test/master/getBasket.json'

//     },
//     methods: {
//         get(url) {
//             return fetch(url).then(data => data.json());
//         }
//     },
//     async mounted() {
//         try {
//             this.catalogItems = await this.get(this.catalogUrl);
//             this.catalogItems = await this.get(this.basketUrl);
//         }
//         finally {
//             console.log('data loaded succesfully');
//         }
//     }
// })
// }



// class List {
//     constructor(url, container, basket) {
//         this.url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses' + url;
//         this.container = container;
//         this.items = [];
//         this._init(basket);
//     }

//     _init(basket = false) {
//         this._get(this.url)
//             .then(data => {
//                 this.items = !basket ? data : data.contents;
//                 // this.items = data.length ? data : data.contents;
//                 //catalog => [...], basket => {... contents: [...]}
//                 this._render();
//                 this._handleEvents();
//                 console.log(this.constructor.name, this)
//         })
//     }

//     _get(url) {
//         return fetch(url).then(data => data.json());
//     }

//     _render() {
//         let htmlStr = '';
//         this.items.forEach (item => {
//             htmlStr += new connect[this.constructor.name](item).render();
//         })
//         document.querySelector(this.container).innerHTML = htmlStr;      
//     }

//     _handleEvents() { 
//         return ''
//     }
// }

// class Item {
//     constructor(item) {
//         this.item = item;
//     }

//     render() {
//         return `<div class="catalog-item">
//                     <img src="http://placehold.it/300x200" alt="${this.item.product_name}">
//                     <div class="desc">
//                         <h3>${this.item.product_name}</h3>
//                         <p>${this.item.price} $</p>
//                         <button 
//                             class="buy-btn" 
//                             name="buy"
//                             data-name="${this.item.product_name}"
//                             data-price="${this.item.price}"
//                             data-id="${this.item.id_product}"
//                         >Buy</button>
//                     </div>
//                 </div>`
//     }
// }

// class Catalog extends List {
//     constructor(basket, url = '/catalogData.json', container = '.catalog-items') {
//         super(url, container);
//         this.basket = basket;
//     }
//     _handleEvents() {
//         document.querySelector(this.container).addEventListener('click', evt => {
//             if (evt.target.name == 'buy') {
//                 this.basket.add(evt.target.dataset);
//             }
//         });
//     }
// }

// class Basket extends List {
//     constructor(url = '/getBasket.json', container = '.basket-items', basket = true) {
//         super(url, container, basket);
//     }
//     _handleEvents() {
//         document.querySelector(this.container).addEventListener('click', evt => {
//             if (evt.target.name == 'remove') {
//                 this.remove(evt.target.dataset.id);
//             }
//         });

//         document.querySelector('.btn-basket').addEventListener('click', evt => {
//             document.querySelector('.basket-block').classList.toggle('invisible');
//         });
//     }

//     add(item) {
//         let find = this.items.find(el => el.id_product == item.id);
//         if (find) {
//             find.quantity++;
//             this._render();
//         } else {
//             let itemNew = { id_product: item.id, product_name: item.name, price: +item.price, quantity: 1 };
//             this.items.push(itemNew);
//             this._render();
//         }
//     }

//     remove(itemId) {
//         let find = this.items.find(el => el.id_product == itemId);
//         console.log('попытка удалить ' + itemId)
//         console.log(find)

//         if (find.quantity == 1) {
//             this.items.splice(this.items.indexOf(find), 1);
//         } else {
//             find.quantity--;
//         }
//         this._render();
//     }
// }

// class CatalogItem extends Item {}

// class BasketItem extends Item {
//     constructor(item) {
//         super(item)
//     }

//     render() {
//         return `<div class="basket-item">
//                     <img src="http://placehold.it/100x80" alt="${this.item.product_name}">
//                     <div class="product-desc">
//                         <p class="product-title">${this.item.product_name}</p>
//                         <p class="product-amount">${this.item.quantity}</p>
//                         <p class="product-single-price">${this.item.price}</p>
//                     </div>
//                     <div class="right-block">
//                         <p class="product-price">${this.item.price * this.item.quantity}</p>
//                         <button class="del-btn" name="remove" data-id="${this.item.id_product}">&times;</button>
//                     </div>
//                 </div>`
//     }
// }


// let connect = {
//     'Catalog': CatalogItem,
//     'Basket': BasketItem
// }

// export default () => {
//     let basket = new Basket();
//     let catalog = new Catalog(basket);
// }


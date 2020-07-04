<template>
	<div class="basket-block" v-show="$parent.showBasket"> <!--отображает содержимое дива при истинном значении свойства баскет-->
        <div class="basket-items">
            <!--Basket elems динамический тип, в кавычках можно писать любое выражение, условие, выисление и тд-->
			<item 
                :itemType="'basket'"
                v-for="item of items" 
                :item="item" 
                :key="item.id_product"
            />
        </div>
    </div>
</template>

<script>
	import item from './Item.vue'
	export default {
		components: {item},
		data() {
			return {
				items: [],
				url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json'
			}
		},
		methods: {
			add(item) {
                let find = this.items.find(el => el.id_product == item.id_product); // либо ссылка на объект с товаром, либо false если ничего не найдет
                if (find) {
                    find.quantity++;
                } else {
                    let itemNew = {
                        id_product: item.id_product,
                        product_name: item.product_name,
                        price: +item.price,
                        quantity: 1
                    }
                    this.items.push(itemNew);
                }
			},
			remove(item) {
                if (item.quantity != 1) {
                    item.quantity--;
                } else {
                    this.items.splice(this.items.indexOf(item), 1);
                }
            },
        },
        mounted() {
			this.$parent._get(this.url).then(d => {
				this.items = d.contents;
			}) //берем из родительского shop.vue метод _get() и записываем данные в items[]
		}
	}
</script>

<style>

</style>
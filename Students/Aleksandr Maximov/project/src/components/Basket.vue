<template>
    <div class="basket-block">
        <div class="basket-items scrollY">
            <item v-for="item of items" :key="item.id_product" itemType="basket" :item="item"/>            
        </div>
    </div>
</template>

<script>
import item from './Item.vue'
export default {
    components: { item },
    data() {
        return {
            items: [],
            url: '/api/basket',
            //url: 'https://raw.githubusercontent.com/gavrilovem/catalogData/master/getBasket.json'
        }
    },
    methods: {
        add(item) {
            let find = this.items.find(el => el.id_product == item.id_product);
            if (!find) {
                console.log('Создаю новый товар ' + item.product_name)
                this.items.push(Object.assign({}, item, {quantity: 1}));
            } else {
                console.log('Увеличиваем ' + item.product_name)
                find.quantity++;
            }
        },
        remove(item) {
            let find = this.items.find(el => el.id_product == item.id_product);
            if (find.quantity > 1) {
                find.quantity--;
            } else {
                this.items.splice(this.items.indexOf(find), 1);
            }
        },
    },
    mounted() {
        this.$parent.get(this.url).then(d => this.items = d.contents)
    }
}
</script>

<style>

</style>
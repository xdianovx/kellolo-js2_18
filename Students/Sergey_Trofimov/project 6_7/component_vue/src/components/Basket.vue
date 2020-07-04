<template>
    <!-- <div class="basket-block"> --><div>
        <div class="basket-items">
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
            url: 'https://raw.githubusercontent.com/Sergey-TR/testrepo/master/getBasket.json'

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

            let totalSumm = 0;
            let mutch = 0;
       
            for (let key in this.items) {
            totalSumm += this.items[key].price * this.items[key].quantity;
            mutch += this.items[key].quantity;
       }
   
       document.querySelector('.span_total').textContent = totalSumm;
       document.querySelector('.cart__total_span').textContent = mutch;

        },
        remove(item) {
            let find = this.items.find(el => el.id_product == item.id_product);
            if (find.quantity > 1) {
                find.quantity--;
            } else {
                this.items.splice(this.items.indexOf(find), 1);
            }

            let totalSumm = +document.querySelector('.span_total').textContent;
            let mutch = +document.querySelector('.cart__total_span').textContent;
            totalSumm -= find.price;
            mutch --;
   
       document.querySelector('.span_total').textContent = totalSumm;
       document.querySelector('.cart__total_span').textContent = mutch;
        },
    },
    mounted() {
        this.$parent.get(this.url).then(d => this.items = d.contents)
        
    }
}
</script>

<style>

</style>
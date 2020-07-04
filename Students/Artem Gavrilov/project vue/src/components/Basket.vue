<template>
    <div class="basket-block">
        <div class="basket-items" >
            <!--Basket elems-->
            <item 
                itemType="basket"
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
    components: { item },
    data() {
        return {
            url: 'https://raw.githubusercontent.com/gavrilovem/catalogData/master/getBasket.json',
            items: []
        }
    },
    methods: {
        add(item) {
            let find = this.items.find( el => el.id_product == item.id_product);
            if (find) {
                find.quantity++
            } else {
                this.items.push(Object.assign({}, item, { quantity: 1 }))
            }
        },
        remove(item) {
            let find = this.items.find( el => el.id_product == item.id_product);
            if (find.quantity > 1) {
                find.quantity--
            } else {
                this.items.splice(this.items.indexOf(find), 1)
            }
        }
    },
    mounted() {
        this.$parent.get(this.url)
            .then( d => this.items = d.contents )
    }
}
</script>

<style>

</style>
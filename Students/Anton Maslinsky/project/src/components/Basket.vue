<template>
    <div class="basket-block">
        <div class="basket-items">
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
import item from './Item.vue';

export default {
    components: {
        item
    },

    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/gavrilovem/catalogData/master/getBasket.json'
        }
    },

    mounted() {
        this.$parent.get(this.url).then(data => {
            this.items = data.contents;
        })
    },

    methods: {
        add(item) {
            let find = this.items.find(el => el.id_product == item.id);
            if (find) {
                find.quantity++;
                //this._render();
            } else {
                let itemNew = {
                    id_product: item.id,
                    product_name: item.name,
                    price: +item.price,
                    quantity: 1
                };
                this.items.push(itemNew);
                //this._render();
            }
        },

        remove(itemId) {
            let find = this.items.find(el => el.id_product == itemId);
            console.log(find)

            if (find.quantity == 1) {
                this.items.splice(this.items.indexOf(find), 1);
            } else {
                find.quantity--;
            }
        //     this._render();
        }
    }
}
</script>

<style>
</style>
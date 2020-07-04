<template>
    <div :class="compClass">
        <img :src="compImg" :alt="item.product_name">
        <template v-if="itemType == 'catalog'">
            <div class="desc">
                <h3>{{item.product_name}}</h3>
                <p>{{item.price}} $</p>
                <button 
                    class="buy-btn" 
                    name="buy"
                    @click="add(item)"
                >Buy</button>
            </div>
        </template>
        <template v-else-if="itemType == 'basket'">
            <div class="product-desc">
                <p class="product-title">{{item.product_name}}</p>
                <p class="product-quantity">{{item.quantity}}</p>
                <p class="product-single-price">{{item.price}}</p>
            </div>
            <div class="right-block">
                <p class="product-price">{{item.price * item.quantity}}</p>
                <button class="del-btn" name="remove" @click="remove(item)" data-id="item.id_product">&times;</button>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        itemType: String,
        item: Object
    },
    methods: {
        add(item) {
            this.$parent.$parent.$refs.basket.add(item)
        },
        remove(item) {
            this.$parent.$parent.$refs.basket.remove(item)
        }
    },
    computed: {
        compClass() {
            return this.itemType == 'catalog' ?  'catalog-item' : 'basket-item';
        },
        compImg() {
            return this.itemType == 'catalog' ? this.item.img : this.item.imgS
        }
    }
}
</script>

<style>

</style>
<template>
  <div>
      <header>
        <div class="logo">GeekShop</div>
        <div class="basket">
            <form action="#" class="search-form">
                <input type="text" class="search-field">
                <button class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </form>
            <button class="btn-basket" @click="showBasket = !showBasket">Корзина</button>
            <basket ref="bskt" />
        </div>
    </header>
    <main>
        <catalog />
    </main> 
  </div>
</template>

<script>
import Catalog from '../components/Catalog.vue'
import Basket from '../components/Basket.vue'
import Item from '../components/Item.vue'
import Search from '../components/Search.vue'

export default {
    components: {
        'catalog': Catalog,
        'basket': Basket,
        //'item': Item,
        'search': Search
    },

    data() {
        return {
            showBasket: false
        }
    },
    
    methods: {
        get(url) {
            return fetch(url).then(data => data.json());
        },
        // add() {
        //     console.log('added');
        // }
    },

    mounted() {
        this.$refs.bskt
    }
}
</script>

<style>

</style>


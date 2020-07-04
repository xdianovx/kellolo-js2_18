<template>
    <div>
        <header>
            <div class="logo">GeekShop</div>
            <div class="basket">
                <form action="#" class="search-form">
                    <input type="text" class="search-field" id="search-field">
                    <button class="btn-search"> <!-- @click="filterItems()" -->
                        <i class="fas fa-search"></i>
                    </button>
                </form>
                <button class="btn-basket" @click="showBasket = !showBasket">Корзина</button>
                <basket v-show="showBasket" ref="basket" />
            </div>
        </header>
        <main>
            <catalog />
        </main>
    </div>
</template>

<script>
import Catalog from '../components/Catalog.vue';
import Basket from '../components/Basket.vue';

export default {
    data() {
        return {
            showBasket: false
        }
    },
    components: {
        "basket": Basket,
        "catalog": Catalog
    },
    methods: {
        get(url) {
            return fetch(url).then(data => data.json());
        }
    }
}
</script>

<style>

</style>
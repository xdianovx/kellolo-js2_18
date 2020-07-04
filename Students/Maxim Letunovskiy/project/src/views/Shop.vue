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
            <button class="btn-basket">Корзина</button>
            <basket ref="basket" />
            
        </div>
    </header>
    <main>
        <catalog @add="addItem"/>
    </main>
  </div>
</template>

<script>
import Catalog from '../components/Catalog.vue'
import Basket from '../components/Basket.vue'
// import catalogItem from '../components/Item'

export default {
    components: {
        //блок для регистрации дочерних компонентов
        // Catalog, Basket, catalogItem
        'catalog': Catalog,
        'basket': Basket
    },
    data() {
        //дата из объекта превратилась в функцию, возвращающую объект
        return {

        }
    },
    props: {
        //пробрасываемые извне данные, которые не изменяются внутри компонента
    },
    methods: {
        addItem(item) {
            this.$refs.basket.add(item);
        },
        get(url) {
            return fetch(url).then(data => data.json());
        }
    },
    mounted() {
        // this.$children[0] // >>> [{1}, {2}] >>> [{3}, {1}, {2}]
        // this.$refs.kolya //>>> comp Basket { kolya: {/Basket.vue/} }
    }
}
</script>

<style>

</style>
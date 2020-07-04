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
                <button class="btn-basket" @click="showBasket = !showBasket">Корзина</button> <!--при клике на кноку, свойство баскет поменяется на противоположное-->
                <basket ref="basketComp" />
            </div>
        </header>
        <main>
			<catalog />
        </main>
    </div>
</template>

<script>
import Catalog from '../src/components/Catalog.vue'
import Basket from '../src/components/Basket.vue'

export default {
	
	components: {
		// блок для регистрации дочерних компонентов
		'catalog': Catalog,
		'basket': Basket
	},
	data() {
		return {
			showBasket: false
		}
	},
	props: {
		// пробрасывааемые внутри данные, которые не изменяются внутри компонента
	},
	methods: {
		_get(url) {
            return fetch(url).then(d => d.json());
		},
	},
	mounted() {
		// this.$refs.basketComp // обращение к дочернему компоненту Basket
	}
}
</script>

<style>

</style>
<template>
	<div>
		<template v-if="itemType == 'catalog'">
			<div class="catalog-item">
                <img src="http://placehold.it/300x200" alt="item.product_name">
                <div class="desc">
                    <h3>{{item.product_name}}</h3>
                    <p>{{item.price}} $</p>
                    <button 
                        class="buy-btn" 
                        name="buy"
                        @click="$parent.$parent.$refs.basketComp.add(item)"
                    >Buy</button>
                </div>
            </div>
		</template>

		<template v-else-if="itemType == 'basket'">
			<div class="basket-item">
				<img src="http://placehold.it/100x80" alt="item.product_name"> 
				<div class="basket-items">
					<div class="product-desc">
						<p class="product-title">{{item.product_name}}</p>
						<p class="product-amount">{{item.quantity}}</p>
						<p class="product-single-price">{{item.price}}</p>
					</div>
					<div class="right-block">
						<p class="product-price">{{item.price * item.quantity}}</p>
						<button class="del-btn" name="remove" @click="$parent.$parent.refs.basketComp.remove(item)">&times;</button>
					</div>
				</div>
			</div>
		</template>
	</div>	
</template>

<script>
export default {
	props: {
		itemType: {
			type: String
		},
		item: {
			type: Object
		}
	}
}
//this.$parent.$parent.refs.basketComp.add(item) - обращение к методу от "дяди"
</script>

<style>

</style>
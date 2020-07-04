<template>
	<div class="catalog-items">
        <!--Catalog elems статичный тип-->
        <item 
			itemType="catalog" 
			v-for="item of items" 
			:item="item" 
			:key="item.id_product"
		/>    
    </div>
</template>

<script>
	import item from './Item.vue';
	export default {
		components: {item},
		data() {
			return {
				items: [],
				url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'
			}
		},
		mounted() {
			this.$parent._get(this.url).then(d => {
				this.items = d;
			}) //берем из родительского shop.vue метод _get() и записываем данные в items[]
		}
	}
</script>

<style>

</style>
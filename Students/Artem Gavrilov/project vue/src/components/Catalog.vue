<template>
    <div class="catalog-items">
        <!--Catalog elems-->
        <item 
            itemType="catalog"
            v-for="item of items"
            :item="item"
            :key="item.id_product"
        />
    </div>
    
</template>

<script>
import item from './Item.vue'
export default {
    components: { item },
    data() {
        return {
            url: 'https://raw.githubusercontent.com/gavrilovem/catalogData/master/catalogData.json',
            items: []
        }
    },
    mounted() {
        this.$parent.get(this.url)
            .then( d => this.items = d )
    }
}
</script>

<style>

</style>
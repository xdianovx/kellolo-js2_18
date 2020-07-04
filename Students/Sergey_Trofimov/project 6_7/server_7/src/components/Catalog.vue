<template>
    <div class="catalog-items">
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
    components: { item },
    data() {
        return {
            items: [],
            url: '/api/catalog'
            //url: 'https://raw.githubusercontent.com/Sergey-TR/testrepo/master/dataCatalog.json'
        }
    },
    mounted() {
        this.$parent.get(this.url).then(d => {
            this.items = d;
        })
    }
}
</script>

<style>

</style>
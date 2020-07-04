<template>
  <div :class="computedClass">
    <template v-if="itemType == 'catalog'">
      
      <div class="product">
        <a href="#">
          <img class="product__img" src="img/Layer_2.png" alt="photo" />
        </a>
        <div class="product__content">
          <a href="#" class="product__name">{{item.product_name}}</a>
          <p class="product__price">{{item.price}} $</p>
        </div>

        <button class="product__add" name="buy" @click="add(item)">Buy</button>
      </div>
      
    </template>

    <template v-else-if="itemType == 'basket'">
      <div class="product-desc">
        <p class="product-title">{{ item.product_name }}</p>
        <p class="product-quantity">{{ item.quantity }}</p>
        <p class="product-single-price">{{ item.price }}</p>
      </div>
      <div class="right-block">
        <button name="del-btn" class="del-btn" @click="$parent.remove(item)">&times;</button>
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
  },
  methods: {
    add(item) {
      //эмитирование пользовательского события
      this.$parent.$emit("add", item);
    }
  },
  computed: {
    computedClass() {
      return this.itemType == "basket" ? "basket-item" : "catalog-item";
    },
    computedSize() {
      return `http://placehold.it/${
        this.itemType == "basket" ? "100x80" : "300x200"
      }`;
    }
  }
};

//this.$parent.$parent.refs.kolya.add(item) //не комильфо, но...
//this.$parent.$emit('add', item); - чуть лучше
//Vuex - top
</script>

<style>
</style>
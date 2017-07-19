<template>
  <div>
    <div class="content-grid mdc-grid-list">
      <h2>Products</h2>
      <ul class="mdc-grid-list__tiles">
        <li v-for="product in this.products" class="mdc-grid-tile">
          <ProductCard :product="product"></ProductCard>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
    .mdc-grid-tile {
        --mdc-grid-list-tile-width: 250px;
        min-width: 15rem;
    }
    .mdc-button {
      font-size: 5px;
    }
    .mdc-grid-list__tiles {
      justify-content: center;
    }
  @media screen and (min-width: 550px) {
    .mdc-grid-tile {
        --mdc-grid-list-tile-width: 400px;
        width: 24%;
    }
    .mdc-grid-list__tiles {
      padding: 2rem;
      justify-content: flex-start;
    }
  }
</style>
<script>
import data from '../dummy-data'
import ProductCard from './ProductCard.vue'
export default {
  components: {
    'ProductCard': ProductCard
  },
  data () {
    return {
      'products': data.products
    }
  }
}
</script>

<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="product">
        <img :src="this.products[$route.params.id].img" />
      </div>
      <div class="description">
        <span>{{ this.products[$route.params.id].description }}</span>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="name">
        <span>{{ this.products[$route.params.id].name }}</span>
      </div>
      <div class="actions">
        <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/post">
          ANSWER
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import data from '../dummy-data'
export default {
  data () {
    return {
      'products': data.products
    }
  }
}
</script>
<style scoped>
  .product > img {
    color: #fff;
    width:100%;
  }
  .description {
    text-align: right;
    padding: 5px;
    color: #555;
    font-size: 10px;
  }
  .name {
    padding: 10px;
    color: #555;
  }
  .actions {
    text-align: center;
  }
</style>

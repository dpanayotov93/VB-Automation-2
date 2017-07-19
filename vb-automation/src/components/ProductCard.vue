<template>
    <div class="mdc-card">
        <div class="mdc-card__primary">
          <section class="mdc-card__media">
            <img v-img :src="product.img" class="product-image"></img>
          </section>
          <section class="mdc-card__supporting-text">
            <h2 class="mdc-card__title mdc-card__title--large">{{product.name}}</h2>
            <h2 class="mdc-card__subtitle">
              {{product.description}}
            </h2>                  
          </section>
        </div>
        <section class="mdc-card__actions">
          <button class="mdc-button mdc-button--compact mdc-button--primary mdc-button--raised" v-on:click="displayImage(product.img)">Image</button>
          <button class="mdc-button mdc-button--compact mdc-button--primary mdc-button--raised">Scheme</button>
          <button class="mdc-button mdc-button--compact mdc-button--primary mdc-button--raised"  v-on:click="displayDetails(product.id)">Datasheet</button>
        </section>        
    </div>
</template>
<style scoped>
  .mdc-card {
    height: 100%;
    border: 1px #3f51b5 dotted;
    justify-content: flex-start;
    background-color: #fff;
    width: 100%;
  }
  .mdc-card__primary {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
    .mdc-card__media {
      flex: 1 1 0;
      justify-content: space-between;
      align-items: center;
      pointer-events: none;
    }
        .mdc-card__media .product-image {
            max-width: 100px;
            max-height: 200px;
        }
    .mdc-card__supporting-text {
      flex: 1 1 0;
    }
  .mdc-card__title {
    justify-content: center;
    min-width: 75px;
  }
  .mdc-grid-list .mdc-grid-tile {
    padding: 0.25rem 0.5rem;
  }
  .mdc-card__actions {
      height: 100%;
      justify-content: space-around;
      flex-wrap: wrap;
      align-items: flex-end;
      align-content: flex-end;
  }
    .mdc-card__actions .mdc-button {
      font-size: 1rem;
      flex: 1 1 0;
      margin: 0.5rem;
    }    
</style>
<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    displayDetails (id) {
      this.$router.push({name: 'product', params: { id: id }})
    },
    displayImage (img) {
      var image = document.querySelector('[src*="' + img + '"]')
      image.click()
    }
  }
}
</script>

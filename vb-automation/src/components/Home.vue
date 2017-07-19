<template>
  <section id="promo">
    <h2>Promotions</h2>
    <carousel-3d :controls-visible="true" :perspective="0">
      <slide class="slide" v-for="(promotion, index) in this.promotions" :index="index" :key="promotion.id" v-bind:style="{ 'background-image': 'url(' + promotion.img + ')' }">
        <div>{{promotion.name}}</div>
        <div>{{promotion.description}}</div>
        <button class="mdc-button mdc-button--primary mdc-button--raised" data-mdc-auto-init="MDCRipple" v-on:click="displayDetails(promotion.id)">More</button>
      </slide>
    </carousel-3d>
  </section>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import data from '../dummy-data'
import mdcAutoInit from '@material/auto-init'
import {MDCRipple} from '@material/ripple'
var $ = window.jQuery = require('jquery')

export default {
  components: {
    Carousel3d,
    Slide
  },
  data () {
    return {
      'promotions': data.products
    }
  },
  methods: {
    ready () {
      window.mdc.autoInit($('.mdc-button'))
      mdcAutoInit.register('MDCRipple', MDCRipple)
    },
    displayDetails (id) {
      this.$router.push({name: 'product', params: { id: id }})
    }
  }
}
</script>
<style>
  .carousel-3d-container .next span, .carousel-3d-container .prev span {
    color: #fff!important;
  }
  .carousel-3d-container .slide {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
    .carousel-3d-container .slide div:not(.mdc-button) {
      color: #fff;
      background: rgba(32,32,32,0.7);
      padding: 0 0.5rem;
    }
</style>

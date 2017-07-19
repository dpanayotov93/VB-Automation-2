<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">VB Automation</span>
        <nav class="mdl-navigation">
          <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
          <router-link class="mdl-navigation__link" to="/products" @click.native="hideMenu">Products</router-link>
          <router-link class="mdl-navigation__link" to="/profile" @click.native="hideMenu">Profile</router-link>
        </nav>       
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Menu</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/products" @click.native="hideMenu">Products</router-link>
        <router-link class="mdl-navigation__link" to="/profile" @click.native="hideMenu">Profile</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
    <footer>
      <cookie-law theme="dark-lime"></cookie-law>
    </footer>    
  </div>
</template>

<script>
require('material-design-lite')
import CookieLaw from 'vue-cookie-law'
export default {
  name: 'app',
  components: { CookieLaw },
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
}

.page-content {
    background: #fff;
    padding: 2rem;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.fullscreen-v-img,
.content-v-img {
  z-index: 2;
}
.mdl-layout__header-row {
  justify-content: space-between;
}
.mdl-layout-title {
  padding: 0;
}
.mdl-layout__drawer-button {
  display: block;
}
.mdl-layout__header-row {
  padding: 0 40px 0 80px;
}
.mdl-layout__header-row .mdl-navigation {
  display: none;
}

@media screen and (min-width: 600px) {
  .mdl-layout__drawer-button {
    display: none;
  }
  .mdl-layout__header-row {
    padding: 0 40px 0 40px;
  }
  .mdl-layout__header-row .mdl-navigation {
    display: flex;
  }
  .mdl-layout__header-row .mdl-navigation a:hover,
  .mdl-layout__header-row .mdl-navigation a.router-link-exact-active {
    background: #fff;
    color: #2196f3;
  }
}
</style>

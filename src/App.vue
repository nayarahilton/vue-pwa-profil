<template>
  <div id="app">
    <header class="header">
      <button @click="showMenu" class="nav-button">
        <span class="nav-icon">☰</span>
      </button>
      <span class="logo">Profil</span>
    </header>
    <nav class="nav">
      <ul class="nav-list">
        <li>
          <router-link class="nav-link" to="/" @click.native="hideMenu">Login</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/Home" @click.native="hideMenu">Home</router-link>
        </li>
        <li>
           <router-link class="nav-link" to="/post" @click.native="hideMenu">Post a picture</router-link>
        </li>
      </ul>
      <div class="ofuscator" @click="hideMenu"></div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    showMenu: function showMenu() {
      document.querySelector('.nav').classList.add('-show');
    },
    hideMenu: function hideMenu() {
      document.querySelector('.nav').classList.remove('-show');
    },
  },
};
</script>

<style lang="stylus">

@import url('https://fonts.googleapis.com/css?family=Cairo:200,300,400,600,700,900');


$header-height = 56px
$primary-color = #0084FA

body 
  margin 0

#app 
  font-family 'Cairo', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

.nav-button
  color $primary-color
  border 1px solid #ddd
  font-size 20px
  background-color #f9f9f9
  height 56px
  width 56px
  position absolute

.nav
  background #ffffff
  padding 20px
  box-sizing border-box
  position fixed
  z-index 1
  width 230px
  height 100vh
  top 0
  transform translateX(-230px)
  transition transform .4s ease-in-out

  .ofuscator
    background rgba(0, 0, 0, 0.8)
    position fixed
    z-index -1
    left 230px
    bottom 0
    top 0
    height 100vh
    width 100vw
    right 0
    opacity 0
    visibility hidden
    transition opacity .2s ease-in-out, visibility .2s ease-in-out


  &.-show
    transform none

    .ofuscator
      opacity 1
      visibility visible

.nav-list
  list-style none
  margin 0
  padding 0

main 
  text-align center

a
  text-decoration none
  cursor pointer

svg 
  width 20px
  height 20px


.header 
  margin 0
  box-sizing border-box
  color #ffffff
  background-color #ffffff
  border-bottom 1px solid rgba(0, 0, 0, .1)
  display flex
  align-items center
  height $header-height 


.logo
  font-size 20px
  letter-spacing 0.6em
  text-transform uppercase
  font-weight 700
  box-sizing border-box
  padding 3px
  padding-left calc(0.6em + 3px)
  border-radius 14px 14px 14px 0
  background-color $primary-color
  margin 0 auto

</style>

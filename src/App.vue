<template>
  <div id="app">
    <header class="header">
      <span class="logo">Profil</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="stylus">

@import url('https://fonts.googleapis.com/css?family=Cairo:200,300,400,600,700,900');

$header-height = 56px

body 
  margin 0

#app 
  font-family 'Cairo', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

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
  justify-content center
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
  background-color #0084FA

</style>

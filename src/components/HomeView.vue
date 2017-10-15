<template>
  <div class="home">
    <div v-for="picture in this.$root.cat" class="card" @click="displayDetails(picture['.key'])">
      <div class="card-picture">
        <img :src="picture.url" />
      </div>
      <div class="card-comment">
        <span>{{ picture.comment }}</span>
      </div>
    </div>
    <router-link class="add-picture-button" to="/post">
      <span>+</span>
    </router-link>
  </div>
</template>
<script>
import data from '../data';

export default {
  methods: {
    displayDetails(id) {
      this.$router.push({ name: 'detail', params: { id } });
    },
  },
  data() {
    return {
      pictures: data.pictures,
    };
  },
};
</script>
<style lang="stylus" scoped>

$primary-color = #0084FA

  .add-picture-button
    position fixed
    right 24px
    bottom 24px
    z-index 998
    color $primary-color
    height 50px
    width 50px
    border-radius 20px 20px 20px 0
    background #ffffff
    display flex
    align-items center
    justify-content center
    box-shadow -3px 0px 4px 1px rgba(0,0,0,0.3)
    
    span 
      font-size 40px
      line-height 40px
      height 45px

  
  .card 
    position relative
    margin-bottom 25px
  
  .card-picture > img 
    width 100%
  
  .card-comment 
    position: absolute
    bottom -5px
    left 10px
    right 10px
    padding 16px
    text-align right
    background $primary-color
    border-radius 20px 20px 20px 0
  
  .card-comment > span 
    color #fff
    font-size 14px
    font-weight bold
  
</style>
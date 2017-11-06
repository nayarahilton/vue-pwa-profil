<template>
    <div class="profile-resume">
      <div class="img-holder">
        <img :src="image" />
      </div>
      <div class="info-holder">
        <p class="profession">{{profession}}</p>
        <p class="nickname">{{ nickname }}</p>
        <p class="username">{{ username }}</p>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['image', 'nickname', 'username', 'profession'],
  };
</script>

<style scoped lang="stylus">
  $border-radius = 10px

  p
    margin 0

  .profile-resume
      display inline-flex
      align-items center
      justify-content center
      color #222

  .img-holder
      width 50px
      height 50px
      border-radius 50%
      overflow hidden
      position relative
      border 3px solid black

      img
        height 150%
        min-width 100%
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -50%)

  .info-holder
      margin-left 15px

  .profession
    font-size 12px

  .nickname
    font-size 18px
    line-height 100%
    font-weight 600

  .username
    font-size 12px

</style>

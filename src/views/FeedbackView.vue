<template>
  <div class="feedback-view">

    <div class="feedback-img">
      <img src="/"> 
    </div>
    <div class="feedback-info">
      <h2 class="feedback-title">
        {{title}}
      </h2>
      <p class="feedback-text">
        {{text}}
      </p>
    </div>
    <main-button buttonType="router" text-inner="Primeiro post" linkto="/post"></main-button>

    
  </div>
</template>
<script>
  import mainButton from '../components/main-button';

  export default {
    data() {
      return {
        title: 'Perfil criado com sucesso!',
        text: 'Vamos começar espalhando seu conheciemento?',
      };
    },
    components: {
      'main-button': mainButton,
    },
  };
</script>
<style lang="stylus" scoped>
  .feedback
    &-view
      min-height calc(100vh - 56px)
      display flex
      flex-direction column
      align-items center
      justify-content center
      color #333
      padding 20px
      box-sizing border-box
      text-align center

    &-img
      background purple
      width 250px
      height 200px

    &-info
      padding 0 30px
      box-sizing border-box

    &-title
      font-size 34px
      line-height 100%
      margin-bottom 0

    &-text
      font-size 18px
      line-height 100%
      margin-top 10px

</style>
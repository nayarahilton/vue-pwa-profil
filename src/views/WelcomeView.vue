<template>
  <div class="welcome">
    <div class="presentation-holder">
      <img class="logo-symbol" src="../assets/logo.svg" alt="Profil Logo">
      <h1 class="title">{{ msg }}</h1>
    </div>
    
    <div class="btn-holder">
      <social-button text-inner="Entrar com o Linkedin"></social-button>
      <input class="input" type="email" placeholder="Email">
      <input class="input" type="password" placeholder="Senha">
      <div class="login-holder">
        <router-link class="link" to="/register">Criar cadastro</router-link>
        <main-button text-inner="Entrar"></main-button>
      </div>
    </div>
  </div>
</template>

<script>
import socialButton from '../components/social-button/social-button.vue';
import mainButton from '../components/main-button/main-button.vue';

export default {
  name: 'welcome',
  data() {
    return {
      msg: 'Explore diverasas profissões com quem trabalha na área',
    };
  },
  components: {
    'social-button': socialButton,
    'main-button': mainButton,
  },
};
</script>

<style scoped lang="stylus">

$header-height = 56px
$primary-color = #0084FA
$border-radius = 10px

::-webkit-input-placeholder
  color #fff

.welcome
  padding 40px 20px
  box-sizing border-box
  display flex
  flex-direction column
  justify-content space-between
  align-items center
  text-align center
  background-color rgba(0, 74, 141, 0.5)
  color #ffffff
  min-height "calc(100vh - %s)" % $header-height

  .link
    color #ffffff

  .input
    background transparent
    border 1px solid #fff
    border-radius $border-radius
    padding 15px
    box-sizing border-box
    width 100%
    margin-top 20px
    color #fff

    &:focus 
      outline none

.logo-symbol
  height 120px
  
.title
  font-size 20px
  line-height 24px
  font-weight 300
  max-width 250px

.btn-holder
  width 100%

.login-holder
  display flex
  align-items center
  justify-content space-between

</style>

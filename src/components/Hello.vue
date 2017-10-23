<template>
  <div class="hello">
    <div class="presentation-holder">
      <img class="logo-symbol" src="../assets/logo.svg" alt="Profil Logo">
      <h1 class="title">{{ msg }}</h1>
    </div>
    
    <div class="btn-holder">
      <a class="social-btn" href="#">
        <span>Entre com o <strong>linkedin</strong></span>
        <div class="icon">
          <svg></svg>
        </div>
      </a>
      <input class="input" type="email" placeholder="Email">
      <input class="input" type="password" placeholder="Senha">
      <div class="login-holder">
        <a class="link" href="#">Criar cadastro</a>
        <a class="main-btn"  href="#">
          Entrar
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Explore diverasas profissões com quem trabalha na área',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

$header-height = 56px
$primary-color = #0084FA
$border-radius = 10px

::-webkit-input-placeholder
  color #fff

.hello
  padding 40px 20px
  box-sizing border-box
  display flex
  flex-direction column
  justify-content space-between
  align-items center
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

.main-btn
  display block
  color #ffffff
  background-color #0084FA
  border-radius $border-radius
  padding 10px
  margin-bottom 20px
  margin-top 20px
  min-width 100px

.login-holder
  display flex
  align-items center
  justify-content space-between

.social-btn
  background-color #ffffff
  border-radius $border-radius
  color #0084FA
  display flex
  position relative

  .icon
    background-color #0084FA
    border-radius 0 $border-radius $border-radius 0
    padding 2px
    width 40px
    position absolute
    top 0
    bottom 0
    right 0

  svg
    background #fff
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)

  span
    padding 5px 15px
    display inline-block

</style>

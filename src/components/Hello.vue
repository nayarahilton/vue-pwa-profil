<template>
  <div class="hello">
    <div class="presentation-holder">
      <img src="../assets/logo.png" alt="Profil Logo">
      <h1 class="title">{{ msg }}</h1>
    </div>
    
    <div class="btn-holder">
      <a class="main-btn" href="#">Cadastre-se</a>
      <div class="login-holder">
        <a class="link" href="#">
          Fazer login
        </a>
        <a class="social-btn" href="#">
          <span>Entre com o <strong>linkedin</strong></span>
          <div class="icon">
            <svg></svg>
          </div>
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

.hello
  padding 40px 20px
  box-sizing border-box
  display flex
  flex-direction column
  justify-content space-between
  align-items center
  background-color rgba(0, 74, 141, 0.5)
  color #ffffff
  height "calc(100vh - %s)" % $header-height

  .link
    color #ffffff
  
.title
  font-size 26px
  line-height 30px
  font-weight 300

.btn-holder
  width 100%

.main-btn
  display block
  color #ffffff
  background-color #0084FA
  border-radius 15px
  padding 10px
  margin-bottom 20px

.login-holder
  display flex
  align-items center
  justify-content space-between

.social-btn
  background-color #ffffff
  border-radius 20px
  color #0084FA
  display inline-flex

  .icon
    background-color #0084FA
    border-radius 0 20px 20px 0
    padding 2px
    width 40px
    position relative

  svg
    background #fff
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)

  span
    padding 3px 15px
    display inline-block

</style>

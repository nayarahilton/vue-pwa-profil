<template>
  <div class="register">
    <div class="presentation-holder">
      <h2 class="title">Seus Dados</h2>
      <p>{{msg}}</p>
    </div>
    
    <div class="btn-holder">
      <social-button></social-button>
      <input class="input" type="text" placeholder="Nome">
      <input class="input" type="email" placeholder="Email">
      <input class="input" type="password" placeholder="Senha">
      <div class="login-holder">
        <main-button></main-button>
      </div>
    </div>
  </div>
</template>

<script>
import socialButton from '../components/social-button/social-button.vue';
import mainButton from '../components/main-button/main-button.vue';

export default {
  name: 'register',
  data() {
    return {
      msg: 'Todos os campos são obrigatórios',
    };
  },
  components: {
    'social-button': socialButton,
    'main-button': mainButton,
  },
};
</script>

<style lang="stylus">


</style>

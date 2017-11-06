<template>
	<div class="register">
		<div class="presentation-holder">
			<h2 class="title">Seus Dados</h2>
			<p>{{msg}}</p>
		</div>

		<div class="btn-holder">
			<social-button text-inner="Completar com o Linkedin"></social-button>
			<main-input type="text" placeholder="Nome" />
			<main-input type="email" placeholder="Email" />
			<main-input type="password" placeholder="Senha" />
			<div class="login-holder">
				<main-button text-inner="Próximo" linkto="/Home"></main-button>
			</div>
		</div>
	</div>
</template>

<script>
import socialButton from '../components/social-button';
import mainButton from '../components/main-button';
import mainInput from '../components/main-input';

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
		'main-input': mainInput,
	},
};
</script>

<style lang="stylus">


</style>

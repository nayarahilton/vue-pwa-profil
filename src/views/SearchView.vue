<template>
	<div class="search-view">
		<header class="questions-header">
			<status-bar
				link="/home"
				title="Buscar"
			/>
			<tabs-bottom-guru v-if="type == 1"/>
			<tabs-bottom-aprendiz v-if="type == 2"/>
		</header>
		<main class="search-view">
			<div class="search-holder">
				<input
					type="text"
					placeholder="Busque uma profissão"
					class="search-input"
					v-model="search"
				/>
			</div>
			<div class="profession-holder">
				<div class="profession" v-for="profissao in filteredList">
					<a v-bind:href="profissao.link" target="_blank">
						Profissão: {{ profissao.name }}
					</a>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import StatusBar from '../components/StatusBar';
import TabsBottomGuru from '../components/TabsBottomGuru';
import TabsBottomAprendiz from '../components/TabsBottomAprendiz';

export default {
	data() {
		return {
			search: '',
			profissaoList: [
				{
					name: 'Administração Comercial/Vendas',
					link: '/',
				},
				{
					name: 'Administração de Empresas',
					link: '/',
				},
				{
					name: 'Administração Pública',
					link: '/',
				},
				{
					name: 'Advocacia/Jurídica',
					link: '/',
				},
				{
					name: 'Agronomia',
					link: '/',
				},
				{
					name: 'Arquitetura/Urbanismo',
					link: '/',
				},
				{
					name: 'Arquivologia',
					link: '/',
				},
				{
					name: 'Artes Cênicas',
					link: '/',
				},
				{
					name: 'Artes Gráficas',
					link: '/',
				},
				{
					name: 'Artes Plásticas',
					link: '/',
				},
				{
					name: 'Atend. a cliente - Bares e Restaurantes',
					link: '/',
				},
				{
					name: 'Atend. a cliente - Telefonistas/Recepcionistas',
					link: '/',
				},
				{
					name: 'Atend. a cliente - Telemarketing/Call Center',
					link: '/',
				},
				{
					name: 'Atend. a cliente',
					link: '/',
				},
				{
					name: 'Auditoria',
					link: '/',
				},
				{
					name: 'Bancos',
					link: '/',
				},
				{
					name: 'Biblioteconomia',
					link: '/',
				},
				{
					name: 'Biologia/Ciências Biológicas',
					link: '/',
				},
				{
					name: 'Biomedicina',
					link: '/',
				},
				{
					name: 'Ciências Sociais',
					link: '/',
				},
				{
					name: 'Cinema',
					link: '/',
				},
				{
					name: 'Comércio Exterior',
					link: '/',
				},
				{
					name: 'Compras',
					link: '/',
				},
				{
					name: 'Comunicação',
					link: '/',
				},
				{
					name: 'Construção Civil',
					link: '/',
				},
				{
					name: 'Contabilidade',
					link: '/',
				},
				{
					name: 'Controladoria',
					link: '/',
				},
				{
					name: 'Culinária/Gastronomia',
					link: '/',
				},
				{
					name: 'Desenho Industrial',
					link: '/',
				},
				{
					name: 'Design de Interiores',
					link: '/',
				},
				{
					name: 'Design Gráfico',
					link: '/',
				},
				{
					name: 'Ecologia/Meio Ambiente',
					link: '/',
				},
				{
					name: 'Economia',
					link: '/',
				},
				{
					name: 'Enfermagem',
					link: '/',
				},
				{
					name: 'Engenharia de Alimentos',
					link: '/',
				},
				{
					name: 'Engenharia Civil',
					link: '/',
				},
				{
					name: 'Engenharia Eletrônica',
					link: '/',
				},
				{
					name: 'Engenharia Eletrotécnica',
					link: '/',
				},
				{
					name: 'Engenharia Mecânica',
					link: '/',
				},
				{
					name: 'Engenharia Metalúrgica e de Materiais',
					link: '/',
				},
				{
					name: 'Engenharia de Minas',
					link: '/',
				},
				{
					name: 'Engenharia de Produção',
					link: '/',
				},
				{
					name: 'Engenharia Química',
					link: '/',
				},
				{
					name: 'Engenharia - Outras',
					link: '/',
				},
				{
					name: 'Ensino Superior e Pesquisa',
					link: '/',
				},
				{
					name: 'Ensino - Outros',
					link: '/',
				},
				{
					name: 'Entretenimento',
					link: '/',
				},
				{
					name: 'Esportes',
					link: '/',
				},
				{
					name: 'Estética',
					link: '/',
				},
				{
					name: 'Farmácia',
					link: '/',
				},
				{
					name: 'Filosofia',
					link: '/',
				},
				{
					name: 'Finanças',
					link: '/',
				},
				{
					name: 'Fiscal',
					link: '/',
				},
				{
					name: 'Física',
					link: '/',
				},
				{
					name: 'Fisioterapia',
					link: '/',
				},
				{
					name: 'Fonoaudiologia',
					link: '/',
				},
				{
					name: 'Geografia',
					link: '/',
				},
				{
					name: 'Geologia',
					link: '/',
				},
				{
					name: 'Gestão Empresarial',
					link: '/',
				},
				{
					name: 'História',
					link: '/',
				},
				{
					name: 'Hotelaria',
					link: '/',
				},
				{
					name: '" selected="selectedInformática/T.I.',
					link: '/',
				},
				{
					name: 'Internet',
					link: '/',
				},
				{
					name: 'Jornalismo',
					link: '/',
				},
				{
					name: 'Letras',
					link: '/',
				},
				{
					name: 'Logística',
					link: '/',
				},
				{
					name: 'Manutenção Industrial',
					link: '/',
				},
				{
					name: 'Manutenção Predial',
					link: '/',
				},
				{
					name: 'Marketing',
					link: '/',
				},
				{
					name: 'Matemática/Estatística',
					link: '/',
				},
				{
					name: 'Medicina/Hospitalar',
					link: '/',
				},
				{
					name: 'Meteorologia',
					link: '/',
				},
				{
					name: 'Mineração',
					link: '/',
				},
				{
					name: 'Moda',
					link: '/',
				},
				{
					name: 'Museologia',
					link: '/',
				},
				{
					name: 'Música',
					link: '/',
				},
				{
					name: 'Nutrição',
					link: '/',
				},
				{
					name: 'Oceanografia',
					link: '/',
				},
				{
					name: 'Odontologia',
					link: '/',
				},
				{
					name: 'Organização de Eventos/Produção Cultural',
					link: '/',
				},
				{
					name: 'Organização e Métodos',
					link: '/',
				},
				{
					name: 'Pesquisa de Mercado',
					link: '/',
				},
				{
					name: 'Petrolífera',
					link: '/',
				},
				{
					name: 'Produção/Fabricação',
					link: '/',
				},
				{
					name: 'Propaganda',
					link: '/',
				},
				{
					name: 'Psicologia',
					link: '/',
				},
				{
					name: 'Qualidade',
					link: '/',
				},
				{
					name: 'Química',
					link: '/',
				},
				{
					name: 'Radialismo e Televisão',
					link: '/',
				},
				{
					name: 'Recursos Humanos',
					link: '/',
				},
				{
					name: 'Relações Internacionais',
					link: '/',
				},
				{
					name: 'Relações Públicas',
					link: '/',
				},
				{
					name: 'Secretariado',
					link: '/',
				},
				{
					name: 'Segurança e Saúde no Trabalho',
					link: '/',
				},
				{
					name: 'Segurança Patrimonial',
					link: '/',
				},
				{
					name: 'Seguros',
					link: '/',
				},
				{
					name: 'Serviço Social',
					link: '/',
				},
				{
					name: 'Serviços Administrativos',
					link: '/',
				},
				{
					name: 'Serviços Domésticos',
					link: '/',
				},
				{
					name: 'Serviços Especializados - Açougue',
					link: '/',
				},
				{
					name: 'Serviços Especializados - Padaria/Confeitaria',
					link: '/',
				},
				{
					name: 'Serviços Especializados - Peixaria',
					link: '/',
				},
				{
					name: 'Serviços Gerais',
					link: '/',
				},
				{
					name: 'Serviços Técnicos - Elétricos',
					link: '/',
				},
				{
					name: 'Serviços Técnicos - Eletrônicos',
					link: '/',
				},
				{
					name: 'Serviços Técnicos - Mecânicos',
					link: '/',
				},
				{
					name: 'Serviços Técnicos - Outros',
					link: '/',
				},
				{
					name: 'Suprimentos',
					link: '/',
				},
				{
					name: 'Telecomunicações',
					link: '/',
				},
				{
					name: 'Terapia Ocupacional',
					link: '/',
				},
				{
					name: 'Terceiro Setor/Responsabilidade Social',
					link: '/',
				},
				{
					name: 'Tradução/Interpretação',
					link: '/',
				},
				{
					name: 'Transporte Aéreo',
					link: '/',
				},
				{
					name: 'Transporte Marítimo',
					link: '/',
				},
				{
					name: 'Transporte Terrestre',
					link: '/',
				},
				{
					name: 'Tributária',
					link: '/',
				},
				{
					name: 'Turismo',
					link: '/',
				},
				{
					name: 'Vendas',
					link: '/',
				},
				{
					name: 'Vendas - Varejo',
					link: '/',
				},
				{
					name: 'Vendas Técnicas',
					link: '/',
				},
				{
					name: 'Veterinária',
					link: '/',
				},
				{
					name: 'Web Design',
					link: '/',
				},
				{
					name: 'Zoologia',
					link: '/',
				},
				{
					name: 'Zootecnia',
					link: '/',
				},
			],
		};
	},
	components: {
		StatusBar,
		TabsBottomGuru,
		TabsBottomAprendiz,
	},
	computed: {
		/* eslint-disable */
		filteredList() {
			return this.profissaoList.filter((profissao) => {
				return profissao.name.toLowerCase().includes(this.search.toLowerCase());
			});
		},
		type() {
			return !this.$store.getters.user ? false : this.$store.getters.user.type;
		},
	},
	created() {
		this.$store.dispatch('fetchUser');
	},
};
</script>
<style lang="stylus" scoped>
	@import '../assets/styles/*'

	.search-view
		margin-bottom 60px
		padding 0

	.search-holder,
	.profession-holder
		holder()
		margin-top 30px
		box-sizing border-box


	.search-holder
		padding 0 20px

	.search-input
		background url('../assets/icons/search-icon.svg') no-repeat center right 20px
		background-size 25px
		font-size 14px
		padding 15px
		width 100%
		display block
		border 1px solid $gray
		border-radius 15px
		color $dark-gray
		box-sizing border-box

		&:focus
			border-color $dark-pink
			outline 0


	.profession
		border-bottom 1px solid #ddd
		font-size 18px
		text-align left
		transition: .15s all ease-in-out;

		a
			color $blue
			padding 15px
			box-sizing border-box
			display block


</style>

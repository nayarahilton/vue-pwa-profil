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
					<router-link v-bind:to="profissao.link">
						Profissão: {{ profissao.name }}
					</router-link>
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
					link: '/profissao',
				},
				{
					name: 'Administração de Empresas',
					link: '/profissao',
				},
				{
					name: 'Administração Pública',
					link: '/profissao',
				},
				{
					name: 'Advocacia/Jurídica',
					link: '/profissao',
				},
				{
					name: 'Agronomia',
					link: '/profissao',
				},
				{
					name: 'Arquitetura/Urbanismo',
					link: '/profissao',
				},
				{
					name: 'Arquivologia',
					link: '/profissao',
				},
				{
					name: 'Artes Cênicas',
					link: '/profissao',
				},
				{
					name: 'Artes Gráficas',
					link: '/profissao',
				},
				{
					name: 'Artes Plásticas',
					link: '/profissao',
				},
				{
					name: 'Atend. a cliente - Bares e Restaurantes',
					link: '/profissao',
				},
				{
					name: 'Atend. a cliente - Telefonistas/Recepcionistas',
					link: '/profissao',
				},
				{
					name: 'Atend. a cliente - Telemarketing/Call Center',
					link: '/profissao',
				},
				{
					name: 'Atend. a cliente',
					link: '/profissao',
				},
				{
					name: 'Auditoria',
					link: '/profissao',
				},
				{
					name: 'Bancos',
					link: '/profissao',
				},
				{
					name: 'Biblioteconomia',
					link: '/profissao',
				},
				{
					name: 'Biologia/Ciências Biológicas',
					link: '/profissao',
				},
				{
					name: 'Biomedicina',
					link: '/profissao',
				},
				{
					name: 'Ciências Sociais',
					link: '/profissao',
				},
				{
					name: 'Cinema',
					link: '/profissao',
				},
				{
					name: 'Comércio Exterior',
					link: '/profissao',
				},
				{
					name: 'Compras',
					link: '/profissao',
				},
				{
					name: 'Comunicação',
					link: '/profissao',
				},
				{
					name: 'Construção Civil',
					link: '/profissao',
				},
				{
					name: 'Contabilidade',
					link: '/profissao',
				},
				{
					name: 'Controladoria',
					link: '/profissao',
				},
				{
					name: 'Culinária/Gastronomia',
					link: '/profissao',
				},
				{
					name: 'Desenho Industrial',
					link: '/profissao',
				},
				{
					name: 'Design de Interiores',
					link: '/profissao',
				},
				{
					name: 'Design Gráfico',
					link: '/profissao',
				},
				{
					name: 'Ecologia/Meio Ambiente',
					link: '/profissao',
				},
				{
					name: 'Economia',
					link: '/profissao',
				},
				{
					name: 'Enfermagem',
					link: '/profissao',
				},
				{
					name: 'Engenharia de Alimentos',
					link: '/profissao',
				},
				{
					name: 'Engenharia Civil',
					link: '/profissao',
				},
				{
					name: 'Engenharia Eletrônica',
					link: '/profissao',
				},
				{
					name: 'Engenharia Eletrotécnica',
					link: '/profissao',
				},
				{
					name: 'Engenharia Mecânica',
					link: '/profissao',
				},
				{
					name: 'Engenharia Metalúrgica e de Materiais',
					link: '/profissao',
				},
				{
					name: 'Engenharia de Minas',
					link: '/profissao',
				},
				{
					name: 'Engenharia de Produção',
					link: '/profissao',
				},
				{
					name: 'Engenharia Química',
					link: '/profissao',
				},
				{
					name: 'Engenharia - Outras',
					link: '/profissao',
				},
				{
					name: 'Ensino Superior e Pesquisa',
					link: '/profissao',
				},
				{
					name: 'Ensino - Outros',
					link: '/profissao',
				},
				{
					name: 'Entretenimento',
					link: '/profissao',
				},
				{
					name: 'Esportes',
					link: '/profissao',
				},
				{
					name: 'Estética',
					link: '/profissao',
				},
				{
					name: 'Farmácia',
					link: '/profissao',
				},
				{
					name: 'Filosofia',
					link: '/profissao',
				},
				{
					name: 'Finanças',
					link: '/profissao',
				},
				{
					name: 'Fiscal',
					link: '/profissao',
				},
				{
					name: 'Física',
					link: '/profissao',
				},
				{
					name: 'Fisioterapia',
					link: '/profissao',
				},
				{
					name: 'Fonoaudiologia',
					link: '/profissao',
				},
				{
					name: 'Geografia',
					link: '/profissao',
				},
				{
					name: 'Geologia',
					link: '/profissao',
				},
				{
					name: 'Gestão Empresarial',
					link: '/profissao',
				},
				{
					name: 'História',
					link: '/profissao',
				},
				{
					name: 'Hotelaria',
					link: '/profissao',
				},
				{
					name: '" selected="selectedInformática/T.I.',
					link: '/profissao',
				},
				{
					name: 'Internet',
					link: '/profissao',
				},
				{
					name: 'Jornalismo',
					link: '/profissao',
				},
				{
					name: 'Letras',
					link: '/profissao',
				},
				{
					name: 'Logística',
					link: '/profissao',
				},
				{
					name: 'Manutenção Industrial',
					link: '/profissao',
				},
				{
					name: 'Manutenção Predial',
					link: '/profissao',
				},
				{
					name: 'Marketing',
					link: '/profissao',
				},
				{
					name: 'Matemática/Estatística',
					link: '/profissao',
				},
				{
					name: 'Medicina/Hospitalar',
					link: '/profissao',
				},
				{
					name: 'Meteorologia',
					link: '/profissao',
				},
				{
					name: 'Mineração',
					link: '/profissao',
				},
				{
					name: 'Moda',
					link: '/profissao',
				},
				{
					name: 'Museologia',
					link: '/profissao',
				},
				{
					name: 'Música',
					link: '/profissao',
				},
				{
					name: 'Nutrição',
					link: '/profissao',
				},
				{
					name: 'Oceanografia',
					link: '/profissao',
				},
				{
					name: 'Odontologia',
					link: '/profissao',
				},
				{
					name: 'Organização de Eventos/Produção Cultural',
					link: '/profissao',
				},
				{
					name: 'Organização e Métodos',
					link: '/profissao',
				},
				{
					name: 'Pesquisa de Mercado',
					link: '/profissao',
				},
				{
					name: 'Petrolífera',
					link: '/profissao',
				},
				{
					name: 'Produção/Fabricação',
					link: '/profissao',
				},
				{
					name: 'Propaganda',
					link: '/profissao',
				},
				{
					name: 'Programação Front-end',
					link: '/profissao',
				},
				{
					name: 'Programação Back-end',
					link: '/profissao',
				},
				{
					name: 'Psicologia',
					link: '/profissao',
				},
				{
					name: 'Qualidade',
					link: '/profissao',
				},
				{
					name: 'Química',
					link: '/profissao',
				},
				{
					name: 'Radialismo e Televisão',
					link: '/profissao',
				},
				{
					name: 'Recursos Humanos',
					link: '/profissao',
				},
				{
					name: 'Relações Internacionais',
					link: '/profissao',
				},
				{
					name: 'Relações Públicas',
					link: '/profissao',
				},
				{
					name: 'Secretariado',
					link: '/profissao',
				},
				{
					name: 'Segurança e Saúde no Trabalho',
					link: '/profissao',
				},
				{
					name: 'Segurança Patrimonial',
					link: '/profissao',
				},
				{
					name: 'Seguros',
					link: '/profissao',
				},
				{
					name: 'Serviço Social',
					link: '/profissao',
				},
				{
					name: 'Serviços Administrativos',
					link: '/profissao',
				},
				{
					name: 'Serviços Domésticos',
					link: '/profissao',
				},
				{
					name: 'Serviços Especializados - Açougue',
					link: '/profissao',
				},
				{
					name: 'Serviços Especializados - Padaria/Confeitaria',
					link: '/profissao',
				},
				{
					name: 'Serviços Especializados - Peixaria',
					link: '/profissao',
				},
				{
					name: 'Serviços Gerais',
					link: '/profissao',
				},
				{
					name: 'Serviços Técnicos - Elétricos',
					link: '/profissao',
				},
				{
					name: 'Serviços Técnicos - Eletrônicos',
					link: '/profissao',
				},
				{
					name: 'Serviços Técnicos - Mecânicos',
					link: '/profissao',
				},
				{
					name: 'Serviços Técnicos - Outros',
					link: '/profissao',
				},
				{
					name: 'Suprimentos',
					link: '/profissao',
				},
				{
					name: 'Telecomunicações',
					link: '/profissao',
				},
				{
					name: 'Terapia Ocupacional',
					link: '/profissao',
				},
				{
					name: 'Terceiro Setor/Responsabilidade Social',
					link: '/profissao',
				},
				{
					name: 'Tradução/Interpretação',
					link: '/profissao',
				},
				{
					name: 'Transporte Aéreo',
					link: '/profissao',
				},
				{
					name: 'Transporte Marítimo',
					link: '/profissao',
				},
				{
					name: 'Transporte Terrestre',
					link: '/profissao',
				},
				{
					name: 'Tributária',
					link: '/profissao',
				},
				{
					name: 'Turismo',
					link: '/profissao',
				},
				{
					name: 'Vendas',
					link: '/profissao',
				},
				{
					name: 'Vendas - Varejo',
					link: '/profissao',
				},
				{
					name: 'Vendas Técnicas',
					link: '/profissao',
				},
				{
					name: 'Veterinária',
					link: '/profissao',
				},
				{
					name: 'Design Digital',
					link: '/profissao',
				},
				{
					name: 'Design de Moda',
					link: '/profissao',
				},
				{
					name: 'Zoologia',
					link: '/profissao',
				},
				{
					name: 'Zootecnia',
					link: '/profissao',
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

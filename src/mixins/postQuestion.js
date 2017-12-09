const postQuestion = {
	methods: {
		postQuestion(_profession, _question, _answers) {
			this.$root.$firebaseRefs.faq.push(
				{
					profession: _profession,
					question: _question,
					answers: _answers,
					info: -1 * new Date().getTime(),
				},
			).then(
				this.$router.push('/sucesso-perguntas'),
			);
		},
	},
};

export default postQuestion;

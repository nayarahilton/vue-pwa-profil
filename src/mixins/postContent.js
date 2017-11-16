const postContent = {
	methods: {
		postContent(cardUrl, title) {
			this.$root.$firebaseRefs.card.push(
				{
					url: cardUrl,
					comment: title,
					info: 'Posted by Nay on Tuesday',
					created_at: -1 * new Date().getTime(),
				},
			).then(
				this.$router.push('/Home'),
			);
		},
	},
};

export default postContent;

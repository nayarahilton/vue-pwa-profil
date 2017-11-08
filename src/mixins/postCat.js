const postCat = {
	methods: {
		postCat(catUrl, title) {
			this.$root.$firebaseRefs.cat.push(
				{
					url: catUrl,
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

export default postCat;

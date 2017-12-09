const postContent = {
	methods: {
		postContent(_profession, _photo, _description, _username, _user, _favorites, _likes) {
			this.$root.$firebaseRefs.card.push(
				{
					profession: _profession,
					url: _photo,
					comment: _description,
					username: _username,
					user: _user,
					favorites: _favorites,
					likes: _likes,
					info: -1 * new Date().getTime(),
				},
			).then(
				this.$router.push('/home'),
			);
		},
	},
};

export default postContent;

<template>
	 <div class="photo-upload">
		<div class="file-upload-form">
			<input
				type="file"
				@change="previewThumbnail"
				name="photo-upload-button"
				id="photo-upload-button"
				accept="image/*"
				class="input-file"
				capture="camera"

			/>
			<label for="photo-upload-button">{{ labelText }}</label>
		</div>
		<div
			class="image-preview"
			v-if="imageData.length > 0"
		>
			<img
				ref="input"
				:src="imageData"
				v-bind:value="imageData"
				@change="updateValue($event.target.imageData)"
				class="image-preview__img"
			>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			imageData: '',
		};
	},
	props: {
		labelText: {
			required: true,
			type: String,
		},
		src: {
			type: String,
		},
	},
	methods: {
		previewThumbnail: function getPreview(event) {
			const input = event.target;
			if (input.files && input.files[0]) {
				const reader = new FileReader();
				reader.onload = (e) => {
					this.imageData = e.target.result;
				};
				reader.readAsDataURL(input.files[0]);
			}
		},
		updateValue(imageData) {
			this.$emit('input', imageData);
		},
	},
};
</script>

<style lang="stylus">
	@import '../assets/styles/_colors'

	*
		box-sizing border-box

	.photo-upload
		height auto
		margin 20px 0
		position relative
		text-align center
		width 100%

	.input-file
		height 0.1px
		opacity 0
		overflow hidden
		position absolute
		width 0.1px
		z-index -1

		&:focus + label
			border-color $dark-blue

		& + label
			background transparent
			border 2px solid $pink
			border-radius 50%
			color $dark-gray
			display inline-block
			font-size 12pt
			font-weight 500
			height 150px
			line-height 150px
			text-align center
			width 150px

			&:hover,
			&:focus
				border-color $dark-blue
				cursor pointer

	.image-preview
		border-radius 50%
		height 150px
		left 0
		margin 0 auto
		pointer-events none
		position: absolute
		right 0
		top 0
		width 150px

		&__img
			border 2px solid $pink
			border-radius 50%
			height 150px
			object-fit cover
			object-position center
			width 150px
</style>

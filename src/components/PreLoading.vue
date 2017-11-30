<template>
	<div class="loading-holder">
		<div class="loading">
			<div class="square"></div>
			<div class="square"></div>
			<div class="square"></div>
			<div class="square"></div>
			<div class="square"></div>
			<div class="square"></div>
			<div class="square"></div>
			<div class="square"></div>
			<div class="square"></div>
			<div class="simple-loading"></div>
		</div>
	</div>
</template>

<script>
	export default {

	};
</script>

<style lang="stylus" scoped>
@import '../assets/styles/_colors'

$size = 30px
$radius = 0.5em

.loading-holder
	margin 0
	padding 0
	display flex
	align-items center
	justify-content center
	min-height 100vh
	position fixed
	background rgba(255,255,255,0.8)
	top 0
	left 0
	right 0
	bottom 0
	z-index 999

.logo
	margin-right 20px

.loading,
.logo
	position relative
	height $size * 4
	width $size * 3

.square
	background $blue
	width $size
	height $size
	font-size $size
	position absolute

	&:nth-child(1)
		border-radius $radius 0 0 0
		box-shadow inset -0.05em -0.05em 0.3em rgba(0, 0, 0, 0.3);

	&:nth-child(2)
		top $size
		box-shadow inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.4);

	&:nth-child(3)
		top $size * 2
		box-shadow inset -0.05em -0.1em 0.3em rgba(0, 0, 0, 0.3);

	&:nth-child(4)
		top $size * 3
		border-radius 0 0 $radius 0


	&:nth-child(5)
		left $size
		box-shadow inset -0.15em -0em 0.4em rgba(0, 0, 0, 0.3);

	&:nth-child(6)
		left $size * 2
		border-radius 0 $radius 0 0

	&:nth-child(7)
		left $size * 2
		top $size
		box-shadow inset 0.05em -0.05em 0.4em rgba(0, 0, 0, 0.3);

	&:nth-child(8)
		left $size * 2
		top $size * 2
		border-radius 0 0 $radius 0
		box-shadow inset 0.15em -0.05em 0.2em rgba(0, 0, 0, 0.3);

	&:nth-child(9)
		left $size
		top $size * 2


@keyframes square-a {
	0% {
		transform: translateY(0);
		border-radius: 0;
	}

	50% {
		transform: translateY(-($size))
		border-radius: 0 $radius 0 0;
		box-shadow: none;
	}


	75% {
		transform: translateY(0);
		box-shadow: none;
		border-radius: 0;
	}
}

@keyframes square-b {
	0% {
		transform: translateX(0)
	}

	30% {
		transform: translateX(-($size))
		box-shadow: none;
		border-radius: 0;
	}

	60% {
		transform: translateX(-($size))
		border-radius: 0;
	}

	75% {
		transform: translateX(0)
		box-shadow: none;
	}

}

.loading .square
	&:nth-child(7)
		animation square-a 1s infinite .25s ease-in-out
		z-index 2

	&:nth-child(8)
		animation square-b 1s infinite reverse ease-in-out


	.logo .square
		&:nth-child(7)
			background #3366cf

		&:nth-child(8)
			background #3366cf

@keyframes loading {
		0% {
	transform: rotate(0);
	}
		100% {
	transform: rotate(360deg);
	}
}

@keyframes loading-circle {
		0% {
	stroke-dashoffset: 0
	}
		100% {
	stroke-dashoffset: -600;
	}
}


$main-ring-size = $size * .3
$step-reduce = 10px
$border-width = 2px

.simple-loading
	height: $main-ring-size
	width: $main-ring-size
	position absolute
	left $size * 1.05
	top $size * 1.05
	border-radius: 50%
	border: 8px solid rgba(0,0,0,0.01)
	border-top: 8px solid $orange
	border-right: 8px solid $orange
	border-bottom: 8px solid $orange
	animation linear-spin infinite .6s linear

@keyframes linear-spin
	0%
		transform rotate(0deg)
		opacity 0.8

	50%
		opacity 1
		transform: rotate(180deg)

	100%
		opacity 0.8
		transform rotate(360deg)



</style>

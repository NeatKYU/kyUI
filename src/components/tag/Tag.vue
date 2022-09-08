<template>
	<div 
		class="c-tag"
		:class="[classes]"
	>
		{{ textValue }}
	</div>
</template>

<script>
export default {
	name: 'c-tag',
	props: {
		textValue: {
			type: String,
			default: '',
		},
		isPrimary: {
			type: Boolean,
			default: true,
		},
		isSuccess: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			default: 'medium'
		},
		rounded: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		classes() {
			return {
				'is-primary': this.isPrimary,
				'is-success': this.isSuccess,
				'is-rounded': this.rounded,
				'small': this.size === 'small',
				'large': this.size === 'large',
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../scss/common';

.c-tag {
	display: inline-flex;
	justify-content: center;
	align-items: center;

	border: 1px solid $c-default-border-color;
	border-radius: $c-border-radius;

	font-size: 13px;

	height: 20px;
	padding: 0 8px;

	&.small {
		height: 15px;
		padding: 0 7px;

		font-size: 11px;
	}
	
	&.large {
		height: 23px;
		padding: 0 10px;

		font-size: 14px;
	}

	&.is-primary {
		background-color: $c-primary-color;
		color: $c-white-color;
	}

	&.is-success {
		background-color: $c-success-color;
		color: $c-white-color;
	}

	&.is-rounded {
		border-radius: $c-rounded-border-radius;
	}
}
</style>
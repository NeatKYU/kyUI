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
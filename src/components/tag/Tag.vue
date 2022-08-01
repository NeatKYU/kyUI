<template>
	<div 
		class="c-tag"
		:class="classes"
	>
		{{ pTextValue }}
	</div>
</template>

<script>
export default {
	name: 'c-tag',
	props: {
		pTextValue: {
			type: String,
			default: '',
		},
		pIsPrimary: {
			type: Boolean,
			default: true,
		},
		pIsSuccess: {
			type: Boolean,
			default: false,
		},
		pSize: {
			type: String,
			default: 'medium'
		},
		pIsRounded: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		classes() {
			return {
				'is-primary': this.pIsPrimary,
				'is-success': this.pIsSuccess,
				'is-rounded': this.pIsRounded,
				'small': this.pSize === 'small',
				'large': this.pSize === 'large',
			}
		}
	}
}
</script>
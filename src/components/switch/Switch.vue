<template>
    <div 
        @click="moveBall"
        class="c-switch" 
        :class="[classes, onoffClass]"
    >
        <div ref="ball" class="c-switch-ball"/>
    </div>
</template>

<script>

export default {
    name: 'c-switch',
    props: {
        size: {
            type: String,
            default: 'medium'
        }
    },
    data() {
        return {
            on: false,
        }
    },
    computed: {
        onoffClass() {
            return {
                'on': this.on,
                'off': !this.on
            }
        },
        classes() {
            return {
                'is-small': this.size === 'small',
                'is-large': this.size === 'large'
            }
        }
    },
    methods: {
        moveBall() {
            const el = this.$refs.ball
            if(this.on){
                el.style.transform = 'translateX(0%)';
                el.style.transition = 'transform .5s';
            } else {
                el.style.transform = 'translateX(100%)';
                el.style.transition = 'transform .5s';
            }
            this.on = !this.on
            this.$emit('change', this.on);
        }
    }
};
</script>
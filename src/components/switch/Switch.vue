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

<style lang="scss" scoped>
@import '../../scss/common';

.c-switch {
    width: 50px;
    height: 30px;

    display: flex;
    align-items: center;

    cursor: pointer;

    padding: 0 5px;

    background-color: lightgray;

    border-radius: $c-rounded-border-radius;

    .c-switch-ball {
        width: 20px;
        height: 20px;
        
        background-color: white;
    
        border-radius: $c-rounded-border-radius;
    }

    &.is-small {
        width: 40px;
        height: 25px;

        .c-switch-ball {
            width: 15px;
            height: 15px;
        }
    }

    &.is-large {
        width: 60px;
        height: 35px;
        
        padding: 0 8px;

        .c-switch-ball {
            width: 23px;
            height: 23px;
        }
    }
}


.on {
    background-color: $c-success-color;
}

.off {
    background-color: lightgray;
}
</style>
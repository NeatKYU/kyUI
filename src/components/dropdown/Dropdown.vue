<template>
    <div 
        class="c-dropdown-wrapper" 
        :class="dropdownCustomClass"
        @mouseenter="hoverIn" 
        @mouseleave="hoverOut"
    >
        <c-button @click="toggle" :right-icon="cToggleIcon" :disabled="this.disabled">
            dropdown
        </c-button>
        <div class="c-dropdown-item-divider">
            <div v-if="this.sIsDropActive" @click="toggle" class="c-dropdown-item-wrapper">
                <template v-if="dropdownList">
                    <c-dropdown-item 
                        v-for="(item,index) in dropdownList" 
                        :key="item+'-'+index"
                        :class="itemCustomClass"
                    >
                        {{ item }}
                    </c-dropdown-item>
                </template>
                <slot v-else/>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'c-dropdown',
    props: {
        dropdownList: [],
        dropdownCustomClass: {
            type: String,
            default: '',
        },
        itemCustomClass: {
            type: String,
            default: ''
        },
        hovered: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        downIcon: {
            type: String,
            default: 'caret-down',
        },
        upIcon: {
            type: String,
            default: 'caret-up',
        },
    },
    data() {
        return {
            sIsDropActive: false,
        }
    },
    computed: {
        cToggleIcon() {
            return this.sIsDropActive ? this.upIcon : this.downIcon;
        }
    },
    methods: {
        toggle() {
            if(!this.disabled) {
                this.sIsDropActive = !this.sIsDropActive;
                console.log('toggle! ', this.sIsDropActive)
            }
        },
        hoverIn() {
            if(this.hovered && !this.disabled) {
                this.sIsDropActive = true;
            }
        },
        hoverOut() {
            if(this.hovered && !this.disabled) {
                this.sIsDropActive = false;
            }
        }

    }
}
</script>
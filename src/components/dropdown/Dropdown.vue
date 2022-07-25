<template>
    <div class="c-dropdown-wrapper">
        <c-button @click="toggle" :right-icon="cToggleIcon">
            dropdown
        </c-button>
        <div v-if="this.sIsDropActive" class="c-dropdown-item-wrapper">
            <c-dropdown-item 
                v-for="(item,index) in dropdownList" 
                :key="item+'-'+index"
                @click="toggle"
            >
                {{ item }}
            </c-dropdown-item>
        </div>
    </div>
</template>

<script>

export default {
    name: 'c-dropdown',
    props: {
        dropdownList: [],
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
            this.sIsDropActive = !this.sIsDropActive;
            console.log('toggle! ', this.sIsDropActive)
        }
    }
}
</script>
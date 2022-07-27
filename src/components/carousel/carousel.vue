<template v-if="pImageList.length > 0">
    <div class="relative" @mouseenter="pauseSlide" @mouseleave="startSlide">
        <transition-group name="fade" tag="div">
            <!-- <div v-for="i in [currentIndex]" :key="i"> -->
            <div key="carousel-image" class="flex">
                <img :src="currentImg" />
            </div>
            <!-- </div> -->
        </transition-group>
        <div v-if="pIsArrow">
            <a class="prev" @click="prev" href="#">
                <c-icon icon="angle-left" />
            </a>
            <a class="next" @click="next" href="#">
                <c-icon icon="angle-right"/>
            </a>
        </div>
        <div v-if="pIsIndicator" class="c-carousel-indicator">
            <div 
                v-for="(item,index) in pImageList" 
                :key="item"
                @click="moveSlide(index)"
                class="c-carousel-indicator__nav"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'c-carousel',
    inheritAttrs: false,
    props: {
        pImageList: [],
        pIsIndicator: {
            type: Boolean,
            default: false,
        },
        pIsArrow: {
            type: Boolean,
            default: true,
        }
    },
    data() {
        return {
            timer: null,
            currentIndex: 0,
        }
    },
    mounted() {
        this.startSlide();
    },
    methods: {
        startSlide() {
            this.timer = setInterval(this.next, 4000);
        },
        pauseSlide() {
            // setInterval을 날려버려서 멈춤 기능
            clearInterval(this.timer);
        },
        moveSlide(moveIndex) {
            this.currentIndex = moveIndex
        },
        next() {
            this.currentIndex += 1;
        },
        prev() {
            this.currentIndex -= 1;
        }
    },
    computed: {
        currentImg    () {
            return this.pImageList[Math.abs(this.currentIndex) % this.pImageList.length];
            // return this.imageList[Math.abs(this.currentIndex) % this.imageList.length];
        }
    },
}
</script>

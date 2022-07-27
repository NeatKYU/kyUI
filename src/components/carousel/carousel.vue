<template v-if="pImageList.length > 0">
    <div class="relative" @mouseenter="pauseSlide" @mouseleave="startSlide">
        <transition-group name="fade" tag="div">
            <!-- <div v-for="i in [currentIndex]" :key="i"> -->
            <div key="carousel-image" class="flex">
                <img :src="currentImg" />
            </div>
            <!-- </div> -->
        </transition-group>
        <a class="prev" @click="prev" href="#">
            <c-icon icon="angle-left" />
        </a>
        <a class="next" @click="next" href="#">
            <c-icon icon="angle-right"/>
        </a>
    </div>
</template>

<script>
export default {
    name: 'c-carousel',
    inheritAttrs: false,
    props: {
        pImageList: [],  
    },
    data() {
        return {
            timer: null,
            currentIndex: 0,
        }
    },
    mounted: function() {
        this.startSlide();
    },
    methods: {
        startSlide: function() {
            this.timer = setInterval(this.next, 4000);
        },
        pauseSlide() {
            clearInterval(this.timer);
        },
        next: function() {
            this.currentIndex += 1;
        },
        prev: function() {
            this.currentIndex -= 1;
        }
    },
    computed: {
        currentImg: function() {
            return this.pImageList[Math.abs(this.currentIndex) % this.pImageList.length];
            // return this.imageList[Math.abs(this.currentIndex) % this.imageList.length];
        }
    },
}
</script>

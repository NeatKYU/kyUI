<template v-if="pList.length > 0">
    <div class="relative" @mouseenter="pauseSlide" @mouseleave="startSlide">
        <transition-group name="fade" tag="div">
            <!-- <div v-for="i in [currentIndex]" :key="i"> -->
            <div key="carousel-image" class="flex">
                <img v-if="pListType === 'img'" :src="currentImg" />
                <div v-else class="contents">
                    {{ currentImg }}
                </div>
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
                v-for="(item,index) in pList" 
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
        pList: [],
        pIsIndicator: {
            type: Boolean,
            default: false,
        },
        pIsArrow: {
            type: Boolean,
            default: true,
        },
        pListType: {
            type: String,
            default: "string",
            required: true,
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
        // currentImg함수에서 발동하는 currentIndex의 값을 
        // 변경시켜서 이미지를 변경함
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
        currentImg() {
            return this.pList[Math.abs(this.currentIndex) % this.pList.length];
            // return this.imageList[Math.abs(this.currentIndex) % this.imageList.length];
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../scss/common';

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:600px;
  width:100%
}

.contents {
  min-height: 100px;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  top:0;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: $c-common-trans-hover-color;
}

.c-carousel-indicator {
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  background-color: rgba(0, 0, 0, 0.588);

  &__nav {
    width: 10px;
    height: 10px;
    
    background-color: white;

    cursor: pointer;

    &:hover {
      background-color: $c-common-hover-color;
    }
  }
}
</style>
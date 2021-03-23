<template>
  <div class="homeSwiper">
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImgLoad" />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  name: "HomeSwiper",
  data() {
    return {
      imgLoadlisten: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperImgLoad() {
      if (!this.imgLoadlisten) {
        this.$emit("swiperImgLoad");
        this.imgLoadlisten = true;
      }
    },
  },
};
</script>


<style scoped>
</style>
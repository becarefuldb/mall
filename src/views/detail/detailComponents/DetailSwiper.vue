<template>
  <swiper class="detailSwiperStyle">
    <SwiperItem v-for="item in topImages" :key="item.id">
      <img :src="item" alt="">
    </SwiperItem>  
  </swiper>
</template>

<script>
import { Swiper,SwiperItem} from 'components/common/swiper/index'

export default {
  name: 'DetailSwiper',
  data() {
    return {};
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
     Swiper,
     SwiperItem
    
  }
};
</script>


<style scoped>
  .detailSwiperStyle{
    height: 300px;
  }
</style>
<template>
  <div class='homeSwiper'>
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.id">
         <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>  
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
  
  name: 'HomeSwiper',
  data() {
    return {};
  },
  props:{
    banners:{
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

</style>
<template>
  <div id='home'>
    <navBar ><div slot="navBar-center">主页</div></navBar>
    <homeSwiper :banners=banners></homeSwiper>
    <HomeRecommendView :recommend=recommend></HomeRecommendView>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue'
import {getHomeMultidata} from '@/network/home.js'
import homeSwiper from './childComponents/HomeSwiper'
import HomeRecommendView from './childComponents/HomeRecommendView'


export default {
  name: 'home',
  data() {
    return {
      banners:[],
      recommend:[]
    };
  },
  components:{
    navBar,
    homeSwiper,
    HomeRecommendView   
  },
  created(){
   getHomeMultidata()
   .then((res) => {
      this.banners=res.data.data.banner.list
      this.recommend =res.data.data.recommend.list
    }).catch((err) => {
      
    });
  }
};
</script>


<style scoped>
#home{
  padding-top: 44px;
}

</style>
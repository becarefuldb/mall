<template>
  <div>
    <detailNavBar />
    <detailSwiper :topImages="topImages" />
    <detailInfo :goods="goods" />
    <detailShop :shop="shop" />
  </div>
</template>

<script>
//公共组件
import detailNavBar from "./detailComponents/DetailNavBar";
import detailSwiper from "./detailComponents/DetailSwiper";
import detailInfo from './detailComponents/DetailInfo'
import detailShop from './detailComponents/DetailShopInfo'

//网络请求
import { getDetail, Goods ,Shop} from "@/network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop:{}
    };
  },
  components: {
    detailNavBar,
    detailSwiper,
    detailInfo,
    detailShop
  },
  created() {
    // 1.第一步获取数据iid
    this.iid = this.$route.params.iid;

    //2.第二部进行网络请求，根据iid获取详细数据
    getDetail(this.iid)
      .then((result) => {
        console.log(result);
        const data = result.data.result;
        this.topImages = data.itemInfo.topImages;

        console.log(data);
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        )
        
        this.shop = new Shop(data.shopInfo)
        console.log(this.shop);
      })
      .catch((err) => {});
  },
};
</script>


<style scoped>
</style>
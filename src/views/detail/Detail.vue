<template>
  <div id="detail">
    <detailNavBar class="detail-nav" @navClick="navClick" ref="navInfo" />
    <scroll
      class="detail-scroll"
      ref="scroll"
      @contentScroll="contentScroll"
      :probeType="3"
    >
      <detailSwiper :topImages="topImages" />
      <detailBase :goods="goods" />
      <detailShop :shop="shop" />
      <detailGoods :details="details" @detailImgLoad="detailImgLoad" />
      <detailParams :paramsInfo="paramsInfo" ref="params" />
      <detailComments :commentInfo="commentInfo" ref="comment" />
      <detailRecommendList :goods="recommendInfo" ref="recommend" />
    </scroll>
      <BackTop v-show="isShow" @click.native="backClick"></BackTop>
      <detailBottomBar />
  </div>
</template>

<script>
//公共组件
import detailNavBar from "./detailComponents/DetailNavBar";
import detailSwiper from "./detailComponents/DetailSwiper";
import detailBase from "./detailComponents/DetailBase";
import detailShop from "./detailComponents/DetailShopInfo";
import detailGoods from "./detailComponents/DetailGoodsInfo";
import detailParams from "./detailComponents/DetailParamsInfo";
import detailComments from "./detailComponents/DetailCommentsInfo";
import detailRecommendList from "components/content/goodsList/goodsList";
import detailBottomBar from "./detailComponents/DetailBottomBar";

import scroll from "components/common/scroll/Scroll.vue";


//网络请求
import { getDetail, Goods, Shop, getRecommend } from "network/detail.js";

//混入
import {MyMixin} from 'components/mixins/Mixins.js'

export default {
  name: "Detail",
  mixins:[MyMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      details: {},
      paramsInfo: {},
      commentInfo: {},
      recommendInfo: [],
      getNavTabY: [],
      currentIndex: 0,
    };
  },
  components: {
    detailNavBar,
    detailSwiper,
    detailBase,
    detailShop,
    detailGoods,
    detailParams,
    detailComments,
    detailRecommendList,
    scroll,
    detailBottomBar,
  },
  created() {
    // 1.第一步获取数据iid
    this.iid = this.$route.params.iid;

    //2.第二部进行网络请求，根据iid获取详细数据
    getDetail(this.iid)
      .then((result) => {
        console.log(result);

        //1.获取轮播图
        const data = result.data.result;
        this.topImages = data.itemInfo.topImages;

        //2.获取详情基本数据
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        //3.获取商店信息
        this.shop = new Shop(data.shopInfo);

        //4.詳情信息 detailInfo
        this.details = data.detailInfo;

        //5.获取detailParamesInfo信息，商品详情中参数的信息
        this.paramsInfo = data.itemParams;

        //6.获取评论信息  commentInfo
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      })
      .catch((err) => {});

    //3.第三步进行网络请求，获取recomment数据
    getRecommend().then((result) => {
      this.recommendInfo = result.data.data.list;
    });
  },

  methods: {
    detailImgLoad() {
      console.log("图片加载完了");
      this.$refs.scroll.refresh();

      this.getNavTabY = [];
      this.getNavTabY.push(0);
      this.getNavTabY.push(this.$refs.params.$el.offsetTop + 44);
      this.getNavTabY.push(this.$refs.comment.$el.offsetTop + 44);
      this.getNavTabY.push(this.$refs.recommend.$el.offsetTop + 44);
      this.getNavTabY.push(Number.MAX_VALUE);
    },

    navClick(index) {
      this.$refs.scroll.scrollTo(0, -this.getNavTabY[index], 300);
    },

    contentScroll(position) {
      this.isShowBackTop(position)
      let length = this.getNavTabY.length;
      const positionY = -position.y;

      // console.log(this.getNavTabY);
      // console.log(positionY);

      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.getNavTabY[i] &&
          positionY < this.getNavTabY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.navInfo.currentIndex = i;
        }
      }
    },
  },
};
</script>


<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  background-color: #fff;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
}
.detail-scroll {
  /* 用这种calc计算的时候 符号的两边要加空格，否则就是出现错误 */
  /* height: calc(100% - 44px - 49px);
   */

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>


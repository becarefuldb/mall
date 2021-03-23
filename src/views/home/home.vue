<template>
  <div id="home">
    <navBar><div slot="navBar-center">主页</div></navBar>

    <tabControl
      :tabTitle="tabTitle"
      ref="tabControl2"
      @tabControlClick="tabControlClick"
      class="topTabControl"
      v-show="topIsShow"
    />

    <BScroll
      class="content"
      ref="scroll"
      :probeType="3"
      @contentScroll="contentScroll"
      :pullUpLoad="true"
      @pullUpLoadMore="pullUpLoadMore"
    >
      <homeSwiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
      <HomeRecommendView :recommend="recommend" />
      <tabControl
        :tabTitle="tabTitle"
        ref="tabControl1"
        @tabControlClick="tabControlClick"
      />
      <goodsList :goods="showGoods" />
    </BScroll>

    <BackTop v-show="isShow" @click.native="backClick"></BackTop>
  </div>
</template>

<script>
//公共组件
import navBar from "components/common/navbar/NavBar.vue";
import tabControl from "components/content/tabControl/tabControl.vue";
import goodsList from "components/content/goodsList/goodsList.vue";
import BScroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/common/backtop/BackTop.vue";
import { debounce } from "components/common/utils/Utils";

//私有组件
import homeSwiper from "./childComponents/HomeSwiper";
import HomeRecommendView from "./childComponents/HomeRecommendView";

//方法
import { getHomeMultidata, getHomeGoods } from "@/network/home.js";

export default {
  name: "home",
  data() {
    return {
      tabTitle: ["流行", "新款", "推荐"],
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
      offSetTop: null,
      topIsShow: false,
      tabOffsetTop: 0,
      saveY: 0,
    };
  },
  components: {
    navBar,
    tabControl,
    homeSwiper,
    HomeRecommendView,
    goodsList,
    BScroll,
    BackTop,
  },
  created() {
    this.getHomeMultidata(),
      this.getHomeGoods("pop"),
      this.getHomeGoods("new"),
      this.getHomeGoods("sell");
  },
  mounted() {
    //这个方法放在这里，而不放在created中，是因为created请求数据后，执行这个方法，这个方法调用的组件$refs。scroo
    //有可能还没有加载,所有就会报错，refresh没有找到，如果放在mounted中，这个生命周期函数执行的时候，组件已经挂载
    //所以就能找到这个组件，并执行组件的方法
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("goodsImgLoad", () => {
      refresh();
    });
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /**
     * 监听事件的方法
     */
    tabControlClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }

      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //回到首页
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    //滑动超过一定距离，显示backtop图标
    contentScroll(position) {
      this.isShow = -position.y > 1000;
      this.topIsShow = -position.y > this.tabOffsetTop;
    },
    //上拉下载更多
    pullUpLoadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
    },
    swiperImgLoad() {
      //获取tabcontrol的offset
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop;
      console.log(this.tabOffsetTop);
    },

    /**
     * 请求数据的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
  },
  //组件活跃时执行
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  //离开时执行
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },
};
</script>


<style scoped>
#home {
  padding-top: 49px;
  height: 100vh;
  position: relative;
}
/* .tabcontrol {  
  position: fixed;
  top: 44px;
  left: 0px;right: 0px;
  z-index: 99;
} */
.content {
  position: absolute;
  top: 38px;
  bottom: 49px;
  left: 0;
  right: 0px;
  overflow: hidden;
}
.topTabControl {
  position: fixed;
  top: 44px;
  left: 7px;
  right: 7px;
  z-index: 99;
}
</style>
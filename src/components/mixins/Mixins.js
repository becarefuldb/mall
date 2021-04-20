import BackTop from 'components/common/backtop/BackTop.vue'

export const MyMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    //回到首页
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    isShowBackTop(position) {
      this.isShow = -position.y > 1000;
    }
  }
}



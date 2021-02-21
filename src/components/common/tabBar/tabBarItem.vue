<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="!isActive"><slot name="tabbar_icon"></slot></div>
    <div v-else><slot name="tabbar_active"></slot></div>
    <div :style="activeStyle"><slot name="tabbar_text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  data() {
    return {};
  },
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },

  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive
        ? { color: this.activeColor }
        : {};
    },
  },
};
</script>


<style scoped>
.tab_bar_item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
  font-weight: 800;
}
.tab_bar_item img {
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
</style>
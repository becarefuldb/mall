<template>
  <div class="tabControl">
    <div
      class="tabItem"
      v-for="(item, index) in tabTitle"
      :key="index"
      @click="tabClick(index)"
    >
      <span :class="{ active: currentIndex == index }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    tabTitle: {
      tupe: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit('tabControlClick',index)
    },
  },
};
</script>


<style scoped>
.tabControl {
  display: flex;
  text-align: center;
  font-size: 15px;  
  background-color:whitesmoke;
  
}
.tabItem {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tabItem span {
  padding: 5px;
}
.active {
  color:var(--color-text);
  border-bottom: solid 3px var(--color-text);
}
</style>
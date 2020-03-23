<template>
  <div>
    <p v-for="item in data" :key="item.name" @click="handelClickto()">{{ item.name }}</p>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log(to, from, "列表页面");
    // 设置下一个路由的 meta
    to.meta.keepAlive = true;
    next();
  },
  activated() {
    //   详情页面=》列表页的时候 做操作
    console.log("列表页面进入");
  },
  data() {
    return {
      data: [{ name: 1 }, { name: 2 }, { name: 3 }]
    };
  },
  mounted() {
    console.log("list接口");
  },
  methods: {
    handelClickto() {
      this.$router.push({ path: "/aliveDetail" });
    }
  }
};
</script>

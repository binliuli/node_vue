<template>
  <div>
    8888
    <el-button @click="handelRe">返回</el-button>
  </div>
</template>
<script>
export default {
  //   beforeRouteLeave(to, from, next) {
  //     console.log(to, from, "详情页面");
  //     // 设置下一个路由的 meta
  //     to.meta.keepAlive = true;
  //     next();
  //   },
  methods: {
    handelRe() {
      this.$router.push({ path: "alive" });
    }
  }
};
</script>

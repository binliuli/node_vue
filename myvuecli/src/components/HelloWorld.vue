<template>
  <div class="hello">
    <h1>hello world</h1>
    <div style="margin-bottom:20px;">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <el-menu-item index="/node">node</el-menu-item>
        <el-menu-item index="/vuex">vuex</el-menu-item>
        <el-menu-item index="/vis">vis关系图</el-menu-item>
        <el-menu-item index="/d3">d3.js关系图</el-menu-item>
        <el-menu-item index="/practice">拖拽</el-menu-item>
        <el-menu-item index="/menu">menu</el-menu-item>
        <el-menu-item index="/screenshot">截图</el-menu-item>
        <el-menu-item index="/copy">复制</el-menu-item>
        <el-menu-item index="/aaa">面试练习</el-menu-item>
        <el-menu-item index="/animate">animate</el-menu-item>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  mounted() {
    const result_one = this.add(1, 1);
    const result_two = this.add(1);
    console.log("result_one:", result_one);
    console.log("result_two:", result_two);
    this.$ajax.get("/users?type=c&id=1").then(res => {
      console.log(res, 9999);
    });
    this.$ajax.post("/users/bar", {
      id: 9,
      time: "2222"
    });
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getValue() {
      return 5;
    },
    add(first, second = this.getValue()) {
      return first + second;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>

<template>
  <div class="hello">
    <div>
      <button @click="handleChangeName()">点击切换名字,下面变为小张（dispatch）</button>
      <div>{{getUserName()}}</div>
      <div>{{dispatchName}}</div>
      <button @click="handleChangeCommitName()">点击切换名字,下面变为小厚(commit)</button>
      <div>{{getCommitName()}}</div>
      <div>{{commitName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      list: [],
      name: "",
      age: ""
    };
  },
  computed: {
    dispatchName() {
      return this.$store.state.name;
    },
    commitName() {
      return this.$store.state.commitName;
    }
  },
  mounted() {
  },
  methods: {
    getCommitName() {
      return this.$store.state.commitName;
    },
    handleChangeCommitName() {
      this.$store.commit("changeCommitName", "commit-小厚");
    },
    handleChangeName() {
      this.$store.dispatch("changeName", "小张");
    },
    getUserName() {
      return this.$store.state.name;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.delete {
  cursor: pointer;
  &:hover {
    color: red;
  }
}
</style>

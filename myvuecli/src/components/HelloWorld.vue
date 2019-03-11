<template>
  <div class="hello">
    <h1>hello world</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted() {
    console.log(this.$GLOBALcONFIG);
    this.$ajax
      .get("http://localhost:3000/test/search", {
        params: {
          type: 1,
          page: 1
        }
      })
      .then(res => {
        console.log(res);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>

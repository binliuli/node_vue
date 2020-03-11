<template>
  <div class="main">
    <div
      :class="color()"
      v-for="(item,index) of list"
      :key="index"
      v-on:click.prevent.self="handelClick(index)"
      :style="{'color': index==id ? 'red':'green'}"
    >{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4],
      id: "",
      obj: {
        age: 19,
        name: "dd"
      }
    };
  },
  methods: {
    color() {
      console.log(7777);
      return "color";
    },
    handelClick(index) {
      console.log(index, 999);
      this.id = index;
      console.log(Object.is("1", "1"));
      const { age } = this.obj;
      console.log(age);
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 500px;
  height: 500px;
  background: pink;
  position: relative;
}
</style>
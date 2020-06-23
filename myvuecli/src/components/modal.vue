<template>
  <div>
    <el-button type="success" @click="handelClick">点击</el-button>
    <modalCom :isDisplay="isDisplay" @close="close" :propsData="propsData" />
  </div>
</template>

<script>
import modalCom from "./modalCom.vue";
export default {
  components: { modalCom },
  data() {
    return {
      isDisplay: false,
      num: 1,
      propsData: {}
    };
  },
  methods: {
    close(data) {
      console.log(data);
      this.isDisplay = data;
    },
    handelClick() {
      this.isDisplay = true;
      console.log(this.isDisplay, 999);
      this.num++; //加加  自定义对象值
      const data = {
        name: "赵四",
        num: this.num
      };
      //异步
      setTimeout(() => {
        this.propsData = data;
      }, 200);
    }
  }
};
</script>

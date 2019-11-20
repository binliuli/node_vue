<template>
  <div>
    <el-button type="primary" @click="handelClick()">点击</el-button>
    <p v-show="isShow" class="animated" :class="animateClass">天生我材必有用</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isPlay: true,
      animateClass: "bounceInDown",
      isShow: true
    };
  },
  methods: {
    handelClick() {
      this.isPlay = !this.isPlay;
      if (this.isPlay) {
        this.animateClass = "bounceInDown";
        this.isShow = true;
      } else {
        this.animateClass = "bounceOutDown";
        setTimeout(() => {
          this.isShow = false;
        }, 500);
      }
    }
  }
};
</script>
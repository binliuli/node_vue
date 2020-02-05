<template>
  <div class="main">
    <img
      src="../assets/logo.png"
      draggable="true"
      @click="showBigPic()"
      v-on:dragstart="faceImgDrag"
      alt
    />
    <div class="tuo" v-on:ondragenter="ondragenter" v-on:drop="faceDrop" v-on:dragover="allowDrop">
      <p v-show="isDisplay">是否删除这项</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDisplay: false,
      dom: ""
    };
  },
  methods: {
    showBigPic() {
      console.log("dianji");
    },
    faceImgDrag(e) {
      console.log("拖拽", e);
      // 克隆复制 拖拽 的元素
      this.dom = e.currentTarget.cloneNode(true);
    },
    faceDrop(e) {
      e.preventDefault();
      console.log(111);
      let treeNode = e.target;
      // 拖拽到目标区域 展示
      if (treeNode) {
        treeNode.appendChild(this.dom);
      }
    },
    ondragenter(e) {
      e.preventDefault();
      console.log(22);
    },
    allowDrop(e) {
      e.preventDefault();
      console.log(333);
      // 已拖拽到 目标范围  =》 场景：拖拽删除等
      this.isDisplay = true;
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  .tuo {
    width: 500px;
    height: 500px;
    float: right;
    border: 1px solid red;
  }
}
</style>
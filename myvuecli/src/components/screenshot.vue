<template>
  <div id="cropper">
    <VueCropper
      ref="cropper"
      :img="url"
      :info="option.info"
      :outputSize="option.outputSize"
      :outputType="option.outputType"
      :canMove="option.canMove"
      :autoCrop="option.autoCrop"
      :autoCropWidth="option.autoCropWidth"
      :autoCropHeight="option.autoCropHeight"
      :fixedBox="option.fixedBox"
      :original="option.original"
      :infoTrue="option.infoTrue"
      :centerBox="option.centerBox"
      :canMoveBox="option.canMoveBox"
      :canScale="option.canScale"
      :fixed="option.fixed"
      :fixedNumber="option.fixedNumber"
    ></VueCropper>
    <el-button type="primary" @click="startCrop">开始截图</el-button>
    <el-button type="primary" @click="getData">获取截图数据</el-button>
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";
export default {
  components: { VueCropper },
  data() {
    return {
      option: {
        outputSize: 1, // 裁剪生成图片的质量 0.1 - 1
        outputType: "jpg", //	裁剪生成图片的格式 jpeg || png || webp
        canScale: true, // 图片是否允许滚轮缩放 默认true
        autoCrop: false, // 是否默认生成截图框 默认false
        canMove: false, //上传图片是否可以移动 默认true
        // autoCropWidth: 0, //默认生成截图框宽度	容器的80%	0~max
        // autoCropHeight: 0, //默认生成截图框高度	容器的80%	0~max
        fixedBox: false, // 固定截图框大小 不允许改变	false	true | false
        original: false, // 上传图片按照原始比例渲染	false	true | false
        infoTrue: true, // 为展示真实输出图片宽高 false 展示看到的截图框宽高	false	true | false
        centerBox: true, // 截图框是否被限制在图片里面	false	true | false
        canMoveBox: true, //截图框能否拖动	true	true | false
        fixed: false ////是否开启截图框宽高固定比例
        // fixedNumber: [750, 256] // 截图框的宽高比例 [宽度, 高度]
      },
      url: "http://192.168.1.174/file/2225/1.jpg",
      cropperSrc: "",
      param: {
        // 上传参数
        originalFilename: "",
        contentType: "image/png",
        base64: "" // 我们接口要求不要data:image/png;base64,
      },
      flag: true,
      percentage: 0 // 上传进度
    };
  },
  methods: {
    getData() {
      this.$refs.cropper.getCropData(data => {
        console.log(data);
        console.log(data.replace("data:image/png;base64,", ""));
      });
      const data = this.$refs.cropper.getCropAxis();
      console.log(data);
      setTimeout(() => {
        this.$refs.cropper.clearCrop();
        this.$refs.cropper.stopCrop();
      },1000);
    },
    startCrop() {
      this.$refs.cropper.startCrop();
    }
  }
};
</script>
<style scoped lang="less">
#cropper {
  margin: 0 auto;
  height: 300px;
  width: 300px;
}
</style>


<template>
  <div>
    <div>
      <el-button @click="callCamera">打开摄像头</el-button>
    </div>
    <div style="width:700px;float:left;border:1px solid;">
      <p>选择的摄像头照片</p>
      <canvas ref="canvas" width="640" height="480"></canvas>
    </div>
    <div style="width:700px;float:left;border:1px solid;">
      <p>摄像头区域</p>
      <video ref="video" width="640" height="480" autoplay></video>
    </div>
    <el-button @click="photograph">确认拍照</el-button>
    <el-button type="primary" @click="closeCamera">关闭摄像头</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headImgSrc: require("@/assets/logo.png")
    };
  },
  methods: {
    // 调用摄像头
    callCamera() {
      // H5调用电脑摄像头API
      navigator.mediaDevices
        .getUserMedia({
          video: true
        })
        .then(success => {
          // 摄像头开启成功
          this.$refs["video"].srcObject = success;
          // 实时拍照效果
          this.$refs["video"].play();
        })
        .catch(error => {
          console.error(error + "摄像头开启失败，请检查摄像头是否可用！");
        });
    },
    // 拍照
    photograph() {
      let ctx = this.$refs["canvas"].getContext("2d");
      // 把当前视频帧内容渲染到canvas上
      ctx.drawImage(this.$refs["video"], 0, 0, 640, 480);
      // 转base64格式、图片格式转换、图片质量压缩
      let imgBase64 = this.$refs["canvas"].toDataURL("image/jpeg", 0.7); // 由字节转换为KB 判断大小
      console.log(imgBase64, 999); //拍照照片 转base64
      let str = imgBase64.replace("data:image/jpeg;base64,", "");
      let strLength = str.length;
      let fileLength = parseInt(strLength - (strLength / 8) * 2); // 图片尺寸  用于判断
      let size = (fileLength / 1024).toFixed(2);
      console.log(size); // 上传拍照信息  调用接口上传图片 .........

      // 拍照的 图片保存在本地
      let ADOM = document.createElement("a");
      ADOM.href = imgBase64;
      ADOM.download = new Date().getTime() + ".jpeg";
      ADOM.click();
    },
    // 关闭摄像头
    closeCamera() {
      if (!this.$refs["video"].srcObject) return;
      let stream = this.$refs["video"].srcObject;
      stream.getTracks()[0].stop(); //直接用此方法 直接关闭了
      //   let tracks = stream.getTracks()[0].stop();
      //   tracks.forEach(track => {
      //     track.stop();
      //   });
      this.$refs["video"].srcObject = null;
    }
  }
};
</script>

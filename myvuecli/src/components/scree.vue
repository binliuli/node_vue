<template>
  <div>
    <el-button @click="screenShot()">截图</el-button>
    <div ref="screen">
      <p>1234</p>
      <p>党内监督几女</p>
      <p>的数据三年是</p>
      <p>的时间结束</p>
    </div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
export default {
  methods: {
    //截屏
    screenShot() {
      html2canvas(this.$refs.screen, {
        backgroundColor: "#FFFFFF",
        useCORS: true
      }).then(canvas => {
        if (navigator.msSaveBlob) {
          // IE10+
          let blob = canvas.msToBlob();
          return navigator.msSaveBlob(blob, name);
        } else {
          let imageurl = canvas.toDataURL("image/png");
          //这里需要自己选择命名规则
          let imagename = "";
          this.fileDownload(imageurl, imagename);
        }
      });
    },
    //下载截屏图片
    fileDownload(downloadUrl, downloadName) {
      let aLink = document.createElement("a");
      aLink.style.display = "none";
      aLink.href = downloadUrl;
      aLink.download = `${downloadName}.jpg`;
      // 触发点击-然后移除
      document.body.appendChild(aLink);
      aLink.click();
      document.body.removeChild(aLink);
    }
  }
};
</script>

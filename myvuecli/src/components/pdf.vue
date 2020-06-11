<template>
  <div class="pdf">
    <p class="arrow">
      <!-- // 上一页 -->
      <span
        @click="changePdfPage(0)"
        class="turn"
        :class="{ grey: currentPage == 1 }"
        >上一页</span
      >
      {{ currentPage }} / {{ pageCount }}
      <!-- // 下一页 -->
      <span
        @click="changePdfPage(1)"
        class="turn"
        :class="{ grey: currentPage == pageCount }"
        >下一页</span
      >
    </p>
    <!-- // 自己引入就可以使用,这里我的需求是做了分页功能,如果不需要分页功能,只要src就可以了 -->
    <div class="pdfs">
      <pdf
        :src="src"
        :page="currentPage"
        @num-pages="pageCount = $event"
        @page-loaded="currentPage = $event"
        @loaded="loadPdfHandler"
      ></pdf>
    </div>
  </div>
</template>

<script>
import pdf from "vue-pdf";
export default {
  components: { pdf },
  data() {
    return {
      currentPage: 0, // pdf文件页码
      pageCount: 0, // pdf文件总页数
      src:
        "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf" // pdf文件地址
    };
  },
  created() {
    // 有时PDF文件地址会出现跨域的情况,这里最好处理一下
    this.src = pdf.createLoadingTask(this.src);
  },
  methods: {
    // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
    changePdfPage(val) {
      console.log(val);
      if (val === 0 && this.currentPage > 1) {
        this.currentPage--;
        // console.log(this.currentPage)
      }
      if (val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++;
        // console.log(this.currentPage)
      }
    },

    // pdf加载时
    loadPdfHandler(e) {
      this.currentPage = 1; // 加载的时候先加载第一页
    }
  }
};
</script>

<style lang="less" scoped>
.pdfs {
  width: 756px;
  background: pink;
  border: 1px solid;
}
</style>

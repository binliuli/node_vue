<template>
  <div class="wxsmallcode-page publicCon">
    <div class="copyBox">
      sysAppId：
      <span>{{sysAppIds}}</span>
      <el-button
        class="ml10"
        type="text"
        size="medium"
        v-clipboard:copy="sysAppIds"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >点击复制</el-button>
    </div>
    <div @mouseup="handelMouseUp()">选中复制试试看，打印内容</div>
    <div>鼠标选中的内容：{{text}}</div>
    <el-button type="primary" @click="handelGetCon()">获取选中的内容</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sysAppIds: "不积跬步无以至千里",
      text: ""
    };
  },
  methods: {
    handelGetCon() {
      const text = window.getSelection().toString();
      this.text = text;
      console.log(text, 99);
    },
    handelMouseUp() {
      const text = window.getSelection().toString();
      this.text = text;
      console.log(text, 99);
    },
    // 复制成功
    onCopy(e) {
      console.log(e);
    },
    // 复制失败
    onError(e) {
      alert("失败");
    }
  }
};
</script>
<template>
  <div>
    <div>
      <input @click="doTTS" id="tts_btn" type="button" value="播放" />
      <input @click="doZT" id="zt_btn" type="button" value="暂停" />
    </div>
    <el-button @click="handelTo">跳转至keepalive</el-button>
    <div id="wrapp"></div>
  </div>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    console.log(to, from, "播报页面");
    // 设置下一个路由的 meta
    to.meta.keepAlive = false;
    next();
  },
  data() {
    return {
      text:
        "我们都是中国人，中华儿女,我们都是中国人，中华儿女,我们都是中国人，中华儿女",
      url: "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=3&text=",
      audio: new Audio()
    };
  },
  mounted() {
    console.log("语音播报");
  },
  methods: {
    handelTo() {
      this.$router.push({ path: "/alive" });
    },
    doTTS() {
      this.audio.src = this.url + this.text;
      this.audio.play();
    },
    doZT() {
      this.audio.pause();
    }
  }
};
</script>

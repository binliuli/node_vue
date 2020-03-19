<template>
  <div>
    <div>
      <input @click="doTTS" id="tts_btn" type="button" value="播放" />
      <input @click="doZT" id="zt_btn" type="button" value="暂停" />
    </div>
    <div id="wrapp"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text:
        "我们都是中国人，中华儿女,我们都是中国人，中华儿女,我们都是中国人，中华儿女",
      url: "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=3&text=",
      audio: new Audio()
    };
  },
  methods: {
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

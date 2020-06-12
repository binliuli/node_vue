<template>
  <div>
    <div class="wrap">
      <input type="file" @change="fileChange" multiple />
      <div
        v-for="(item, index) of pdf"
        :key="index"
        @click="showPdf(item)"
        style="width:102px;height:102px;background:#fff;display:flex; justify-content: center;"
      >
        <pdf :src="item" style="width:70px;height:102px;"></pdf>
      </div>
    </div>
  </div>
</template>

<script>
import pdf from "vue-pdf";
export default {
  components: {
    pdf
  },
  data() {
    return {
      pdf: []
    };
  },
  methods: {
    fileChange(e) {
      let that = this;
      let file = e.target.files[0];
      console.log(e.target.files);
      console.log("fileSize = ", file.size);
      let reader = new FileReader();
      reader.onload = async function(event) {
        console.log(event.target.result);
        let base64 = event.target.result.split(",")[1];
        let decodedBase64 = atob(base64);
        console.log(789678);
        that.pdf.push({ data: decodedBase64 });
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

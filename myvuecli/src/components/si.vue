<template>
  <div style="height:500px">
    <mindmap v-model="data" style="height:500px"></mindmap>
  </div>
</template>

<script>
import mindmap from "@hellowuxin/mindmap";

export default {
  name: "App",
  components: {
    mindmap
  },
  data() {
    return {
      data: [
        {
          name: "87999",
          children: [
            {
              name: "2",
              children: [
                { name: "12", children: [] },
                { name: "23", children: [] },
                { name: "24", children: [] }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

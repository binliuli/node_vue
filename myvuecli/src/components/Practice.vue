<template>
  <div>
    <div class="div1">
      <vuedraggable class="wrapper" v-model="list" :options="{group:'people',}" @end="end">
        <div v-for="item in list" :key="item" class="item">
          <p>{{item}}</p>
        </div>
      </vuedraggable>
    </div>

    <div>电动机的角度讲</div>
    <div class="div2">
      <vuedraggable class="wrapper" v-model="list2" :options="{group:'people',}">
        <div v-for="item in list2" :key="item" class="item">
          <p>{{item}}</p>
        </div>
      </vuedraggable>
    </div>
    <div class="div3">
      <vuedraggable class="wrapper_09" v-model="list2" :options="{group:'people',}">
        <div class="item">区域</div>
      </vuedraggable>
    </div>
  </div>
</template>

<script>
import vuedraggable from "vuedraggable";
export default {
  components: { vuedraggable },
  data() {
    return {
      list: [1, 2, 34, 4, 54],
      list2: [1333, 2333, 34333]
    };
  },
  updated() {
    console.log("list:", this.list);
    console.log("list2:", this.list2);
  },
  mounted() {},
  methods: {
    end(ev){
      console.log(ev.to.className)
    }
  }
};
</script>
<style scoped>
/* .wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
} */
.wrap {
  width: 100%;
  height: 200px;
}
.item {
  width: 300px;
  height: 50px;
  background-color: #42b983;
  color: #ffffff;
  margin-right: 10px;
  float: left;
  margin-top: 10px;
}
.div1 {
  width: 100%;
  height: 200px;
  background: pink;
}
.sortable-ghost {
  background: red;
}
.sortable-chosen {
  background: #400040;
}
.div2 {
  overflow: hidden;
  margin-bottom: 20px;
}
.div3 {
  width: 300px;
  height: 300px;
  background: yellowgreen;
}
</style>
<template>
  <div id="app">
    <router-view/>
    <div id="div1">
      <div class="w-center">
        <input type="text" @focus="show=true" v-model="key">
        <ul v-show="show">
          <li v-for="(item,index) of filterArr" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      key: "",
      arr: ["abc", "bcd", "cde"],
      show: false
    };
  },
  computed: {
    filterArr() {
      if (this.key) {
        let arr = this.arr.filter(k => k.includes(this.key));
        return arr;
      } else {
        return this.arr;
      }
    }
  },
  methods: {
    filter(val) {
      console.log(arr);
    }
  }
};
</script>
<style lang="less">
// @import "http://visjs.org/dist/vis-network.min.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#div1 {
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid red;
  margin-top: 20px;
  .w-center {
    width: 200px;
    height: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ul {
    border: 1px solid grey;
  }
  li {
    list-style: none;
    text-align: left;
  }
}
</style>

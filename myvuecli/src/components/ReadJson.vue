<template>
  <div class="hello">
      <div>
        姓名：
        <input type="text" v-model="name">
        年龄：
        <input type="text" v-model="age"> &nbsp;&nbsp;&nbsp;&nbsp;
        <button class="delete" @click="handelAdd()">添加</button>
      </div>
      <div v-for="item of list" :key="item.id">
        姓名：{{item.name}} &nbsp;&nbsp;&nbsp;&nbsp;年龄：{{item.age}}&nbsp;&nbsp;&nbsp;&nbsp;
        <span
          class="delete"
          v-on:click="handelDelete(item.id)"
        >删除</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      list: [],
      name: "",
      age: ""
    };
  },
  mounted() {
    console.log(this.$GLOBALcONFIG);
    this.$ajax
      .get(this.$GLOBALCONFIG.webapi + "/test/search", {
        params: {
          type: 1,
          page: 1
        }
      })
      .then(res => {
        console.log(res);
      });

    this.$ajax.get(this.$GLOBALCONFIG.webapi + "/test/list").then(res => {
      console.log(res);
      this.list = res.data.data;
    });
  },
  methods: {
    handelAdd() {
      console.log(this.name);
      const data = {
        name: this.name,
        age: this.age
      };
      this.$ajax
        .get(this.$GLOBALCONFIG.webapi + "/test/add", {
          params: data
        })
        .then(res => {
          this.list = res.data.data;
        });
      this.name = "";
      this.age = "";
    },
    handelDelete(id) {
      this.$ajax
        .get(this.$GLOBALCONFIG.webapi + "/test/delete", {
          params: {
            id: id
          }
        })
        .then(res => {
          this.list = res.data.data;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.delete {
  cursor: pointer;
  &:hover {
    color: red;
  }
}
</style>

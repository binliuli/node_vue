<template>
  <div class="hello">
    <div>
      <button @click="handleChangeName()">点击切换名字,下面变为小张（dispatch）</button>
      <div>{{getUserName()}}</div>
      <div>{{dispatchName}}</div>
      <button @click="handleChangeCommitName()">点击切换名字,下面变为小厚(commit)</button>
      <div>{{getCommitName()}}</div>
      <div>{{commitName}}</div>
    </div>
    <div id="div2">
      <input type="text" v-model="letter" @input="changeState">
      <div class="show" v-if="this.showLetter.length">
        <li v-for="(item,index) in this.showLetter" :key="index">{{item}}</li>
      </div>
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
      age: "",
      letter: "",
      showLetter: [],
      letterList: ["a", "abc", "abcd", "bc", "bcd", "bcde"]
    };
  },
  computed: {
    dispatchName() {
      return this.$store.state.name;
    },
    commitName() {
      return this.$store.state.commitName;
    }
  },
  mounted() {},
  methods: {
    getCommitName() {
      return this.$store.state.commitName;
    },
    handleChangeCommitName() {
      this.$store.commit("changeCommitName", "commit-小厚");
    },
    handleChangeName() {
      this.$store.dispatch("changeName", "小张");
    },
    getUserName() {
      return this.$store.state.name;
    },
    changeState(e) {
      this.showLetter=[]
      let letters = e.target.value.trim();
      this.letter = letters;
      console.log(letters);
      this.letterList.forEach((item, index) => {
        if (item.search(letters) !== -1) {
          this.showLetter.push(item);
        }
      });
      this.showLetter = [...new Set(this.showLetter)];
      //console.log([...new Set(this.showLetter)])
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
#div2 {
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  margin-top: 20px;
}
</style>

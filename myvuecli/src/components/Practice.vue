<template>
  <div>
    <button @click="handelClick()">点击</button>
    <p v-for="item of users" :key="item">{{item}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    const user = [1, 2, 3, 4, 5, 6];
    this.users = Object.freeze(user);
  },
  methods: {
    handelClick() {
      const newArr = [7, 8, 9, 10];
    //   this.users.push(10)
      this.users = newArr;
    }
  }
};
</script>

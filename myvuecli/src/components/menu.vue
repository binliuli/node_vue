<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <!-- <el-submenu index="1">
        <div slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">发票</span>
        </div>
        <el-submenu index="2">
          <span slot="title">发票集</span>
          <el-menu-item index="3">发票1</el-menu-item>
          <el-menu-item index="4">发票22</el-menu-item>
        </el-submenu>
        <el-menu-item index="5">A发票</el-menu-item>
      </el-submenu>
      <el-submenu index="1">
        <div slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">租船合约</span>
        </div>
        <el-menu-item index="5">租船合约1</el-menu-item>
        <el-menu-item index="5">租船合约2</el-menu-item>
      </el-submenu>-->
      <el-submenu index="1" v-for="item of data" :key="item.id">
        <div slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.title}}</span>
        </div>
        <!--  -->
        <div v-for="ite of item.arr" :key="ite.id">
          <el-submenu v-if="ite.arr && ite.arr.length>0" index="2">
            <span slot="title">{{ite.title}}</span>
            <el-menu-item index="3" v-for="it of ite.arr" :key="it.id">{{it.title}}</el-menu-item>
          </el-submenu>
          <el-menu-item index="5" v-else>{{ite.title}}</el-menu-item>
        </div>
        <!--  -->
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      data: [
        {
          title: "发票",
          id: 1,
          arr: [
            {
              title: "发票集",
              id: 3,
              arr: [
                {
                  title: "发票11",
                  id: "22"
                },
                {
                  title: "发票22",
                  id: "223"
                }
              ]
            },
            {
              title: "A发票",
              id: "99"
            }
          ]
        },
        {
          title: "租船合约",
          id: "890",
          arr: [
            {
              title: "租船合约1",
              id: "6789"
            },
            {
              title: "租船合约2",
              id: "456"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

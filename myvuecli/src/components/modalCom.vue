<template>
  <div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <div>{{ data }}</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <!-- <el-button type="primary" @click="dialogVisible = false"
          >确定</el-button
        >-->
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  //父组件传过来的值
  props: {
    isDisplay: {
      default() {
        return {};
      }
    },
    propsData: {
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      dialogVisible: false,
      data: {}
    };
  },
  methods: {
    close() {
      this.$emit("close", false);
    }
  },
  watch: {
    //监听value的变化，进行相应的操作即可
    isDisplay: {
      handler(a, b) {
        console.log(a, b, 8989);
        this.dialogVisible = a;
      },
      deep: true
    },
    propsData: {
      handler(a, b) {
        // a:新值   b:旧值 监听父组件传过来的值
        console.log(a, b, 1212);
        a.name = "哈哈";
        this.data = a;
      },
      deep: true //对复杂对象的深度监听
    }
  }
};
</script>

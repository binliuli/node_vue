<template>
  <div class="hello">
    <div id="mynetwork"></div>
  </div>
</template>

<script>
import vis from "vis";
import { setTimeout } from "timers";
export default {
  data() {
    return {};
  },
  mounted() {
    let nodesArr = [
      {
        id: 1,
        label: "待解决案件的三",
        shape: "circle",
        margin: 10,
        color: "#FFFF00"
      },
      { id: 2, label: "点击", shape: "circle", margin: 10 },
      { id: 3, label: "的金三角", shape: "circle", margin: 10 },
      { id: 4, label: "思考角度讲", shape: "circle", margin: 10 },
      { id: 5, label: "十几家设计师", shape: "circle", margin: 10 }
    ];
    let edgesArr = [
      {
        id: 10,
        from: 1,
        to: 3,
        label: "关系",
        color: { color: "rgba(30,30,30,0.6)", highlight: "red" }
      },
      {
        id: 20,
        from: 1,
        to: 2,
        color: { color: "rgba(30,30,30,0.6)", highlight: "red" }
      },
      {
        id: 30,
        from: 2,
        to: 4,
        color: { color: "rgba(30,30,30,0.6)", highlight: "red" }
      },
      {
        id: 40,
        from: 2,
        to: 5,
        color: { color: "rgba(30,30,30,0.6)", highlight: "red" }
      }
    ];
    var nodes = new vis.DataSet(nodesArr);
    var edges = new vis.DataSet(edgesArr);

    // create a network
    var container = document.getElementById("mynetwork");
    // container.style.width = 800 + "px";
    // container.style.height = 500 + "px";
    var data = {
      nodes: nodes,
      edges: edges
    };
    var options = {
      layout: { randomSeed: 2 }, // just to make sure the layout is the same when the locale is changed
      locales: {
        en: {
          edit: "编辑",
          del: "隐藏"
        }
      },
      manipulation: {
        // enabled: true,
        initiallyActive: true,
        addNode: false,
        addEdge: false,
        editEdge: false
      },
      edges: {
        shadow: true, //连接线阴影配置
        smooth: true, //是否显示方向箭头
        arrows: { to: true } //箭头指向from节点
      },
      //设置节点的相互作用
      interaction: {
        //鼠标经过改变样式
        hover: true
        //设置禁止缩放
        //zoomView:false
      },
      //力导向图效果
      physics: {
        enabled: true,
        barnesHut: {
          gravitationalConstant: -4000,
          centralGravity: 0.3,
          springLength: 120,
          springConstant: 0.04,
          damping: 0.09,
          avoidOverlap: 0
        }
      },
      nodes: {
        // shape: "dot",
        size: 30,
        color: {
          background: "#fff"
        },
        widthConstraint: {
          maximum: 30
        },
        font: {
          size: 12,
          color: "red"
        },
        borderWidth: 1,
        shadow: true
      }
    };

    var network = new vis.Network(container, data, options);

    // let stabilizedTimer;
    // network.on("stabilized", function (params) {
    //   window.clearTimeout(stabilizedTimer);
    //   stabilizedTimer = setTimeout(function () {
    //     options.physics.enabled = false; // 开启物理系统
    //     network.setOptions(options);
    //     // _this.loading = false;//监听 图绘制完 =》取消loading效果
    //   }, 200);
    // });

    network.on("oncontext", function(params) {
      console.log("右击");
    });

    network.on("dragEnd", function(params) {
      console.log("拖动结束后");
      if (params.nodes && params.nodes.length > 0) {
        network.clustering.updateClusteredNode(params.nodes[0], {
          physics: false
        });
      }
    });

    network.on("doubleClick", function(params) {
      console.log("双击");
      if (params.nodes.length != 0) {
        const id = network.body.data.nodes._data[params.nodes[0]].id;
        console.log(id);
        console.log(params);
        // 通过id获取后台数据

        // 添加节点
        nodes.add({
          id: 6,
          label: "哒哒哒哒哒哒",
          shape: "circle",
          margin: 10
        });
        edges.add({
          id: 50,
          from: 5,
          to: 6,
          color: { color: "rgba(30,30,30,0.6)", highlight: "red" }
        });
      }
    });

    network.on("dragging", function(params) {
      console.log("拖动节点");
    });

    network.on("zoom", function(params) {
      console.log("缩放");
    });

    network.on("click", function(params) {
      console.log("选中节点");
      console.log(params.edges);
    });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "http://visjs.org/dist/vis-network.min.css";
#mynetwork {
  position: relative;
  width: 800px;
  height: 600px;
  border: 1px solid lightgray;
}
div.vis-network div.vis-edit-mode div.vis-label {
  width: 30px;
}
div.vis-network div.vis-close {
  display: none !important;
}
</style>

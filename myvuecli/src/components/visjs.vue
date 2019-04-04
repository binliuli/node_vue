<template>
  <div class="hello">
    <div id="mynetwork"></div>
  </div>
</template>

<script>
import vis from "vis";
export default {
  data() {
    return {};
  },
  mounted() {
    var nodes = new vis.DataSet([
      { id: 1, label: "Node 1" },
      { id: 2, label: "Node 2" },
      { id: 3, label: "Node 3" },
      { id: 4, label: "Node 4" },
      { id: 5, label: "Node 5" }
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
      {
        from: 1,
        to: 3,
        label: "关系",
        color: { color: "rgba(30,30,30,0.6)", highlight: "red" }
      },
      {
        from: 1,
        to: 2,
        color: { color: "rgba(30,30,30,0.6)", highlight: "red" }
      },
      {
        from: 2,
        to: 4,
        color: { color: "rgba(30,30,30,0.6)", highlight: "red" }
      },
      {
        from: 2,
        to: 5,
        color: { color: "rgba(30,30,30,0.6)", highlight: "red" }
      }
    ]);

    // create a network
    var container = document.getElementById("mynetwork");
    container.style.width = 800 + "px";
    container.style.height = 500 + "px";
    var data = {
      nodes: nodes,
      edges: edges
    };
    var options = {
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
        shape: "dot",
        size: 30,
        color: {
          background: "#fff"
        },
        font: {
          size: 16,
          color: "red"
        },
        borderWidth: 1,
        shadow: false
      }
    };
    var network = new vis.Network(container, data, options);
    network.on("dragEnd", function(params) {
      if (params.nodes && params.nodes.length > 0) {
        network.clustering.updateClusteredNode(params.nodes[0], {
          physics: false
        });
      }
    });
    network.on("click", function(params) {
      console.log(
        "click event, getNodeAt returns: " + this.getNodeAt(params.pointer.DOM)
      );
    });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>

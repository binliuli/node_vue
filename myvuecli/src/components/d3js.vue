<template>
  <div class="hello">
    <div id="d3"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      src: require("./../assets/m.jpg")
    };
  },
  mounted() {
    var width = 1200;
    var height = 500;
    var img_w = 77;
    var img_h = 90;
    var radius = 30; //圆形半径

    var svg = d3
      .select("#d3")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    var root = {
      nodes: [
        { name: "云天河", image: this.src },
        { name: "韩菱纱", image: this.src },
        { name: "柳梦璃", image: this.src },
        { name: "慕容紫英", image: this.src },
        { name: "云天青", image: this.src },
        { name: "夙玉", image: this.src },
        { name: "玄霄", image: this.src },
        { name: "夙瑶", image: this.src },
        { name: "太清", image: this.src },
        { name: "宗炼", image: this.src },
        { name: "婵幽", image: this.src },
        { name: "奚仲", image: this.src },
        { name: "归邪", image: this.src }
      ],
      edges: [
        { source: 0, target: 1, relation: "挚友" },
        { source: 0, target: 2, relation: "挚友" },
        { source: 0, target: 3, relation: "挚友" },
        { source: 1, target: 2, relation: "挚友" },
        { source: 1, target: 3, relation: "挚友" },
        { source: 2, target: 3, relation: "挚友" },
        { source: 0, target: 4, relation: "父子" },
        { source: 0, target: 5, relation: "母子" },
        { source: 4, target: 5, relation: "夫妻" },
        { source: 0, target: 6, relation: "义兄弟" },
        { source: 4, target: 6, relation: "同门" },
        { source: 5, target: 6, relation: "同门" },
        { source: 4, target: 7, relation: "同门" },
        { source: 5, target: 7, relation: "同门" },
        { source: 6, target: 7, relation: "同门" },
        { source: 4, target: 8, relation: "师徒" },
        { source: 5, target: 8, relation: "师徒" },
        { source: 6, target: 8, relation: "师徒" },
        { source: 7, target: 8, relation: "师徒" },
        { source: 8, target: 9, relation: "同门" },
        { source: 3, target: 9, relation: "师徒" },
        { source: 2, target: 10, relation: "母子" },
        { source: 10, target: 11, relation: "主臣" },
        { source: 10, target: 12, relation: "主臣" },
        { source: 11, target: 12, relation: "同僚" }
      ]
    };
    //D3力导向布局
    var force = d3.layout
      .force()
      .nodes(root.nodes)
      .links(root.edges)
      .size([width, height])
      .linkDistance(200)
      .charge(-2000)
      .start();

    var marker = svg
      .append("marker")
      //.attr("id", function(d) { return d; })
      .attr("id", "resolved")
      //.attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
      .attr("markerUnits", "userSpaceOnUse")
      .attr("viewBox", "0 -5 10 10") //坐标系的区域
      .attr("refX", 33) //箭头坐标
      .attr("refY", 0)
      .attr("markerWidth", 12) //标识的大小
      .attr("markerHeight", 12)
      .attr("orient", "auto") //绘制方向，可设定为：auto（自动确认方向）和 角度值
      .attr("stroke-width", 2) //箭头宽度
      .append("path")
      .attr("d", "M0,-5L10,0L0,5") //箭头的路径
      .attr("fill", "#000000"); //箭头颜色

    //线
    var edges_line = svg
      .selectAll("line")
      .data(root.edges)
      .enter()
      .append("line")
      .style("stroke", "#ccc")
      .style("stroke-width", 2)
      .attr("marker-end", "url(#resolved)") //根据箭头标记的id号标记箭头
      .on("click", function(d, i) {
        console.log(d, i, "线");
      });

    //边上的文字（人物之间的关系）
    var edges_text = svg
      .selectAll(".linetext")
      .data(root.edges)
      .enter()
      .append("text")
      .attr("class", "linetext")
      .text(function(d) {
        return d.relation;
      })
      .on("click", function(d, i) {
        console.log(d, i, "人物之间的关系");
      });

    var drag = force.drag().on("dragstart", function(d, i) {
      d.fixed = true; //拖拽开始后设定被拖拽对象为固定
      // label_text_2.text("拖拽状态：开始");
    });
    // .on("dragend", function (d, i) {
    //     label_text_2.text("拖拽状态：结束");
    // })
    // .on("drag", function (d, i) {
    //     label_text_2.text("拖拽状态：进行中");
    // });

    // 圆形图片节点（人物头像）
    var nodes_img = svg
      .selectAll("image")
      .data(root.nodes)
      .enter()
      .append("circle")
      .attr("class", "circleImg")
      .attr("r", radius)
      .attr("fill", function(d, i) {
        //创建圆形图片
        var defs = svg.append("defs").attr("id", "imgdefs");

        var catpattern = defs
          .append("pattern")
          .attr("id", "catpattern" + i)
          .attr("height", 1)
          .attr("width", 1);

        catpattern
          .append("image")
          .attr("x", -(img_w / 2 - radius))
          .attr("y", -(img_h / 2 - radius))
          .attr("width", img_w)
          .attr("height", img_h)
          .attr("xlink:href", d.image);

        return "url(#catpattern" + i + ")";
      })
      .on("mouseover", function(d, i) {
        // //显示连接线上的文字
        // edges_text.style("fill-opacity", function (edge) {
        //     if (edge.source === d || edge.target === d) {
        //         return 1.0;
        //     }
        // });
      })
      .on("mouseout", function(d, i) {
        //隐去连接线上的文字
        // edges_text.style("fill-opacity", function (edge) {
        //     if (edge.source === d || edge.target === d) {
        //         return 0.0;
        //     }
        // });
      })
      .on("click", function(d, i) {
        edges_text.style("fill", function(edge) {
          if (edge.source === d || edge.target === d) {
            return "#f31515";
          }
        });
        edges_line.style("stroke", function(edge) {
          if (edge.source === d || edge.target === d) {
            return "#f31515";
          } else {
            return "#ccc";
          }
        });
      })
      .call(drag);

    var text_dx = -20;
    var text_dy = 20;

    var nodes_text = svg
      .selectAll(".nodetext")
      .data(root.nodes)
      .enter()
      .append("text")
      .attr("class", "nodetext")
      .attr("dx", text_dx)
      .attr("dy", text_dy)
      .text(function(d) {
        return d.name;
      })
      .on("click", function(d, i) {
        console.log(d, i, "点击名字");
      });

    force.on("tick", function() {
      //限制结点的边界
      root.nodes.forEach(function(d, i) {
        d.x = d.x - img_w / 2 < 0 ? img_w / 2 : d.x;
        d.x = d.x + img_w / 2 > width ? width - img_w / 2 : d.x;
        d.y = d.y - img_h / 2 < 0 ? img_h / 2 : d.y;
        d.y =
          d.y + img_h / 2 + text_dy > height
            ? height - img_h / 2 - text_dy
            : d.y;
      });

      //更新连接线的位置
      edges_line.attr("x1", function(d) {
        return d.source.x;
      });
      edges_line.attr("y1", function(d) {
        return d.source.y;
      });
      edges_line.attr("x2", function(d) {
        return d.target.x;
      });
      edges_line.attr("y2", function(d) {
        return d.target.y;
      });

      //更新连接线上文字的位置
      edges_text.attr("x", function(d) {
        return (d.source.x + d.target.x) / 2;
      });
      edges_text.attr("y", function(d) {
        return (d.source.y + d.target.y) / 2;
      });

      //更新结点图片和文字
      nodes_img.attr("cx", function(d) {
        return d.x;
      });
      nodes_img.attr("cy", function(d) {
        return d.y;
      });

      nodes_text.attr("x", function(d) {
        return d.x;
      });
      nodes_text.attr("y", function(d) {
        return d.y + img_w / 2;
      });
    });
  },
  methods: {}
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

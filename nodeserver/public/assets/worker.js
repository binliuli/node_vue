/* eslint-disable */
importScripts('/d3.js');
onmessage = function (event) {
  var nodes = event.data.nodes,
    links = event.data.links,
    type = event.data.type,
    center = event.data.center,
    cx = event.data.cx,
    cy = event.data.cy,
    hasForce = false;


  nodes.forEach(function (n) {
    if (!n.locked) {
      delete n.fx;
      delete n.fy;
    } else {
      hasForce = true;
      n.fx = n.x;
      n.fy = n.y;
    }
    if (n.group || n.type === 'group') {
      n.fx = n.x;
      n.fy = n.y;
    }
  });

  // 关联节点
  links.forEach(function (_n) {
    nodes.forEach(function (nd) {
      nd.weight = nd.weight || 1;
      if (nd.x == _n.source.x && nd.y == _n.source.y && nd.id == _n.source.id) {
        nd.weight += 1;
        _n.source = nd;
        _n.keep = true;
      }
      if (nd.x == _n.target.x && nd.y == _n.target.y && nd.id == _n.target.id) {
        nd.weight += 1;
        _n.target = nd;
        _n.keep = true;
      }
    });
  });

  links = links.filter(function (l) {
    return l.keep;
  });

  if (type.match(/force|center/)) {
    var simulation = d3.forceSimulation(nodes);

    if (type === 'force') {
      simulation = simulation
        .force("charge", d3.forceManyBody().strength(-40).distanceMax(500))
        // .force("x1", d3.forceX().strength(0.1).x(cx))
        // .force("y", d3.forceY().strength(0.1).y(cx))
        .force("circle", d3.forceCollide(20))
        // .force("center", d3.forceCenter(0, 0).strength(-200))
        // .force("radial", d3.forceRadial(
        //   (d) => { 
        //     console.log(d.weight);
        //     return d.weight > 3 ? 800 : 600; 
        //   }
        //   , 0, 0)
        // )
        .force("link", d3.forceLink(links).distance(300).strength(0.1));
      if(!hasForce) {
        simulation = simulation.force("center", d3.forceCenter(0, 0));
      }
    }
    if (type === 'circle') {
      simulation = simulation
        .force("circle", d3.forceCollide(45))
        // .force("center", d3.forceCenter(center.x, center.y))
        .force("radial", d3.forceRadial(180, center.x, center.y))
      // .force("center", d3.forceCenter(center.x, center.y))
    }
    let centerData;
    if (type === 'center' && selectedNodes.length === 1) {
      centerData = selectedNodes[0];
      centerData.fx = centerData.x;
      centerData.fy = centerData.y;
      simulation = simulation.force("charge", d3.forceManyBody().strength(-50))
        .force("circle", d3.forceCollide(30))
        .force("center", d3.forceCenter(centerData.x, centerData.y))
        .force("link", d3.forceLink(this.links).distance(50).strength(1))
      // .force("center", d3.forceCenter(center.x, center.y))
    }
    simulation.stop();


    simulation.velocityDecay(0.02);
    // simulation.velocityDecay(0.);
    for (var i = 0, n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())); i < n; ++i) {
      // postMessage({type: "tick", progress: i / n});
      simulation.tick();
    }

    if (centerData) {
      centerData.fx = null;
      centerData.fy = null;
    }
  }

  if (type === 'grid') {
    var gridNodes = nodes.filter(n => {
      return !n.locked
    })
    var gridSize = 80,
      size = Math.ceil(Math.sqrt(gridNodes.length));
    var startX = Math.min.apply(Math, gridNodes.map(function (n) {
      return n.x
    }));
    var startY = Math.min.apply(Math, gridNodes.map(function (n) {
      return n.y
    }));
    gridNodes.sort(function (a, b) {
      return b.weight - a.weight;
    });
    gridNodes.filter(function (n) {
      return !(n.group || n.type === 'group' || n.locked);
    }).forEach(function (n, i) {
      var row = Math.floor(i / size),
        col = i % size;
      n.x = col * gridSize + startX;
      n.y = row * gridSize + startY;
    });
  }

  if (type === 'ring') {
    (function () {
      
      var ringNodes = nodes.filter(n => {
        return !n.locked
      });

      console.log(ringNodes);

      var offsetX = Math.min.apply(Math, ringNodes.map(function (n) {
        return n.x
      })),
        offsetY = Math.min.apply(Math, ringNodes.map(function (n) {
          return n.y
        }));

      var step = 30,
        l = (ringNodes.length - 1) * step,
        r = Math.max(l / 2 / Math.PI, 50);

      if(center && center.x) {
        offsetX = center.x;
        offsetY = center.y;
      }
      ringNodes.sort(function (a, b) {
        return b.weight - a.weight;
      });
      ringNodes.forEach(function (n, i) {
        var deg = i * (2 * Math.PI / ringNodes.length);
        var x = r * Math.cos(deg) + offsetX;
        var y = r * Math.sin(deg) + offsetY;
        Object.assign(n, {
          x,
          y
        });
      });
    })();
  }




  postMessage({
    type: "end",
    nodes: nodes,
    links: links
  });
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HelloWorld = function HelloWorld(r) {
  return require.ensure([], function () {
    return r(require("./components/HelloWorld.vue"));
  }, "hello-world");
};

var Vuex = function Vuex(r) {
  return require.ensure([], function () {
    return r(require("./components/Vuex.vue"));
  }, "Vuex");
};

var ReadJson = function ReadJson(r) {
  return require.ensure([], function () {
    return r(require("./components/ReadJson.vue"));
  }, "ReadJson");
};

var Vis = function Vis(r) {
  return require.ensure([], function () {
    return r(require("./components/visjs.vue"));
  }, "vis");
};

var D3 = function D3(r) {
  return require.ensure([], function () {
    return r(require("./components/d3js.vue"));
  }, "d3");
};

var Practice = function Practice(r) {
  return require.ensure([], function () {
    return r(require("./components/Practice.vue"));
  }, "Practice");
};

var menu = function menu(r) {
  return require.ensure([], function () {
    return r(require("./components/menu.vue"));
  }, "menu");
};

var screenshot = function screenshot(r) {
  return require.ensure([], function () {
    return r(require("./components/screenshot.vue"));
  }, "screenshot");
};

var Aaaa = function Aaaa(r) {
  return require.ensure([], function () {
    return r(require("./components/Aaaa.vue"));
  }, "Aaaa");
};

var copy = function copy(r) {
  return require.ensure([], function () {
    return r(require("./components/copy.vue"));
  }, "copy");
};

var animate = function animate(r) {
  return require.ensure([], function () {
    return r(require("./components/animate.vue"));
  }, "animate");
};

var tuo = function tuo(r) {
  return require.ensure([], function () {
    return r(require("./components/tuo.vue"));
  }, "tuo");
};

var she = function she(r) {
  return require.ensure([], function () {
    return r(require("./components/she.vue"));
  }, "she");
};

var wen = function wen(r) {
  return require.ensure([], function () {
    return r(require("./components/wen.vue"));
  }, "wen");
};

var alive = function alive(r) {
  return require.ensure([], function () {
    return r(require("./components/alive.vue"));
  }, "alive");
};

var aliveDetail = function aliveDetail(r) {
  return require.ensure([], function () {
    return r(require("./components/aliveDetail.vue"));
  }, "aliveDetail");
};

var pdf = function pdf(r) {
  return require.ensure([], function () {
    return r(require("./components/pdf.vue"));
  }, "pdf");
};

var input = function input(r) {
  return require.ensure([], function () {
    return r(require("./components/input.vue"));
  }, "input");
};

var scree = function scree(r) {
  return require.ensure([], function () {
    return r(require("./components/scree.vue"));
  }, "scree");
};

var modal = function modal(r) {
  return require.ensure([], function () {
    return r(require("./components/modal.vue"));
  }, "modal");
};

_vue["default"].use(_vueRouter["default"]);

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  mode: "history",
  routes: [{
    path: "/",
    component: HelloWorld,
    redirect: "/node",
    children: [{
      path: "/node",
      component: ReadJson
    }, {
      path: "/vuex",
      component: Vuex
    }, {
      path: "/vis",
      component: Vis
    }, {
      path: "/d3",
      component: D3
    }, {
      path: "/practice",
      component: Practice
    }, {
      path: "/menu",
      component: menu
    }, {
      path: "/screenshot",
      component: screenshot
    }, {
      path: "/aaa",
      component: Aaaa
    }, {
      path: "/copy",
      component: copy
    }, {
      path: "/animate",
      component: animate
    }, {
      path: "/tuo",
      component: tuo
    }, {
      path: "/she",
      component: she
    }, {
      path: "/wen",
      component: wen
    }, {
      path: "/alive",
      component: alive
    }, {
      path: "/aliveDetail",
      component: aliveDetail
    }, {
      path: "/pdf",
      component: pdf
    }, {
      path: "/input",
      component: input
    }, {
      path: "/scree",
      component: scree
    }, {
      path: "/modal",
      component: modal
    }]
  }]
});

exports["default"] = _default;
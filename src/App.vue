<template>
  <div id="app">
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :responsive="false"
      :vertical-compact="false"
      :use-css-transforms="true"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :use-style-cursor="true"
      class="grid-layout"
    >
      <grid-item
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
        :is-draggable="true"
        @moved="movedEvent"
        :class="{ 'grid-item': abso }"
      >
        <div @mousedown="clickItem" @mouseup="unclickItem" @click="clickItems">
          {{ item.i }}
        </div>
        <!-- <div :is="item.ui" :test="test">{{ item.i }}</div> -->
      </grid-item>
      <div></div>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
// import ButtonComponent from "./components/Button.vue";
export default {
  name: "App",
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    // ButtonComponent,
  },
  data: function () {
    return {
      layout: [
        { x: 0, y: 0, w: 2, h: 2, i: "0", ui: "button-component" },
        { x: 2, y: 0, w: 2, h: 2, i: "1", ui: "button-component" },
        { x: 0, y: 2, w: 2, h: 2, i: "2", ui: "button-component" },
        { x: 2, y: 2, w: 2, h: 2, i: "3", ui: "button-component" },
      ],
      draggable: true,
      resizable: true,
      tempLayout: [
        { x: 0, y: 0, w: 2, h: 2, i: "0", ui: "button-component" },
        { x: 2, y: 0, w: 2, h: 2, i: "1", ui: "button-component" },
        { x: 0, y: 2, w: 2, h: 2, i: "2", ui: "button-component" },
        { x: 2, y: 2, w: 2, h: 2, i: "3", ui: "button-component" },
      ],
      newLayout: [],
      abso: false,
    };
  },
  methods: {
    test: function () {
      console.log("test");
    },
    movedEvent: function (i, newX, newY) {
      console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
      const tempLayout = this.tempLayout;
      console.log(tempLayout);
      for (let i = 0; i <= tempLayout.length; i++) {
        console.log(i);
        if (newX !== tempLayout[i].x && newY !== tempLayout[i].y) {
          console.log("a");
          this.newLayout = tempLayout;
          // const itemDragIndex = this.layout.findIndex((item) => item.i === i);
          // this.newLayout[itemDragIndex] = this.layout[itemDragIndex];
          // this.layout = this.newLayout;
          // this.tempLayout = this.newLayout;
        } else {
          this.layout;
          break;
        }
      }
      // for (let i = 0; i < this.tempLayout.length; i++) {
      //   if (newX === this.tempLayout[i].x && newY === this.tempLayout[i].y) {
      //     console.log("Trung vi tri");
      //     break;
      //   } else {
      //     console.log("Ko trung");
      //     break;
      //   }
      // }
      // this.tempLayout.filter((item) => {
      //   if (newX === item.x && newY === item.y) {
      //     console.log("Trung vi tri");
      //     return;
      //   } else {
      //     console.log("Ko trung");
      //     return;
      //   }
      // });
      // m.map((item) => {
      //   if (newX === item.x && newY === item.y) {
      //     console.log("111");
      //   } else {
      //     console.log("2222");
      //   }
      // });
    },
    clickItem() {
      this.abso = true;
      console.log("abso - ", this.abso);
    },
    unclickItem() {
      this.abso = false;
      console.log("abso - ", this.abso);
    },
    clickItems() {
      console.log("Hello");
    },
  },
  // watch: {
  //   layout: function () {
  //     console.log(this.layout);
  //     // console.log(this.tempLayout);
  //   },
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}

.vue-grid-layout {
  background: #eee;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc;
  border: 1px solid black;
}
.vue-grid-item .resizing {
  opacity: 0.9;
}
.vue-grid-item .static {
  background: #cce;
}
.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}
.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}
.vue-grid-item .minMax {
  font-size: 12px;
}
.vue-grid-item .add {
  cursor: pointer;
}
.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
.grid-layout {
  position: relative !important;
}

.grid-item {
  position: absolute !important;
  z-index: 10 !important;
}
</style>

import Vue from "vue";
import App from "./App.vue";

import VueDraggableResizable from "vue-draggable-resizable";

// optionally import default styles
import "vue-draggable-resizable/dist/VueDraggableResizable.css";

Vue.config.productionTip = false;
Vue.component("vue-draggable-resizable", VueDraggableResizable);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

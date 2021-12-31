<template>
  <div class="hello">
    <div
      style="
        width: 1400px;
        height: 700px;
        border: 1px solid red;
        position: relative;
      "
    >
      <vue-draggable-resizable
        :w="200"
        :h="200"
        @dragging="onDrag"
        :parent="true"
        :grid="[10, 10]"
        :x="250"
        :resizable="false"
        drag-handle=".drag"
      >
        <img alt="Vue logo" src="./assets/logo.png" class="width" />
      </vue-draggable-resizable>
      <vue-draggable-resizable
        :w="200"
        :h="200"
        @dragging="onDrag"
        :parent="true"
        :grid="[10, 10]"
        :resizable="false"
      >
        <img alt="Vue logo" src="./assets/logo.png" class="width" />
      </vue-draggable-resizable>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

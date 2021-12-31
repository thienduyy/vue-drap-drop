<template>
  <div class="btnWrapper">
    <button class="button" @click="test">Button</button>
  </div>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: ["test"],
  // data: function () {},
};
</script>

<style>
.btnWrapper {
  width: inherit;
  height: inherit;
}
.button {
  width: 100px;
  height: 40px;
  border-radius: 10px;
}
</style>

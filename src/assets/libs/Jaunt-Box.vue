<template>
  <div
    :class="{ 'jaunt-Box': true }"
    :style="{ borderRadius }"
  >
    <slot> box </slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "auto",
    },
    height: {
      type: String,
      default: "auto",
    },
    borderRadius: {
      type: String,
      default: "6px",
    },
  },
};
</script>

<style lang="scss" scoped>
.jaunt-Box {
  display: inline-block;
  background: #f4f5f7;
  box-shadow: -3px -2px 2px #ffffff, 0px 2px 8px #d4dbea;
}
</style>

<template>
  <button
    :style="{ color, padding, borderRadius, width, height }"
    :class="{ 'jaunt-button': true, 'button-hover': hover }"
    @click="$emit('click')"
  >
    <slot>
      <div>button</div>
    </slot>
  </button>
</template>

<script>
export default {
  props: {
    hover: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "auto",
    },
    height: {
      type: String,
      default: "auto",
    },
    color: {
      type: String,
      default: "#646466",
    },
    padding: {
      type: String,
      default: "5px",
    },
    borderRadius: {
      type: String,
      default: "10px",
    },
  },
};
</script>

<style lang="scss" scoped>
.jaunt-button {
  cursor: pointer;
  border: none;
  background: #f4f5f7;
  box-shadow: -2px -2px 2px #ffffff, 0px 0px 5px #d4dbea;
}
.jaunt-button:active{
    transform: scale(1.1);
}
.jaunt-button-hover:hover {
  background: linear-gradient(180deg, #38d0b7 0%, #35b3ea 100%);
  color: #ffffff;
}
</style>

<template>
  <div class="jaunt-search">
    <slot name="img"> </slot>
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="(e) => $emit('input', e.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "JSearch",
  props: {
    value: {
      type: String,
      default: "",
    },
    hover: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: "#373A43",
    },
    placeholder: {
      type: String,
      default: "placeholder",
    },
  },
};
</script>

<style lang="scss" scoped>
.jaunt-search {
  color: #acabb0;
  display: flex;
  align-items: center;
  padding: 11px 19px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 1px 4px rgba(212, 219, 234, 0.44);
  border-radius: 8px;
  input {
    display: block;
    padding-left: 13px;
    width: 100%;
    line-height: 24px;
    border: none;
    color: #acabb0;
  }
  input::placeholder {
    color: #acabb0;
  }
  input:focus {
    outline: none;
  }
}
</style>

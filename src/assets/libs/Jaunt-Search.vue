<template>
  <div class="jaunt-search">
    <img
      :src="iconUrl"
      alt="1"
    >
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="(e)=>$emit('input', e.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: {
    value:{
      type:String,
      default:""
    },
    hover: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: "#373A43",
    },
    iconUrl: {
      type: String,
      default: "",
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
  > img {
    margin-right: 13.6px;
  }
  input::placeholder{
      color: #acabb0;
  }
}
</style>

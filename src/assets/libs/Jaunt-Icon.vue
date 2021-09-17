<template>
  <div
    class="jaunt-icon"
    :style="{ width, height, borderRadius, padding }"
    :class="{ 'jaunt-icon-hover': hover, 'cursor-pointer': cursor }"
    @mouseenter="() => hoverHandler('enter')"
    @mouseleave="() => hoverHandler('leave')"
  >
    <div>
      <slot
        name="svg"
        :currentSvgColor="currentSvgColor"
      >
        svg
      </slot>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/composition-api";
export default {
  props: {
    hover: {
      type: Boolean,
      default: true,
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
      default: "#373A43",
    },
    padding: {
      type: String,
      default: "5px",
    },
    borderRadius: {
      type: String,
      default: "50%",
    },
    cursor: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    let isHover = ref(false);
    const currentSvgColor = computed({
      get: () => (isHover.value ? "#fff" : props.color),
    });
    function hoverHandler(type) {
      switch (type) {
        case "enter":
          console.log(123)
          isHover.value = true;
          break;
        case "leave":
          isHover.value = false;
          break;
        default:
          break;
      }
    }
    return {
      currentSvgColor,
      hoverHandler,
      isHover
    };
  },
};
</script>

<style lang="scss" scoped>
.jaunt-icon {
  position: relative;
  display: inline-block;
  border: none;
  background: #f4f5f7;
  box-shadow: -2px -2px 2px #ffffff, 0px 0px 5px #d4dbea;
  > div {
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
  }
}
.jaunt-icon-hover:hover {
  background: linear-gradient(180deg, #38d0b7 0%, #35b3ea 100%);
}
.cursor-pointer {
  cursor: pointer;
}
</style>

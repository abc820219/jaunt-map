<template>
  <div>
    {{ count }}
    <button @click="add">
      add
    </button>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";
export default {
  setup() {
    const { count } = toRefs(
      reactive({
        count: 0,
      })
    );
    function add() {
      this.count++;
    }
    return { count, add };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

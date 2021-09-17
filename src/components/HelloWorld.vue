<template>
  <div>
    {{ count }}
    <JauntButton @click="add" />
    <JauntIcon
      width="20px"
      height="20px"
      padding="10px"
    />
    <JauntBox> 123sadfasdfadfad </JauntBox>
    <JauntSearch v-model="txt" />
  </div>
</template>

<script>
import JauntButton from "@/assets/libs/Jaunt-Button";
import JauntIcon from "@/assets/libs/Jaunt-Icon";
import JauntSearch from "@/assets/libs/Jaunt-Search";
import JauntBox from "@/assets/libs/Jaunt-Box";
import { reactive, toRefs, ref } from "@vue/composition-api";
export default {
  components: { JauntButton, JauntIcon, JauntBox, JauntSearch },
  setup() {
    const txt = ref("");
    const { count } = toRefs(
      reactive({
        count: 0,
      })
    );
    function add() {
      this.count++;
    }
    return { count, add, txt };
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

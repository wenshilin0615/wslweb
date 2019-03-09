<template>
  <div class="container">
    <gamehead></gamehead>
    <gamecontainer></gamecontainer>
  </div>
</template>

<script>
import "@/assets/main_game.css";
import gamehead from "./gamehead";
import gamecontainer from "./gamecontainer";
import store from "@/store/store_game";

export default {
  name: "app",
  components: {
    gamehead,
    gamecontainer
  },
  store
};
// window.onload = function() {
//   app.$store.dispatch("init");
// };
// window.onbeforeunload = function() {
//   app.$store.dispatch("save");
// };
</script>

<style>
.container {
  width: 50%;
  margin: 0 auto;
}

</style>
<template>
  <nav-header> </nav-header>
  <main-content></main-content>
</template>

<script>
import MainContent from "./views/MainContent.vue";
import NavHeader from "./components/NavHeader.vue";

export default {
  components: { NavHeader, MainContent },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
  border: none;
}
</style>

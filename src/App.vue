<template>
  <nav-header> </nav-header>
  <main-content></main-content>

  <input-text v-model="text"></input-text>
  <button-test label="Greet"></button-test>
  <buy-program-form></buy-program-form>
</template>

<script>
import MainContent from "./views/MainContent.vue";
import NavHeader from "./components/NavHeader.vue";
import BuyProgramForm from "./components/forms/BuyProgramForm.vue";

export default {
  components: { NavHeader, MainContent, BuyProgramForm },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$toast.add({
      severity: "success",
      summary: "Success Message",
      detail: "Order submitted",
      life: 3000,
    });
  },
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

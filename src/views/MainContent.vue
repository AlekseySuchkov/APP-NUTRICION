<template>
  <div class="bgi">
    <div class="container">
      <button @click="showModal" class="modalBtn">Купить пррограмму</button>
      <modal-window ref="modal"></modal-window>
    </div>
  </div>
</template>
<script>
import ModalWindow from "../components/ModalWindow.vue";

export default {
  components: {
    ModalWindow,
  },
  methods: {
    showModal: function () {
      this.$refs.modal.show = true;
    },
  },
};
</script>
<style scoped>
.bgi {
  height: 100vh;
  background: no-repeat url("./../assets/backgroundimage.jpg") center/cover;
}
.container {
  justify-content: center;

  height: 100vh;
  display: flex;
  margin: 0 auto;
  max-width: 1024px;
}
.modalBtn {
  display: block;
  height: 40px;
  padding: 0 10px;
  align-self: center;
  background-color: #18a0fb;
  color: white;
  border-radius: 5px;
  border: none;
  pointer-events: all;
}
</style>

<template>
  <div v-if="show" class="modal-shadow" @click.self="closeModal">
    <div class="modal">
      <div class="modal-close" @click="closeModal">&#10006;</div>

      <slot name="body">
        <div class="modal-content">
          <buy-program-form></buy-program-form>
        </div>
      </slot>
      <slot name="footer">
        <div class="modal-footer">
          <button class="modal-footer__button" @click="closeModal">
            Офрмить заказ
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import BuyProgramForm from "./forms/BuyProgramForm.vue";
export default {
  name: "ModalWindows",
  components: { BuyProgramForm },

  data: function () {
    return {
      show: false,
    };
  },
  methods: {
    closeModal: function () {
      this.show = false;
    },
  },
};
</script>

<style scoped lang="scss">
.modal-shadow {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
}

.modal {
  background: #fff;
  border-radius: 8px;
  padding: 25px;
  min-width: 420px;
  max-width: 480px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &-close {
    border-radius: 50%;
    color: #fff;
    background: #18a0fb;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 7px;
    right: 7px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  &-title {
    color: #0971c7;
  }

  &-content {
    margin-bottom: 20px;
    display: flex;
  }

  &-footer {
    &__button {
      background-color: #18a0fb;
      color: #fff;
      border: none;
      text-align: center;
      padding: 8px;
      font-size: 17px;
      font-weight: 500;
      border-radius: 8px;
      min-width: 150px;
    }
  }
}
</style>

<template>
  <div>
    <Toast />

    <div class="card">
      <Steps :model="items" :readonly="false" />
    </div>

    <router-view
      v-slot="{ component }"
      :formData="formObject"
      @prevPage="prevPage($event)"
      @nextPage="nextPage($event)"
      @complete="complete"
    >
      <keep-alive>
        <component :is="component" />
      </keep-alive>
    </router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Personal",
          to: "/steps",
        },
        {
          label: "Seat",
          to: "/steps/seat",
        },
        {
          label: "Payment",
          to: "/steps/payment",
        },
        {
          label: "Confirmation",
          to: "/steps/confirmation",
        },
      ],
    };
  },
  methods: {
    nextPage(event) {
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }

      this.$router.push(this.items[event.pageIndex + 1].to);
    },
    prevPage(event) {
      this.$router.push(this.items[event.pageIndex - 1].to);
    },
    complete() {
      this.$toast.add({
        severity: "success",
        summary: "Order submitted",
        detail:
          "Dear, " +
          this.formObject.firstname +
          " " +
          this.formObject.lastname +
          " your order completed.",
      });
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep(b) {
  display: block;
}

::v-deep(.p-card-body) {
  padding: 2rem;
}
</style>

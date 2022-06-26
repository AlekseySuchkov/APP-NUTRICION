<template>
  <form action="">
    <span class="p-float-label">
      <input-text id="name" type="text" v-model="firstName" />
      <label for="name">Имя</label>
    </span>

    <span class="p-float-label">
      <input-text id="email" type="text" v-model="email" />
      <label for="email">email</label>
    </span>

    <h4>Выберите ваш пол</h4>
    <div class="field-radiobutton">
      <radio-button id="sex1" name="sex" value="male" v-model="sex" />
      <label for="sex1">Мужской</label>
    </div>
    <div class="field-radiobutton">
      <radio-button id="sex2" name="sex" value="female" v-model="sex" />
      <label for="sex2">Женский</label>
    </div>
    <h4>Выберите дату рождения</h4>
    <div>
      <label for="icon"></label>
      <calendar-component id="icon" v-model="birthDate" :showIcon="true" />
    </div>
    <h4>Ваш рост</h4>
    <div>
      <label for="height"></label>
      <input-number id="height" v-model="height" suffix="см" />
    </div>
    <h4>Ваш вес</h4>
    <div>
      <label for="weight"></label>
      <input-number id="weight" v-model="weight" suffix="кг" />
    </div>
    <h4>Выберите вариант повседневной активности</h4>
    <drop-down
      v-model="selectedActivity"
      :options="activity"
      optionLabel="name"
      placeholder="Выберите вашу активность"
    />
    <p>Грудное вскармливание</p>

    <div class="field-radiobutton">
      <radio-button
        name="breast-feeding"
        value="male"
        id="yes"
        v-model="breastFeeding"
      />
      <label for="yes">да</label>
    </div>
    <div>
      <radio-button
        name="breast-feeding"
        value="female"
        id="no"
        v-model="breastFeeding"
      />
      <label for="no">Нет</label>
    </div>
  </form>
</template>
<script>
export default {
  name: "BuyProgramForm",
  data() {
    return {
      firstName: null,
      email: null,
      sex: null,
      birthDate: null,
      height: null,
      selectedActivity: null,
      breastFeeding: null,
      activity: [
        { name: "Офисная работа" },
        {
          name: "Повседневная активность Повседневная активность Повседневная активность",
        },
        { name: "Активный образ жизни" },
        { name: "Очень активный образ жизни" },
      ],
    };
  },
};
</script>
<style scoped>
h4 {
  margin-bottom: 10px;
}
form {
  display: flex;
  flex-direction: column;
}
p {
  margin-bottom: 5px;
}
label {
}
input {
  border-bottom: 1px solid #18a0fb;
  margin: 5px 0;
}
.field-radiobutton {
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
}
</style>

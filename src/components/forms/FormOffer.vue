<template>
  <form action="">
    <label for="name">Имя</label>
    <input type="text" name="name" id="name" />
    <label for="email">Почта</label>
    <input type="text" name="email" id="email" />
    <p>Выберите ваш пол</p>

    <div>
      <input type="radio" name="sex" value="male" id="male" />
      <label for="male">Мужчина</label>
    </div>
    <div>
      <input type="radio" name="sex" value="female" id="female" />
      <label for="female">Женщина</label>
    </div>

    <div>
      <label for="age">Возраст</label>
      <input type="text" name="age" id="age" />
    </div>
    <div>
      <label for="weight">Вес</label>
      <input type="text" name="weight" id="weight" />
    </div>
    <div>
      <label for="height">Рост</label>
      <input type="text" name="height" id="height" />
    </div>
    <p>Выберите вариант повседневной активности:</p>
    <select name="activity" id="">
      <option value="">Офисная работа</option>
      <option value="">Повседневная активность</option>
      <option value="">Активный образ жизни</option>
      <option value="">Очень активнеый образ жизни</option>
    </select>
    <p>Грудное вскармливание</p>

    <div>
      <input type="radio" name="breast-feeding" value="male" id="yes" />
      <label for="yes">да</label>
    </div>
    <div>
      <input type="radio" name="breast-feeding" value="female" id="no" />
      <label for="no">Нет</label>
    </div>
  </form>
</template>
<script>
export default {
  name: "FormOffer",
};
</script>
<style scoped>
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
</style>

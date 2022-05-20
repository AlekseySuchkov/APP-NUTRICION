<template>
  <header class="mainHeader">
    <div class="container">
      <div class="buttons">
        <button class="sighnUp btn">Регистрация</button>
        <button class="sighnIn btn">Войти</button>
      </div>
      <nav>
        <ul>
          <li>главная</li>
          <li>цены</li>
          <li>сообщество</li>
          <li>поддержка</li>
        </ul>
      </nav>
      <button class="orderCall btn">Заказать звонок</button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.mainHeader {
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1024px;
  padding: 10px 0;
}
ul {
  display: flex;
  justify-content: end;
  padding: 0 15px;
}
li {
  display: inline-block;
  text-align: center;
  width: auto;
  margin-right: 15px;
}
.orderCall {
  display: block;
  align-self: ;
}
.btn {
  background-color: #18a0fb;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  max-width: 100px;
  height: 40px;
}

.sighnUp {
  margin-right: 15px;
}
.sighnIn {
  background-color: white;
  color: #000;
  border: #18a0fb 1px solid;
}
</style>

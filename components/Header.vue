<template>
  <header class="header">
    <div class="header__container">
      <img src="../assets/img/header-logo.svg" alt="" class="header__logo">

      <ul class="header__links">
        <li class="header__link">Наука</li>
        <li class="header__link">Дикая природа</li>
        <li class="header__link">Советы</li>
        <li class="header__link">Бёрдвочинг</li>
        <li class="header__link">Мнения</li>
        <li class="header__link header__link--red">Красная книга</li>
      </ul>

      <button class="header__btn button">
        Подписаться
      </button>

      <div class="header__active-box">
        <svg class="header__search" width="24" height="24">
          <use href="../assets/img/icons.svg#search"></use>
        </svg>

        <svg class="header__burger" width="30" height="30">
          <use href="../assets/img/icons.svg#burger"></use>
        </svg>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {}
};
</script>

<style lang="scss" scoped>

</style>

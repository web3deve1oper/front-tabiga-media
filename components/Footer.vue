<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__row">
        <img src="../assets/img/footer-logo.svg" alt="" class="footer__logo">

        <div class="footer__socials">
          <a href="#" class="footer__social">
            <svg width="35" height="35">
              <use href="../assets/img/icons.svg#tg"></use>
            </svg>
          </a>

          <a href="#" class="footer__social">
            <svg width="35" height="35">
              <use href="../assets/img/icons.svg#fb"></use>
            </svg>
          </a>

          <a href="#" class="footer__social">
            <svg width="35" height="35">
              <use href="../assets/img/icons.svg#inst"></use>
            </svg>
          </a>

          <a href="#" class="footer__social">
            <svg width="35" height="35">
              <use href="../assets/img/icons.svg#youtube"></use>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer__main">
        <div class="footer__quote">
          «Tabigat media» -онлайн журнал об охране природы
        </div>

        <div class="footer__link-box">
          <div class="footer__title">
            Общие ссылки
          </div>

          <div class="footer__links">
            <div class="footer__link">О проекте</div>
            <div class="footer__link">Политика конфиденциальности</div>
            <div class="footer__link">Правовая информация</div>
            <div class="footer__link">Обратная связь</div>
          </div>
        </div>

        <div class="footer__link-box">
          <div class="footer__title">
            Рубрики
          </div>

          <div class="footer__links">
            <div class="footer__link">Красная книга Казахстана</div>
            <div class="footer__link">Наука</div>
            <div class="footer__link">Советы</div>
            <div class="footer__link">Бёрдвочинг</div>
            <div class="footer__link">Мнения</div>
            <div class="footer__link">Новости</div>
            <div class="footer__link">Лица</div>
          </div>
        </div>

        <div class="footer__active-box">
          <div class="footer__title">
            Есть вопросы или предложения?
          </div>

          <button class="footer__btn button button--white">
            Написать нам
          </button>
        </div>
      </div>

      <div class="footer__rights">
        © {{ new Date().getFullYear() }}, Tabigat media. Все права защищены
      </div>
    </div>
  </footer>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

</style>

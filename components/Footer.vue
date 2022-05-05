<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__row">
        <img src="../assets/img/footer-logo.png" alt="" class="footer__logo">

        <div class="footer__socials">

          <svg width="35" height="35" class="footer__social" @click="shareInst">
            <use href="../assets/img/icons.svg#inst"></use>
          </svg>

          <svg width="35" height="35" class="footer__social" @click="shareFacebook">
            <use href="../assets/img/icons.svg#fb"></use>
          </svg>

<!--          <svg width="35" height="35" class="footer__social" @click="shareVk">-->
<!--            <use href="../assets/img/icons.svg#vk"></use>-->
<!--          </svg>-->

          <svg width="35" height="35" class="footer__social" @click="shareTg">
            <use href="../assets/img/icons.svg#tg"></use>
          </svg>

        </div>
      </div>

      <div class="footer__main">
        <div class="footer__quote">
          Tabigat media — казахстанское онлайн-издание о природе, её изучении и охране.
        </div>

        <div class="footer__link-box footer__link-box--desktop">
          <div class="footer__title">
            Общие ссылки
          </div>

          <div class="footer__links">
            <nuxt-link tag="a" to="/about" class="footer__link">О проекте</nuxt-link>
            <nuxt-link tag="a" to="/policy" class="footer__link">Политика конфиденциальности</nuxt-link>
<!--            <nuxt-link tag="div" to="/legal" class="footer__link">Правовая информация</nuxt-link>-->
            <nuxt-link tag="a" to="/contact" class="footer__link">Обратная связь</nuxt-link>
          </div>
        </div>

        <div class="footer__link-box">
          <div class="footer__title">
            Рубрики
          </div>

          <div class="footer__links">
            <nuxt-link tag="a"
                       :to="'/' + r.slag + ':' + r.id"
                       class="footer__link"
                       v-for="r in loadedRubrics"
                       :key="r.id">
              {{ r.title }}
            </nuxt-link>
            <nuxt-link tag="div"
                       class="footer__link"
                       to="/red-book">
              Красная книга
            </nuxt-link>
          </div>
        </div>

        <div class="footer__link-box footer__link-box--mobile">
          <div class="footer__links">
            <nuxt-link tag="div" to="/about" class="footer__link">О проекте</nuxt-link>
            <nuxt-link tag="div" to="/policy" class="footer__link">Политика конфиденциальности</nuxt-link>
<!--            <nuxt-link tag="div" to="/legal" class="footer__link">Правовая информация</nuxt-link>-->
            <nuxt-link tag="div" to="/contact" class="footer__link">Обратная связь</nuxt-link>

          </div>
        </div>

        <div class="footer__active-box">
          <div class="footer__title footer__title--mb20">
            Есть вопросы или предложения?
          </div>

          <nuxt-link tag="button" to="/contact" class="footer__btn button button--white">
            Написать нам
          </nuxt-link>
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
  data() {
    return {
      // curUrl: window.location.href,
    };
  },
  computed: {
    loadedRubrics() {
      return this.$store.getters.loadedRubrics
    },
    curUrl() {
      return window.location.href
    }
  },
  mounted() {
  },
  methods: {
    shareInst() {
      window.open('https://www.instagram.com/tabigat.media/', '_blank');
    },
    shareFacebook() {
      window.open('https://www.facebook.com/tabigat.media', '_blank');
    },
    // shareVk() {
    //   window.open('https://vk.com/share.php?url=', '_blank');
    // },
    shareTg() {
      window.open('https://t.me/tabigatmedia', '_blank');
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

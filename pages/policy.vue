<template>
  <div class="about-page">

    <loader-block v-if="loader"></loader-block>

    <div v-else>
      <div class="about-page__container">
        <div class="about-page__breadcrumb breadcrumb">
          <nuxt-link tag="a" to="/">Главная</nuxt-link>
          / <span>Политика конфиденциальности</span>
        </div>
      </div>

      <div class="about-page__header">
        <div class="about-page__container">
          <div class="about-page__title">
            Политика конфиденциальности
          </div>
        </div>
      </div>

      <div class="about-page__container">
        <div class="about-page__row">
          <div class="about-page__text" v-html="plainTxt"></div>
        </div>

        <mail-box class="about-page__mail-box"></mail-box>
      </div>
    </div>
  </div>
</template>

<script>
import MailBox from "../components/MailBox";
import LoaderBLock from "../components/LoaderBlock";

export default {
  components: {
    MailBox,
    LoaderBLock
  },
  data() {
    return {
      plainTxt: '',
      loader: true
    }
  },
  mounted() {
    this.$axios.get(process.env.API + 'page-settings?key=confidentiality_policy')
        .then(response => {
          this.plainTxt = response.data.data
          this.loader = false
        })
        .catch(e => console.log(e))
  },
    head() {
        return {
            title: 'Политика конфиденциальности',
        };
    }
}
</script>
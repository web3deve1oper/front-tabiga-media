<template>
  <div class="about-page">
    <loader-block v-if="loader"></loader-block>

    <div v-else>
      <div class="about-page__container">
        <div class="about-page__breadcrumb breadcrumb">
          <nuxt-link tag="a" to="/">Главная</nuxt-link> / <span>О проекте</span>
        </div>
      </div>

      <div class="about-page__header">
        <div class="about-page__container">
          <div class="about-page__title">
            О проекте
          </div>
          <div class="about-page__subtitle">
            <span>Tabigat media</span> — казахстанское онлайн-издание о природе, её изучении и охране.
            <br>
            <i>О природе из первых уст</i>

          </div>
        </div>
      </div>

      <div class="about-page__container">
        <div class="about-page__row">
          <div class="about-page__text" v-html="plainTxt"></div>

          <div class="about-page__rubrics">
            <h6>Рубрики</h6>
            <ul>
              <nuxt-link tag="li"
                         :to="'/' + rubric.slug + ':' + rubric.id"
                         v-for="rubric in loadedRubrics"
                         :key="rubric.id">
                {{ rubric.title }}
              </nuxt-link>
              <nuxt-link tag="li"
                         to="/red-book">
                Красная книга
              </nuxt-link>
            </ul>
          </div>

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
    this.$axios.get(process.env.API + 'page-settings?key=about')
        .then(response => {
          this.plainTxt = response.data.data
          this.loader = false
        })
        .catch(e => console.log(e))
  },
  computed: {
    loadedRubrics() {
      return this.$store.getters.loadedRubrics
    }
  },
    head() {
        return {
            title: 'О проекте',
        };
    }
}
</script>
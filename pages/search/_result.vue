<template>
  <div class="search-page">
    <loader-block v-if="loader"></loader-block>
    <div class="search-page__container" v-else-if="results.length > 0">
      <div class="search-page__breadcrumb breadcrumb">
        <nuxt-link tag="a" to="/">Главная</nuxt-link>
        / <span>Результаты поиска</span>
      </div>

      <div class="search-page__heading heading-large">
        Результаты поиска
        <span>{{ results.length }}</span>
      </div>

      <div class="search-page__list">

        <nuxt-link tag="div"
                   :to="'/' + a.rubric.slug + ':' + a.rubric.id + '/' + a.slug + ':' + a.id"
                   class="search-page__card
                          staggered-card
                          staggered-card--search
                          staggered-card--showAll
                          staggered-card--nostagger
                          staggered-card--h181"
                   v-for="(a, k) in results" :key="a.id"
                   :class="{'staggered-card--phone-nophoto' : k % 2 !== 0}">

          <div class="staggered-card__img-box">
            <img :src="a.preview_image_small_url" alt="" class="staggered-card__img">
            <!--            <div class="staggered-card__views">-->
            <!--              <svg width="20" height="20">-->
            <!--                <use href="../../assets/img/icons.svg#eye"></use>-->
            <!--              </svg>-->
            <!--              147k-->
            <!--            </div>-->
          </div>

          <div class="staggered-card__info">
            <div class="staggered-card__heading">
              {{ a.rubric.title }}
            </div>

            <div class="staggered-card__grey-text staggered-card__grey-text--darker">
              {{ a.author.full_name }}
            </div>

            <div class="staggered-card__title">
              {{ a.title }}
            </div>

            <div class="staggered-card__subtitle">
              {{ a.description }}
            </div>

            <div class="staggered-card__details staggered-card__details--absolute">
              <span>{{ $dateFns.format(a.posted_at, 'dd MMMM yyyy') }}</span>
              <span>читать {{ a.read_time }}</span>
            </div>

          </div>

        </nuxt-link>

      </div>
    </div>

    <div class="search-page__container" v-else>
      <div class="search-page__empty">
        По вашему запросу ничего не найдено
      </div>
    </div>
  </div>
</template>

<script>
import LoaderBlock from "../../components/LoaderBlock"

export default {
  components: {
    LoaderBlock
  },
  data() {
    return {
      loader: true,
      results: []
    };
  },
  computed: {},
  mounted() {
    this.$axios.get(process.env.API + 'articles?filter[search]=' + this.$route.params.result + '&sort=-posted_at&include=rubric,author')
        .then(response => {
          this.results = response.data.data.data
          this.loader = false
        })
        .catch(e => console.log(e))
  }
}
</script>
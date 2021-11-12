<template>
  <div class="rubrics">
    <loader-block v-if="loader"></loader-block>

    <div class="rubrics__container" v-else-if="rubric.length > 0">

      <div class="rubrics__breadcrumb breadcrumb">
        <nuxt-link to="/">Главная</nuxt-link> / <span>{{ rubric[0].rubric.title }}</span>
      </div>

      <h2 class="rubrics__heading heading-large">
        {{ rubric[0].rubric.title }}
      </h2>

      <p class="rubrics__desc">
        {{ rubric[0].rubric.description }}
      </p>

      <div class="rubrics__main">

        <div class="rubrics__filters">
          <p>Сортировать:</p>
          <span class="rubrics__filter-item">Сначала новые</span>
          <span class="rubrics__filter-item rubrics__filter-item--active">По популярности</span>
        </div>

        <div class="rubrics__cards">
          <div class="rubrics__card card card--w100 card--nopadding" v-for="article in rubric">

            <div class="card__img-box">
              <img :src="article.preview_image_small_url" alt="" class="card__img card__img--bywidth">

              <div class="card__views">
                <svg width="20" height="20">
                  <use href="../../assets/img/icons.svg#eye"></use>
                </svg>
                147k
              </div>

            </div>

            <div class="card__info">

              <div class="card__author card__author--sm">
                {{ article.author.full_name }}
              </div>

              <div class="card__title card__title--two-line">
                {{ article.title }}
              </div>

              <div class="card__desc card__desc--mb12">
                {{ article.description }}
              </div>

              <div class="card__details card__details--sm">
                <span>{{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}</span>
                <span>читать {{ article.read_time }}</span>
              </div>
            </div>

          </div>
        </div>

<!--        <div class="rubrics__paddings padding">-->

<!--          <div class="padding__arrow padding__arrow&#45;&#45;left">-->
<!--            <svg width="30" height="30">-->
<!--              <use href="../../assets/img/icons.svg#arrow-big"></use>-->
<!--            </svg>-->
<!--          </div>-->

<!--          <div class="padding__numbers">-->
<!--            <div class="padding__number">1</div>-->
<!--            <div class="padding__number padding__number&#45;&#45;active">2</div>-->
<!--            <div class="padding__number">3</div>-->
<!--            <div class="padding__number">4</div>-->
<!--            <div class="padding__number">...</div>-->
<!--            <div class="padding__number">10</div>-->
<!--          </div>-->

<!--          <div class="padding__arrow padding__arrow&#45;&#45;right">-->
<!--            <svg width="30" height="30">-->
<!--              <use href="../../assets/img/icons.svg#arrow-big"></use>-->
<!--            </svg>-->
<!--          </div>-->

<!--        </div>-->

      </div>
    </div>
  </div>
</template>

<script>
import LoaderBlock from "../../components/LoaderBlock";

export default {
  components: {
    LoaderBlock
  },
  data() {
    return {
      rubric: [],
      loader: true
    };
  },
  computed: {
    rubricId() {
      return this.$route.params.rubrics.split(':')[1]
    }
  },
  mounted() {
    this.$axios.get(process.env.API + 'articles?filter[rubric.id]=' + this.rubricId + '&sort=-posted_at&include=rubric,author')
        .then(response => {
          this.rubric = response.data.data.data
          console.log(response.data.data.data)
          this.loader = false
        })
        .catch(e => console.log(e))
  }
}
</script>
<template>
  <div class="rubrics">
    <loader-block v-if="loader"></loader-block>

    <div class="rubrics__container" v-else-if="rubric.length > 0">

      <div class="rubrics__breadcrumb breadcrumb">
        <nuxt-link to="/">Главная</nuxt-link> / <span>Красная книга Казахстана</span>
      </div>

      <h2 class="rubrics__heading heading-large">
        Красная книга Казахстана
      </h2>

      <p class="rubrics__desc">
        Здесь должно быть описание красной книги Казахстана
      </p>

      <div class="rubrics__main">

        <div class="rubrics__filters">
          <p>Сортировать:</p>
          <span class="rubrics__filter-item">Сначала новые</span>
          <span class="rubrics__filter-item rubrics__filter-item--active">По популярности</span>
        </div>

        <div class="rubrics__cards rubrics__cards--red-book">

          <nuxt-link tag="div" :to="'/red-book/' + card.slug + ':' + card.id"
                     class="rubrics__card red-card"
                     v-for="card in rubric"
                     :key="card.id">
            <img :src="card.preview_image_small_url" alt="" class="red-card__img">

            <div class="red-card__info">
              <div class="red-card__heading">
                Красная книга Казахстана
              </div>

              <div class="red-card__title">
                -{{ card.name }}
                <br>
                -{{ card.name_latin }}
              </div>

              <div class="red-card__subtitle">
                {{ card.description }}
              </div>
            </div>
          </nuxt-link>

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

  },
  mounted() {
    this.$axios.get(process.env.API + 'red-book?sort=-posted_at')
        .then(response => {
          this.rubric = response.data.data.data
          console.log(response.data.data.data)
          this.loader = false
        })
        .catch(e => console.log(e))
  }
}
</script>
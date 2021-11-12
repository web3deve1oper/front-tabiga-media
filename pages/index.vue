<template>
  <main class="main">

    <section class="main__section welcome-section">
      <div class="welcome-section__container">

        <div class="welcome-section__main">

          <div class="welcome-section__box" v-if="Object.keys(this.mainRandomArticle).length > 0">
            <img :src="mainRandomArticle.preview_image_big_url" alt="" class="welcome-section__img">

            <div class="welcome-section__box-info">
              <div class="welcome-section__heading">
                Новость дня
              </div>

              <div class="welcome-section__title">
                {{ mainRandomArticle.title }}
              </div>

              <div class="welcome-section__subtitle">
                {{ mainRandomArticle.description }}
              </div>
            </div>
          </div>

          <div class="welcome-section__scroll-box" v-if="loadedOrder1.length > 0">
            <div class="welcome-section__items">

              <div class="welcome-section__item" v-for="article in loadedOrder1">
                <div class="welcome-section__item-row">
                  <div class="welcome-section__item-heading">
                    {{ article.rubric.title }}
                  </div>
                  <div class="welcome-section__item-date">
                    {{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}
                  </div>
                </div>

                <div class="welcome-section__item-title">
                  {{ article.title }}
                </div>
              </div>

            </div>

            <button class="welcome-section__btn button">
              Смотреть все Новости
            </button>
          </div>

        </div>

        <div class="welcome-section__cards" v-if="randomArticles.length > 0">

          <div class="welcome-section__card card"
               v-for="(article, i) in randomArticles"
               v-if="i >= 1">

            <div class="card__img-box">
              <img :src="article.preview_image_small_url" alt="" class="card__img">
            </div>

            <div class="card__info">

              <div class="card__row">
                <div class="card__heading">{{ article.rubric.title }}</div>

                <div class="card__date">{{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}</div>
              </div>

              <div class="card__title">
                {{ article.title }}
              </div>

              <div class="card__more">
                <p>Читать подробнее</p>
                <svg width="20" height="20">
                  <use href="../assets/img/icons.svg#arrow-right"></use>
                </svg>
              </div>
            </div>
          </div>

        </div>

        <div class="swiper-container welcome-section__swiper-container" v-if="randomArticles.length > 0">
          <div class="swiper-wrapper">

            <div class="welcome-section__card card swiper-slide"
                 v-for="(article, i) in randomArticles"
                 v-if="i >= 1">

              <div class="card__img-box">
                <img :src="article.preview_image_small_url" alt="" class="card__img">
              </div>

              <div class="card__info">

                <div class="card__row">
                  <div class="card__heading">{{ article.rubric.title }}</div>

                  <div class="card__date">{{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}</div>
                </div>

                <div class="card__title">
                  {{ article.title }}
                </div>

                <div class="card__more">
                  <p>Читать подробнее</p>
                  <svg width="20" height="20">
                    <use href="../assets/img/icons.svg#arrow-right"></use>
                  </svg>
                </div>
              </div>

            </div>

          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination welcome-section__pagination"></div>
        </div>

      </div>
    </section>

    <section class="main__section default-view" v-if="loadedOrder2.length > 0">
      <div class="default-view__container">
        <div class="default-view__row">
          <h4 class="default-view__heading heading-medium">
            {{ loadedOrder2[0].rubric.title }}
          </h4>

          <div class="default-view__more">
            <p>Смотреть все</p>
            <svg width="24" height="24">
              <use href="../assets/img/icons.svg#arrow-right"></use>
            </svg>
          </div>
        </div>

        <div class="default-view__cards">

          <div class="default-view__card card card--w-desc" v-for="(article, i) in loadedOrder2">

            <div class="card__img-box">
              <img :src="article.preview_image_small_url" alt="" class="card__img">

              <div class="card__views">
                <svg width="20" height="20">
                  <use href="../assets/img/icons.svg#eye"></use>
                </svg>
                147k
              </div>

            </div>

            <div class="card__info">

              <div class="card__row">
                <div class="card__heading"> {{ article.rubric.title }}</div>

                <div class="card__date">{{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}</div>
              </div>

              <div class="card__title">
                {{ article.title }}
              </div>

              <div class="card__desc">
                {{ article.description }}
              </div>
            </div>

          </div>

        </div>

        <div class="swiper-container default-view__swiper-container default-view__swiper-container--1">
          <div class="swiper-wrapper">

            <div class="default-view__card card card--w-desc swiper-slide"
                 v-for="article in loadedOrder2">

              <div class="card__img-box">
                <img :src="article.preview_image_small_url" alt="" class="card__img">

                <div class="card__views">
                  <svg width="20" height="20">
                    <use href="../assets/img/icons.svg#eye"></use>
                  </svg>
                  147k
                </div>

              </div>

              <div class="card__info">

                <div class="card__row">
                  <div class="card__heading">{{ article.rubric.title }}</div>

                  <div class="card__date">{{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}</div>
                </div>

                <div class="card__title">
                  {{ article.title }}
                </div>

                <div class="card__desc">
                  {{ article.description }}
                </div>
              </div>

            </div>

          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination default-view__pagination default-view__pagination--1"></div>
        </div>

      </div>
    </section>

    <section class="main__section accent-section" v-if="loadedFavourites.length > 0">

      <div class="accent-section__container">

        <div class="accent-section__list">
          <div class="accent-section__card accent-card" v-for="article in loadedFavourites">
            <img :src="article.preview_image_small_url" alt="" class="accent-card__img">

            <div class="accent-card__info">

              <div class="accent-card__heading">
                {{ article.rubric.title }}
              </div>

              <div class="accent-card__title">
                {{ article.title }}
              </div>

              <div class="accent-card__desc">
                {{ article.description }}
              </div>

              <div class="accent-card__details">
                <span>{{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}</span>
                <span>читать {{ article.read_time }}</span>
                <span>
                <svg width="20" height="20">
                  <use href="../assets/img/icons.svg#eye"></use>
                </svg>
                147k
              </span>
              </div>
            </div>

          </div>
        </div>

        <div class="swiper-container accent-section__swiper-container">
          <div class="swiper-wrapper">

            <div class="accent-section__card accent-card swiper-slide" v-for="article in loadedFavourites">
              <img src="../assets/img/placeholder-3.jpeg" alt="" class="accent-card__img">

              <div class="accent-card__info">

                <div class="accent-card__heading">
                  {{ article.rubric.title }}
                </div>

                <div class="accent-card__title">
                  {{ article.title }}
                </div>

                <div class="accent-card__desc">
                  {{ article.description }}
                </div>

                <div class="accent-card__details">
                  <span>{{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}</span>
                  <span>читать {{ article.read_time }}</span>
                  <span>
                <svg width="20" height="20">
                  <use href="../assets/img/icons.svg#eye"></use>
                </svg>
                147k
              </span>
                </div>
              </div>

            </div>

          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination accent-section__pagination"></div>
        </div>

      </div>

    </section>

    <section class="main__section fluid-view" v-if="loadedOrder3.length > 0">
      <div class="fluid-view__container">

        <div class="fluid-view__row">
          <h4 class="fluid-view__heading heading-medium">
            {{ loadedOrder3[0].rubric.title }}
          </h4>

          <div class="fluid-view__more">
            <p>Смотреть все</p>
            <svg width="24" height="24">
              <use href="../assets/img/icons.svg#arrow-right"></use>
            </svg>
          </div>
        </div>

        <div class="fluid-view__top">
          <div class="fluid-view__card card card--big"
               v-for="(article, i) in loadedOrder3"
               v-if="i < 2">
            <div class="card__img-box">
              <img :src="article.preview_image_small_url" alt="" class="card__img">

              <div class="card__views">
                <svg width="20" height="20">
                  <use href="../assets/img/icons.svg#eye"></use>
                </svg>
                147k
              </div>

            </div>

            <div class="card__info">

              <div class="card__row">
                <div class="card__heading">{{ article.rubric.title }}</div>
                <!--                <div class="card__date">1 октябрь 2021</div>-->
              </div>

              <div class="card__author">
                {{ article.author.full_name }}
              </div>

              <div class="card__title">
                {{ article.title }}
              </div>

              <div class="card__desc">
                {{ article.description }}
              </div>

              <div class="card__details">
                <span>{{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}</span>
                <span>читать {{ article.read_time }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="fluid-view__bottom">

          <div class="fluid-view__card card card--minimized"
               v-for="(article, i) in loadedOrder3">

            <div class="card__img-box">
              <img :src="article.preview_image_small_url" alt="" class="card__img">

              <div class="card__views">
                <svg width="20" height="20">
                  <use href="../assets/img/icons.svg#eye"></use>
                </svg>
                147k
              </div>

            </div>

            <div class="card__info">

              <div class="card__row">
                <div class="card__heading">{{ article.rubric.title }}</div>

                <div class="card__date">{{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}</div>
              </div>

              <div class="card__author">
                {{ article.author.full_name }}
              </div>

              <div class="card__title">
                {{ article.title }}
              </div>

            </div>
          </div>

        </div>

        <div class="swiper-container fluid-view__swiper-container">
          <div class="swiper-wrapper">

            <div class="fluid-view__card card card--minimized swiper-slide"
                 v-for="article in loadedOrder3">

              <div class="card__img-box">
                <img :src="article.preview_image_small_url" alt="" class="card__img">

                <div class="card__views">
                  <svg width="20" height="20">
                    <use href="../assets/img/icons.svg#eye"></use>
                  </svg>
                  147k
                </div>

              </div>

              <div class="card__info">

                <div class="card__row">
                  <div class="card__heading">{{ article.rubric.title }}</div>

                  <div class="card__date">{{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}</div>
                </div>

                <div class="card__author">
                  {{ article.author.full_name }}
                </div>

                <div class="card__title">
                  {{ article.title }}
                </div>

              </div>
            </div>

          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination fluid-view__pagination"></div>
        </div>

      </div>
    </section>

    <section class="main__section red-book" v-if="loadedRedBook.length > 0">
      <div class="red-book__container">
        <div class="red-book__row">
          <h4 class="red-book__heading heading-medium heading-medium--red">
            Красная книга Казахстана
          </h4>

          <div class="red-book__more">
            <p>Смотреть все</p>
            <svg width="24" height="24">
              <use href="../assets/img/icons.svg#arrow-right"></use>
            </svg>
          </div>
        </div>

        <div class="red-book__cards">
          <div class="red-book__card red-card"
               v-for="article in loadedRedBook">
            <img :src="article.preview_image_small_url" alt="" class="red-card__img">

            <div class="red-card__info">
              <div class="red-card__heading">
                Красная книга Казахстана
              </div>

              <div class="red-card__title">
                {{ article.name }}
                <br>
                {{ article.name_latin }}
              </div>

              <div class="red-card__subtitle">
                {{ article.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="main__section solo-view" v-if="loadedOrder4.length > 0">
      <div class="solo-view__container">

        <div class="solo-view__row">
          <h4 class="solo-view__heading heading-medium">
            {{ loadedOrder4[0].rubric.title }}
          </h4>

          <div class="solo-view__more">
            <p>Смотреть все</p>
            <svg width="24" height="24">
              <use href="../assets/img/icons.svg#arrow-right"></use>
            </svg>
          </div>
        </div>

        <div class="solo-view__cards">

          <div class="solo-view__card card card--big">
            <div class="card__img-box">
              <img :src="loadedOrder4[0].preview_image_small_url" alt="" class="card__img">

              <div class="card__views">
                <svg width="20" height="20">
                  <use href="../assets/img/icons.svg#eye"></use>
                </svg>
                147k
              </div>

            </div>

            <div class="card__info">

              <div class="card__row">
                <div class="card__author card__author--mb0">
                  {{ loadedOrder4[0].author.full_name }}
                </div>

                <div class="card__date">{{ $dateFns.format(loadedOrder4[0].posted_at, 'dd MMMM yyyy') }}</div>
              </div>

              <div class="card__title card__title--multiline">
                {{ loadedOrder4[0].title }}
              </div>

              <div class="card__desc card__desc--mb0">
                {{ loadedOrder4[0].description }}
              </div>
            </div>
          </div>

          <div class="solo-view__list">

            <div class="solo-view__card solo-view__card--mb10 card card--nophoto"
                 v-for="(article, i) in loadedOrder4" v-if="i > 0 && i !== 3">

              <div class="card__heading">
                {{ article.rubric.title }}
              </div>

              <div class="card__grey-text">
                {{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}
                -
                {{ article.author.full_name }}
              </div>

              <div class="card__title">
                {{ article.title }}
              </div>

              <div class="card__desc">
                {{ article.description }}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <section class="main__section default-view" v-if="loadedOrder5.length > 0">
      <div class="default-view__container">
        <div class="default-view__row">
          <h4 class="default-view__heading heading-medium">
            {{ loadedOrder5[0].rubric.title }}
          </h4>

          <div class="default-view__more">
            <p>Смотреть все</p>
            <svg width="24" height="24">
              <use href="../assets/img/icons.svg#arrow-right"></use>
            </svg>
          </div>
        </div>

        <div class="default-view__cards">

          <div class="default-view__card card card--w-desc" v-for="article in loadedOrder5">

            <div class="card__img-box">
              <img :src="article.preview_image_small_url" alt="" class="card__img">

              <div class="card__views">
                <svg width="20" height="20">
                  <use href="../assets/img/icons.svg#eye"></use>
                </svg>
                147k
              </div>

            </div>

            <div class="card__info">

              <div class="card__row">
                <div class="card__heading">
                  {{ article.rubric.title }}
                </div>

                <div class="card__date">
                  {{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}
                </div>
              </div>

              <div class="card__title">
                {{ article.title }}
              </div>

              <div class="card__desc">
                {{ article.description }}
              </div>
            </div>

          </div>

        </div>

        <div class="swiper-container default-view__swiper-container default-view__swiper-container--2">
          <div class="swiper-wrapper">

            <div class="default-view__card card card--w-desc swiper-slide" v-for="article in loadedOrder5">

              <div class="card__img-box">
                <img :src="article.preview_image_small_url" alt="" class="card__img">

                <div class="card__views">
                  <svg width="20" height="20">
                    <use href="../assets/img/icons.svg#eye"></use>
                  </svg>
                  147k
                </div>

              </div>

              <div class="card__info">

                <div class="card__row">
                  <div class="card__heading">
                    {{ article.rubric.title }}
                  </div>

                  <div class="card__date">
                    {{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}
                  </div>
                </div>

                <div class="card__title">
                  {{ article.title }}
                </div>

                <div class="card__desc">
                  {{ article.description }}
                </div>
              </div>

            </div>

          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination default-view__pagination default-view__pagination--2"></div>
        </div>

      </div>
    </section>

    <section class="main__section staggered-view" v-if="loadedOrder6.length > 0">
      <div class="staggered-view__container">

        <div class="staggered-view__row">
          <h4 class="staggered-view__heading heading-medium">
            {{ loadedOrder6[0].rubric.title }}
          </h4>

          <div class="staggered-view__more">
            <p>Смотреть все</p>
            <svg width="24" height="24">
              <use href="../assets/img/icons.svg#arrow-right"></use>
            </svg>
          </div>
        </div>

        <div class="staggered-view__cards">

          <div class="staggered-view__card staggered-card"
               v-for="(article, k) in loadedOrder6"
               :class="{'staggered-card--phone-nophoto' : k === 1}">

            <div class="staggered-card__img-box">
              <img :src="article.preview_image_small_url" alt="" class="staggered-card__img">
            </div>

            <div class="staggered-card__info">
              <div class="staggered-card__heading">
                {{ article.rubric.title }}
              </div>

              <div class="staggered-card__grey-text">
                {{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}
                -
                {{ article.author.full_name }}
              </div>

              <div class="staggered-card__title">
                {{ article.title }}
              </div>

              <div class="staggered-card__subtitle">
                {{ article.description }}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <mail-box class="main__section"></mail-box>

  </main>
</template>

<script>
import Swiper, {Pagination} from 'swiper';
import MailBox from "../components/MailBox";

Swiper.use([Pagination]);

export default {
  // asyncData( {$dateFns} ) {
  //   return {
  //     dateFormatted: $dateFns.format(new Date())
  //   }
  // },
  data() {
    return {
      welcomeCardsSwiper: null,
      defaultViewSwiper1: null,
      defaultViewSwiper2: null,
      accentSectionSwiper: null,
      fluidViewSwiper: null,
      soloViewSwiper: null,
    };
  },
  components: {
    MailBox
  },
  computed: {
    loadedOrder1() {
      if (this.$store.getters.loadedOrder1) {
        return this.$store.getters.loadedOrder1
      }
    },
    mainRandomArticle() {
      return this.$store.getters.loadedRandomArticles[0]
    },
    randomArticles() {
      return this.$store.getters.loadedRandomArticles
    },
    loadedOrder2() {
      return this.$store.getters.loadedOrder2
    },
    loadedOrder3() {
      return this.$store.getters.loadedOrder3
    },
    loadedOrder4() {
      return this.$store.getters.loadedOrder4
    },
    loadedOrder5() {
      return this.$store.getters.loadedOrder5
    },
    loadedOrder6() {
      return this.$store.getters.loadedOrder6
    },
    loadedRedBook() {
      return this.$store.getters.loadedRedBook
    },
    loadedFavourites() {
      return this.$store.getters.loadedFavourites
    }
  },
  mounted() {

    this.welcomeCardsSwiper = new Swiper('.welcome-section__swiper-container', {
      slidesPerView: "auto",
      spaceBetween: 8,
      pagination: {
        el: '.welcome-section__pagination',
      },

      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }
    });

    this.defaultViewSwiper1 = new Swiper('.default-view__swiper-container--1', {
      slidesPerView: "auto",
      spaceBetween: 8,
      pagination: {
        el: '.default-view__pagination--1',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }
    });

    this.defaultViewSwiper2 = new Swiper('.default-view__swiper-container--2', {
      slidesPerView: "auto",
      spaceBetween: 8,
      pagination: {
        el: '.default-view__pagination--2',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }
    });

    this.accentSectionSwiper = new Swiper('.accent-section__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.accent-section__pagination',
      },
      breakpoints: {
        768: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
      }
    });

    this.fluidViewSwiper = new Swiper('.fluid-view__swiper-container', {
      slidesPerView: "auto",
      spaceBetween: 8,
      pagination: {
        el: '.fluid-view__pagination',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }
    });

    this.soloViewSwiper = new Swiper('.solo-view__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 56,
      pagination: {
        el: '.solo-view__pagination',
      },
    });
  }
}
</script>

<style>

</style>

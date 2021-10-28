<template>
  <main class="main">

    <section class="main__section welcome-section">
      <div class="welcome-section__container">

        <div class="welcome-section__main">

          <div class="welcome-section__box">
            <img src="../assets/img/placholder.jpeg" alt="" class="welcome-section__img">

            <div class="welcome-section__box-info">
              <div class="welcome-section__heading">
                Новость дня
              </div>

              <div class="welcome-section__title">
                Как природа показала человеку, что пора остановиться
              </div>

              <div class="welcome-section__subtitle">
                Ученые эпидемиологи и инфекционисты рассказывают о том, что чем больше человек будет нападать на
                природу,
                тем сильнее она будет отбиваться.
              </div>
            </div>
          </div>

          <div class="welcome-section__scroll-box">
            <div class="welcome-section__items">

              <div class="welcome-section__item" v-for="i in 6">
                <div class="welcome-section__item-row">
                  <div class="welcome-section__item-heading">
                    Новости
                  </div>
                  <div class="welcome-section__item-date">
                    12 сентябрь 2021
                  </div>
                </div>

                <div class="welcome-section__item-title">
                  Противоположная точка зрения, что диаграммы связей, инициированные исключительно синтетически
                  asdf asdf asdf asdf adf инициированные исключительно синтетически инициированные исключительно
                  синтетически
                </div>
              </div>

            </div>

            <button class="welcome-section__btn button">
              Смотреть все Новости
            </button>
          </div>

        </div>

        <div class="welcome-section__cards">

          <div class="welcome-section__card card" v-for="i in 8">

            <div class="card__img-box">
              <img src="../assets/img/placeholder-3.jpeg" alt="" class="card__img">
            </div>

            <div class="card__info">

              <div class="card__row">
                <div class="card__heading">Новости</div>

                <div class="card__date">1 октябрь 2021</div>
              </div>

              <div class="card__title">
                Приятно, граждане, наблюдать, как элементы политического процесса
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

        <div class="swiper-container welcome-section__swiper-container">
          <div class="swiper-wrapper">

            <div class="welcome-section__card card swiper-slide" v-for="i in 8">

              <div class="card__img-box">
                <img src="../assets/img/placeholder-3.jpeg" alt="" class="card__img">
              </div>

              <div class="card__info">

                <div class="card__row">
                  <div class="card__heading">Новости</div>

                  <div class="card__date">1 октябрь 2021</div>
                </div>

                <div class="card__title">
                  Приятно, граждане, наблюдать, как элементы политического процесса
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

    <section class="main__section default-view">
      <div class="default-view__container">
        <div class="default-view__row">
          <h4 class="default-view__heading heading-medium">
            Наука
          </h4>

          <div class="default-view__more">
            <p>Смотреть все</p>
            <svg width="24" height="24">
              <use href="../assets/img/icons.svg#arrow-right"></use>
            </svg>
          </div>
        </div>

        <div class="default-view__cards">

          <div class="default-view__card card card--w-desc" v-for="i in 4">

            <div class="card__img-box">
              <img src="../assets/img/placeholder-3.jpeg" alt="" class="card__img">

              <div class="card__views">
                <svg width="20" height="20">
                  <use href="../assets/img/icons.svg#eye"></use>
                </svg>
                147k
              </div>

            </div>

            <div class="card__info">

              <div class="card__row">
                <div class="card__heading">Новости</div>

                <div class="card__date">1 октябрь 2021</div>
              </div>

              <div class="card__title">
                Приятно, граждане, наблюдать, как элементы политического процесса
              </div>

              <div class="card__desc">
                Приятно, граждане, наблюдать, как элементы политического процесса ограничены исключительно образом
              </div>
            </div>

          </div>

        </div>

        <div class="swiper-container default-view__swiper-container default-view__swiper-container--1">
          <div class="swiper-wrapper">

            <div class="default-view__card card card--w-desc swiper-slide" v-for="i in 4">

              <div class="card__img-box">
                <img src="../assets/img/placeholder-3.jpeg" alt="" class="card__img">

                <div class="card__views">
                  <svg width="20" height="20">
                    <use href="../assets/img/icons.svg#eye"></use>
                  </svg>
                  147k
                </div>

              </div>

              <div class="card__info">

                <div class="card__row">
                  <div class="card__heading">Новости</div>

                  <div class="card__date">1 октябрь 2021</div>
                </div>

                <div class="card__title">
                  Приятно, граждане, наблюдать, как элементы политического процесса
                </div>

                <div class="card__desc">
                  Приятно, граждане, наблюдать, как элементы политического процесса ограничены исключительно образом
                </div>
              </div>

            </div>

          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination default-view__pagination default-view__pagination--1"></div>
        </div>

      </div>
    </section>

    <section class="main__section accent-section">

      <div class="accent-section__container">

        <div class="accent-section__list">
          <div class="accent-section__card accent-card" v-for="i in 3">
            <img src="../assets/img/placeholder-3.jpeg" alt="" class="accent-card__img">

            <div class="accent-card__info">

              <div class="accent-card__heading">
                Дикая природа
              </div>

              <div class="accent-card__title">
                20 мест на планете, где природа
                не пожалела красок
              </div>

              <div class="accent-card__desc">
                С учётом сложившейся международной обстановки, сложившаяся структура организации однозначно определяет
                каждого участника как способного стр...
              </div>

              <div class="accent-card__details">
                <span>12 сентябрь 2021</span>
                <span>читать 10 минут</span>
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

            <div class="accent-section__card accent-card swiper-slide" v-for="i in 3">
              <img src="../assets/img/placeholder-3.jpeg" alt="" class="accent-card__img">

              <div class="accent-card__info">

                <div class="accent-card__heading">
                  Дикая природа
                </div>

                <div class="accent-card__title">
                  20 мест на планете, где природа
                  не пожалела красок
                </div>

                <div class="accent-card__desc">
                  С учётом сложившейся международной обстановки, сложившаяся структура организации однозначно определяет
                  каждого участника как способного стр...
                </div>

                <div class="accent-card__details">
                  <span>12 сентябрь 2021</span>
                  <span>читать 10 минут</span>
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

    <section class="main__section fluid-view">
      <div class="fluid-view__container">

        <div class="fluid-view__row">
          <h4 class="fluid-view__heading heading-medium">
            Дикая природа
          </h4>

          <div class="fluid-view__more">
            <p>Смотреть все</p>
            <svg width="24" height="24">
              <use href="../assets/img/icons.svg#arrow-right"></use>
            </svg>
          </div>
        </div>

        <div class="fluid-view__top">
          <div class="fluid-view__card card card--big" v-for="i in 2">
            <div class="card__img-box">
              <img src="../assets/img/placeholder-4.png" alt="" class="card__img">

              <div class="card__views">
                <svg width="20" height="20">
                  <use href="../assets/img/icons.svg#eye"></use>
                </svg>
                147k
              </div>

            </div>

            <div class="card__info">

              <div class="card__row">
                <div class="card__heading">Новости</div>
                <!--                <div class="card__date">1 октябрь 2021</div>-->
              </div>

              <div class="card__author">
                Малика Садваксассова
              </div>

              <div class="card__title">
                Что такое профессиональное выгорание?
              </div>

              <div class="card__desc">
                Приятно, граждане, наблюдать, как элементы политического процесса ограничены исключительно образом
              </div>

              <div class="card__details">
                <span>12 сентябрь 2021</span>
                <span>читать 10 минут</span>
              </div>
            </div>
          </div>
        </div>

        <div class="fluid-view__bottom">

          <div class="fluid-view__card card card--minimized" v-for="i in 4">

            <div class="card__img-box">
              <img src="../assets/img/placeholder-3.jpeg" alt="" class="card__img">

              <div class="card__views">
                <svg width="20" height="20">
                  <use href="../assets/img/icons.svg#eye"></use>
                </svg>
                147k
              </div>

            </div>

            <div class="card__info">

              <div class="card__row">
                <div class="card__heading">Новости</div>

                <div class="card__date">1 октябрь 2021</div>
              </div>

              <div class="card__author">
                Малика Садваксассова
              </div>

              <div class="card__title">
                Приятно, граждане, наблюдать, как элементы политического процесса
              </div>

            </div>
          </div>

        </div>

        <div class="swiper-container fluid-view__swiper-container">
          <div class="swiper-wrapper">

            <div class="fluid-view__card card card--minimized swiper-slide" v-for="i in 4">

              <div class="card__img-box">
                <img src="../assets/img/placeholder-3.jpeg" alt="" class="card__img">

                <div class="card__views">
                  <svg width="20" height="20">
                    <use href="../assets/img/icons.svg#eye"></use>
                  </svg>
                  147k
                </div>

              </div>

              <div class="card__info">

                <div class="card__row">
                  <div class="card__heading">Новости</div>

                  <div class="card__date">1 октябрь 2021</div>
                </div>

                <div class="card__author">
                  Малика Садваксассова
                </div>

                <div class="card__title">
                  Приятно, граждане, наблюдать, как элементы политического процесса
                </div>

              </div>
            </div>

          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination fluid-view__pagination"></div>
        </div>

      </div>
    </section>

    <section class="main__section red-book">
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
          <div class="red-book__card red-card" v-for="i in 4">
            <img src="../assets/img/placeholder-3.jpeg" alt="" class="red-card__img">

            <div class="red-card__info">
              <div class="red-card__heading">
                Красная книга Казахстана
              </div>

              <div class="red-card__title">
                -Снежный барс <br>
                -Panthera uncia
              </div>

              <div class="red-card__subtitle">
                Крупное хищное млекопитающее семейства кошачьих
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="main__section solo-view">
      <div class="solo-view__container">

        <div class="solo-view__row">
          <h4 class="solo-view__heading heading-medium">
            Дикая природа
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
              <img src="../assets/img/placeholder-4.png" alt="" class="card__img">

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
                  Малика Садваксассова
                </div>

                <div class="card__date">1 октябрь 2021</div>
              </div>

              <div class="card__title card__title--multiline">
                Противоположная точка зрения, что диаграммы связей, инициированные исключительно
              </div>

              <div class="card__desc card__desc--mb0">
                С учётом сложившейся международной обстановки, сложившаяся структура организации однозначно определяет
                каждого участника как способного стрasfd
              </div>
            </div>
          </div>

          <div class="solo-view__list">

            <div class="solo-view__card solo-view__card--mb10 card card--nophoto" v-for="i in 3">

              <div class="card__heading">
                Советы
              </div>

              <div class="card__grey-text">
                12 сентябрь 2021 - Сабина Юрченко
              </div>

              <div class="card__title">
                Что такое профессиональное выгорание?
              </div>

              <div class="card__desc">
                С учётом сложившейся международной обстановки, сложившаяся структура организации однозначно определяет
                каждого участника как способного.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <section class="main__section default-view">
      <div class="default-view__container">
        <div class="default-view__row">
          <h4 class="default-view__heading heading-medium">
            Наука
          </h4>

          <div class="default-view__more">
            <p>Смотреть все</p>
            <svg width="24" height="24">
              <use href="../assets/img/icons.svg#arrow-right"></use>
            </svg>
          </div>
        </div>

        <div class="default-view__cards">

          <div class="default-view__card card card--w-desc" v-for="i in 4">

            <div class="card__img-box">
              <img src="../assets/img/placeholder-3.jpeg" alt="" class="card__img">

              <div class="card__views">
                <svg width="20" height="20">
                  <use href="../assets/img/icons.svg#eye"></use>
                </svg>
                147k
              </div>

            </div>

            <div class="card__info">

              <div class="card__row">
                <div class="card__heading">Новости</div>

                <div class="card__date">1 октябрь 2021</div>
              </div>

              <div class="card__title">
                Приятно, граждане, наблюдать, как элементы политического процесса
              </div>

              <div class="card__desc">
                Приятно, граждане, наблюдать, как элементы политического процесса ограничены исключительно образом
              </div>
            </div>

          </div>

        </div>

        <div class="swiper-container default-view__swiper-container default-view__swiper-container--2">
          <div class="swiper-wrapper">

            <div class="default-view__card card card--w-desc swiper-slide" v-for="i in 4">

              <div class="card__img-box">
                <img src="../assets/img/placeholder-3.jpeg" alt="" class="card__img">

                <div class="card__views">
                  <svg width="20" height="20">
                    <use href="../assets/img/icons.svg#eye"></use>
                  </svg>
                  147k
                </div>

              </div>

              <div class="card__info">

                <div class="card__row">
                  <div class="card__heading">Новости</div>

                  <div class="card__date">1 октябрь 2021</div>
                </div>

                <div class="card__title">
                  Приятно, граждане, наблюдать, как элементы политического процесса
                </div>

                <div class="card__desc">
                  Приятно, граждане, наблюдать, как элементы политического процесса ограничены исключительно образом
                </div>
              </div>

            </div>

          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination default-view__pagination default-view__pagination--2"></div>
        </div>

      </div>
    </section>

    <section class="main__section staggered-view">
      <div class="staggered-view__container">

        <div class="staggered-view__row">
          <h4 class="staggered-view__heading heading-medium">
            Наука
          </h4>

          <div class="staggered-view__more">
            <p>Смотреть все</p>
            <svg width="24" height="24">
              <use href="../assets/img/icons.svg#arrow-right"></use>
            </svg>
          </div>
        </div>

        <div class="staggered-view__cards">

          <div class="staggered-view__card staggered-card" v-for="i in 6">

            <div class="staggered-card__img-box">
              <img src="../assets/img/placeholder-3.jpeg" alt="" class="staggered-card__img">
              <div class="staggered-card__views">
                <svg width="20" height="20">
                  <use href="../assets/img/icons.svg#eye"></use>
                </svg>
                147k
              </div>
            </div>

            <div class="staggered-card__info">
              <div class="staggered-card__heading">
                Мнения
              </div>

              <div class="staggered-card__grey-text">
                12 сентябрь 2021 - Асхат Максатов
              </div>

              <div class="staggered-card__title">
                Равным образом реализация
              </div>

              <div class="staggered-card__subtitle">
                Приятно, граждане, наблюдать, как элементы политического процесса ограничены исключительно красиво
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
  data() {
    return {
      welcomeCardsSwiper: null,
      defaultViewSwiper1: null,
      defaultViewSwiper2: null,
      accentSectionSwiper: null,
      fluidViewSwiper: null,
      soloViewSwiper: null
    };
  },
  components: {
    MailBox
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
      slidesPerView: 1,
      spaceBetween: 56,
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
      slidesPerView: 1,
      spaceBetween: 56,
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

<template>
  <div class="rubric-page">
    <div class="rubric-page__container">
      <div class="rubric-page__breadcrumb breadcrumb">
        Главная / Новости / <span>Статья</span>
      </div>

      <div class="rubric-page__main">

        <div class="rubric-page__img-box rubric-page__img-box--h600">

          <img src="../../assets/img/placeholder-3.jpeg" alt="" class="rubric-page__img">

          <div class="rubric-page__img-info rubric-page__img-info--redbook rubric-page__img-info--tab-none">

            <h4>Снежный барс</h4>

            <div>
              <span>Домен:</span>
              <span>Эукариоты</span>
            </div>

            <div>
              <span>Царство:</span>
              <span>Эукариоты</span>
            </div>

            <div>
              <span>Тип:</span>
              <span>Хордовые</span>
            </div>

            <div>
              <span>Класс:</span>
              <span>Млекопитающие</span>
            </div>

            <div>
              <span>Отряд:</span>
              <span>Хищные</span>
            </div>

            <div>
              <span>Семейство:</span>
              <span>Кошачьи</span>
            </div>

            <div>
              <span>Род:</span>
              <span>Пантеры</span>
            </div>

            <div>
              <span>Вид:</span>
              <span>Ирбис</span>
            </div>

          </div>

        </div>

        <div class="rubric-page__img-info rubric-page__img-info--redbook rubric-page__img-info--desktop-none">

          <h4>Снежный барс</h4>

          <div>
            <span>Домен:</span>
            <span>Эукариоты</span>
          </div>

          <div>
            <span>Царство:</span>
            <span>Эукариоты</span>
          </div>

          <div>
            <span>Тип:</span>
            <span>Хордовые</span>
          </div>

          <div>
            <span>Класс:</span>
            <span>Млекопитающие</span>
          </div>

          <div>
            <span>Отряд:</span>
            <span>Хищные</span>
          </div>

          <div>
            <span>Семейство:</span>
            <span>Кошачьи</span>
          </div>

          <div>
            <span>Род:</span>
            <span>Пантеры</span>
          </div>

          <div>
            <span>Вид:</span>
            <span>Ирбис</span>
          </div>

        </div>

        <div class="rubric-page__row rubric-page__row--phone-column">

          <div class="rubric-page__column rubric-page__column--mb20 rubric-page__column--w690">

            <div class="rubric-page__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum esse id labore, laborum obcaecati,
              omnis pariatur, perspiciatis placeat quis quisquam quo sunt velit. Dolores nulla porro quam saepe velit!
            </div>

          </div>

          <div class="rubric-page__column rubric-page__column--w470">

            <div class="rubric-page__status-box status-box">

              <div class="status-box__title">
                Статус
              </div>

              <ul class="status-box__list">
                <li>На территории Казахстана насчитывается около 3000</li>
                <li>По всему миру насчитывается менее 7 000</li>
                <li>Ясность нашей позиции очевидна: высокое качество позиционных исследований</li>
                <li>Есть над чем задуматься: активно развивающиеся страны</li>
              </ul>

            </div>

            <div class="rubric-page__facts status-box status-box--green">
              <div class="status-box__title">
                Интересные факты:
              </div>

              <ul class="status-box__list">
                <li>Предварительные выводы неутешительны: современная методология разработки выявляет срочную
                  потребность дальнейших направлений развития
                </li>
                <li>Для современного мира понимание сути ресурсосберегающих технологий предоставляет широкие возможности
                  для приоритизации разума над эмоциями
                </li>
                <li>Ясность нашей позиции очевидна: высокое качество позиционных исследований напрямую зависит от
                  поэтапного и последовательного развития общества
                </li>
                <li>Есть над чем задуматься: активно развивающиеся страны третьего мира неоднозначны и будут объединены
                  в целые кластеры себе подобных.
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>

      <div class="rubric-page__interest">

        <div class="rubric-page__title-row">
          <div class="rubric-page__interest-title rubric-page__interest-title--mb0">
            Другие виды из Красной книги
          </div>

          <div class="rubric-page__title-more">
            <p>Смотреть все</p>
            <svg width="24" height="24">
              <use href="../../assets/img/icons.svg#arrow-right"></use>
            </svg>
          </div>
        </div>

        <div class="rubric-page__interest-list rubric-page__interest-list--grid4">


          <div class="rubric-page__card red-card" v-for="i in 4">
            <img src="../../assets/img/placeholder-3.jpeg" alt="" class="red-card__img">

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


        <div class="swiper-container rubric-page__swiper-container rubric-page__swiper-container--2">
          <div class="swiper-wrapper">

            <div class="rubric-page__card red-card red-card--h338 swiper-slide" v-for="i in 4">
              <img src="../../assets/img/placeholder-3.jpeg" alt="" class="red-card__img">

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
          <!-- Add Pagination -->
          <div class="swiper-pagination rubric-page__pagination rubric-page__pagination--2"></div>
        </div>

      </div>

      <mail-box class="rubric-page__mail-box"></mail-box>

    </div>
  </div>
</template>

<script>
import Swiper, {Pagination} from 'swiper';
import MailBox from "../../components/MailBox";

Swiper.use([Pagination]);

export default {
  components: {
    MailBox
  },
  data() {
    return {
      rubricSwiper2: null,
    }
  },
  mounted() {
    this.rubricSwiper2 = new Swiper('.rubric-page__swiper-container--2', {
      slidesPerView: "auto",
      spaceBetween: 8,
      pagination: {
        el: '.rubric-page__pagination--2',
      },
    });
  }
}
</script>
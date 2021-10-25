<template>
  <div class="rubric-page">
    <div class="rubric-page__container">
      <div class="rubric-page__breadcrumb breadcrumb">
        Главная / Новости / <span>Статья</span>
      </div>

      <div class="rubric-page__main">

        <div class="rubric-page__img-box">

          <img src="../../assets/img/placeholder-3.jpeg" alt="" class="rubric-page__img">

          <div class="rubric-page__img-info">

            <div class="rubric-page__views rubric-page__views--mb10">
              <svg width="24" height="24">
                <use href="../../assets/img/icons.svg#eye"></use>
              </svg>
              147k
            </div>

            <div class="rubric-page__img-title">
              Как природа показала человеку, что пора остановиться
            </div>

            <div class="rubric-page__img-desc">
              Ученые эпидемиологи и инфекционисты рассказывают о том, что чем больше человек будет нападать на природу,
              тем сильнее она будет отбиваться.
            </div>

          </div>

        </div>

        <div class="rubric-page__row">

          <div class="rubric-page__column rubric-page__column--w285">

            <div class="rubric-page__details-box rubric-details">
              <div class="rubric-details__row">
                <span class="rubric-details__grey">Автор:</span>
                <span class="rubric-details__green">Сабина Юрченко</span>
              </div>
              <div class="rubric-details__row">
                <span class="rubric-details__grey">Дата:</span>
                <span class="rubric-details__green">12 сентябрь 2021</span>
              </div>
              <div class="rubric-details__row">
                <span class="rubric-details__grey">Время прочтения:</span>
                <span class="rubric-details__green">7 минут</span>
              </div>
              <div class="rubric-details__row rubric-details__row--center">
                <span class="rubric-details__grey">Поделиться:</span>
                <span class="rubric-details__socials">
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#twitter-brown"></use>
                  </svg>
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#fb-brown"></use>
                  </svg>
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#vk-brown"></use>
                  </svg>
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#inst-brown"></use>
                  </svg>
                </span>
              </div>
              <div class="rubric-details__row">
                <span class="rubric-details__grey rubric-details__grey--italic">Фотография: Pexels</span>
              </div>
            </div>

            <div class="rubric-page__collaborators collaborators-box">
              <div class="collaborators-box__title">
                В создании статьи также участвовали:
              </div>

              <div class="collaborators-box__row">
                <span class="collaborators-box__name">Визуальное оформление:</span>
                <span class="collaborators-box__value">Сабина Юрченко</span>
              </div>
              <div class="collaborators-box__row">
                <span class="collaborators-box__name">Иллюстратор:</span>
                <span class="collaborators-box__value">Малика Хазова</span>
              </div>
              <div class="collaborators-box__row">
                <span class="collaborators-box__name">Редактор:</span>
                <span class="collaborators-box__value">Динара Мусина</span>
              </div>
            </div>

          </div>

          <div class="rubric-page__column rubric-page__column--w570">

            <div class="rubric-page__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum esse id labore, laborum obcaecati,
              omnis pariatur, perspiciatis placeat quis quisquam quo sunt velit. Dolores nulla porro quam saepe velit!
            </div>

            <div class="rubric-page__grey-text rubric-page__grey-text--mb20">
              Автор: Сабина Юрченко
            </div>

            <div class="rubric-page__tags">
              <div class="rubric-page__tag">
                #Дикая природа
              </div>
              <div class="rubric-page__tag">
                #Красная книга Казахстана
              </div>
              <div class="rubric-page__tag">
                #Новости
              </div>
            </div>

            <div class="rubric-page__share">
              <span>Поделиться:</span>

              <div class="rubric-page__socials">
                <svg width="30" height="30">
                  <use href="../../assets/img/icons.svg#twitter-green"></use>
                </svg>
                <svg width="30" height="30">
                  <use href="../../assets/img/icons.svg#fb-green"></use>
                </svg>
                <svg width="30" height="30">
                  <use href="../../assets/img/icons.svg#vk-green"></use>
                </svg>
                <svg width="30" height="30">
                  <use href="../../assets/img/icons.svg#inst-green"></use>
                </svg>
              </div>
            </div>
          </div>

          <div class="rubric-page__column rubric-page__column--w285">
            <div class="rubric-page__recommends recommend-box">
              <div class="recommend-box__title">
                РЕКОМЕНДУЕМОЕ
              </div>

              <div class="recommend-box__list">
                <div class="recommend-box__item" v-for="i in 10">
                  <div class="recommend-box__item-heading">
                    Новости
                  </div>
                  <div class="recommend-box__item-title">
                    Противоположная точка зрения, что диаграммы связей, инициированные
                  </div>
                  <div class="recommend-box__item-date">
                    12 сентябрь 2021
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div class="rubric-page__interest">

        <div class="rubric-page__interest-title">
          Вас также могут заинтересовать
        </div>

        <div class="rubric-page__interest-list">

          <div class="rubric-page__card card card--nopadding" v-for="i in 3">

            <div class="card__img-box">
              <img src="../../assets/img/placeholder-3.jpeg" alt="" class="card__img">

              <div class="card__views">
                <svg width="20" height="20">
                  <use href="../../assets/img/icons.svg#eye"></use>
                </svg>
                147k
              </div>

            </div>

            <div class="card__info">

              <div class="card__author card__author--sm">
                Малика Садваксассова
              </div>

              <div class="card__title card__title--two-line">
                Приятно, граждане, наблюдать, как элементы политического процесса
              </div>

              <div class="card__desc card__desc--mb12">
                Приятно, граждане, наблюдать, как элементы политического процесса ограничены исключительно образом
              </div>

              <div class="card__details card__details--sm">
                <span>12 сентябрь 2021</span>
                <span>читать 10 минут</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <mail-box class="rubric-page__mail-box"></mail-box>


    </div>
  </div>
</template>

<script>
import MailBox from "../../components/MailBox";

export default {
  components: {
    MailBox
  }
}
</script>
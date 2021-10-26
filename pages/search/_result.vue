<template>
  <div class="search-page">
    <div class="search-page__container">
      <div class="search-page__breadcrumb breadcrumb">
        Главная / <span>Результаты поиска</span>
      </div>

      <div class="search-page__heading heading-large">
        Результаты поиска
        <span>12</span>
      </div>

      <div class="search-page__list">

        <div class="search-page__card staggered-card staggered-card--nostagger" v-for="i in 6">

          <div class="staggered-card__img-box">
            <img src="../../assets/img/placeholder-3.jpeg" alt="" class="staggered-card__img">
<!--            <div class="staggered-card__views">-->
<!--              <svg width="20" height="20">-->
<!--                <use href="../../assets/img/icons.svg#eye"></use>-->
<!--              </svg>-->
<!--              147k-->
<!--            </div>-->
          </div>

          <div class="staggered-card__info">
            <div class="staggered-card__heading">
              Мнения
            </div>

            <div class="staggered-card__grey-text staggered-card__grey-text--darker">
              12 сентябрь 2021 - Асхат Максатов
            </div>

            <div class="staggered-card__title">
              Равным образом реализация
            </div>

            <div class="staggered-card__subtitle">
              Приятно, граждане, наблюдать, как элементы политического процесса ограничены исключительно красиво
            </div>

            <div class="staggered-card__details">
              <span>12 сентябрь 2021</span>
              <span>читать 10 минут</span>
            </div>
          </div>

        </div>

      </div>

      <div class="search-page__empty">
        По вашему запросу ничего не найдено
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
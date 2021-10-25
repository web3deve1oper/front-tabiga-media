<template>
  <div class="rubrics">
    <div class="rubrics__container">

      <div class="rubrics__breadcrumb breadcrumb">
        Главная / <span>Новости</span>
      </div>

      <h2 class="rubrics__heading heading-large">
        Новости
      </h2>

      <p class="rubrics__desc">
        Мы вынуждены отталкиваться от того, что семантический разбор внешних противодействий обеспечивает широкому кругу
        участие в формировании переосмысления внешнеэкономических
      </p>

      <div class="rubrics__main">

        <div class="rubrics__filters">
          <p>Сортировать:</p>
          <span class="rubrics__filter-item">Сначала новые</span>
          <span class="rubrics__filter-item rubrics__filter-item--active">По популярности</span>
        </div>

        <div class="rubrics__cards">
          <div class="rubrics__card card card--nopadding" v-for="i in 8">

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

        <div class="rubrics__paddings padding">

          <div class="padding__arrow padding__arrow--left">
            <svg width="30" height="30">
              <use href="../../assets/img/icons.svg#arrow-big"></use>
            </svg>
          </div>

          <div class="padding__numbers">
            <div class="padding__number">1</div>
            <div class="padding__number padding__number--active">2</div>
            <div class="padding__number">3</div>
            <div class="padding__number">4</div>
            <div class="padding__number">...</div>
            <div class="padding__number">10</div>
          </div>

          <div class="padding__arrow padding__arrow--right">
            <svg width="30" height="30">
              <use href="../../assets/img/icons.svg#arrow-big"></use>
            </svg>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>


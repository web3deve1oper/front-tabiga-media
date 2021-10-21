<template>
  <main class="main">
    <section class="main__section welcome-section">
      <div class="welcome-section__container">

        <div class="welcome-section__main">

          <div class="welcome-section__box">
            <img src="../assets/img/welcome-page-img.png" alt="" class="welcome-section__img">

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
                </div>
              </div>

            </div>
            <button class="welcome-section__btn button">
              Смотреть все Новости
            </button>
          </div>

        </div>


      </div>
    </section>
  </main>
</template>

<script>
export default {}
</script>

<style>

</style>

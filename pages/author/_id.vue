<template>
  <div class="author-page">
    <div class="author-page__container">

      <div class="author-page__breadcrumb breadcrumb">
        Главная / <span>Сабина Юрченко</span>
      </div>

      <div class="author-page__row">
        <div class="author-page__img-box">
          <img src="../../assets/img/placeholder-3.jpeg" alt="" class="author-page__img">
        </div>

        <div class="author-page__info">
          <div class="author-page__name">
            Сабина Юрченко
          </div>

          <div class="author-page__desc">
            Также как курс на социально-ориентированный национальный проект создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом комплекса как самодостаточных, так и
            внешне зависимых концептуальных решений!

            Разнообразный и богатый опыт говорит нам, что семантический разбор внешних противодействий требует анализа
            модели развития. Принимая во внимание показатели успешности, повышение уровня гражданского сознания
            позволяет выполнить важные задания по разработке вывода текущих активов.
          </div>
        </div>

      </div>

      <div class="author-page__heading heading-medium">
        Статьи автора
      </div>

      <div class="author-page__rubrics">
        <div class="author-page__rubric author-page__rubric--active">Все</div>
        <div class="author-page__rubric">Бёрдвочинг</div>
        <div class="author-page__rubric">Дикая природа</div>
        <div class="author-page__rubric">Наука</div>
      </div>

      <div class="author-page__list">

        <div class="author-page__card card card--w100 card--w-desc" v-for="i in 7">

          <div class="card__img-box card__img-box--h217">
            <img src="../../assets/img/placeholder-3.jpeg" alt="" class="card__img">

            <div class="card__views">
              <svg width="20" height="20">
                <use href="../../assets/img/icons.svg#eye"></use>
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

      <mail-box class="author-page__mail-box"></mail-box>

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
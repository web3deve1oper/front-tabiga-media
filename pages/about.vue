<template>
  <div class="about-page">
    <div class="about-page__container">
      <div class="about-page__breadcrumb breadcrumb">
        Главная / <span>О проекте</span>
      </div>
    </div>

    <div class="about-page__header">
      <div class="about-page__container">
        <div class="about-page__title">
          О проекте
        </div>
        <div class="about-page__subtitle">
          <span>Tabigat media</span> — онлайн журнал на казахском и русском языках, об охране природы, отражающий
          государственную и
          общественную политику в области экологического просвещения, воспитания и обучения
        </div>
      </div>
    </div>

    <div class="about-page__container">
      <div class="about-page__row">
        <div class="about-page__text">
          Tabigat media — онлайн журнал на казахском и русском языках, об охране природы, отражающий государственную и
          общественную политику в области экологического просвещения, воспитания и обучения <br><br>

          Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке представляют собой. Следует
          отметить, что семантический разбор внешних противодействий не даёт нам иного выбора <br><br>

          Значимость этих проблем настолько очевидна, что повышение уровня гражданского сознания. А ещё сторонники
          тоталитаризма в науке функционально разнесены на независимые элементы <br><br>

          Основатель проекта — Зауре Розмат <br>
          Главный редактор — Гульнар Наурызбай <br>
          Коммерческий директор — Лаура Кабдунас <br>
          Выпускающий редактор — Екатерина Лейман <br>
          Арт-директор — Жулдыз Тажигалиева <br>
          Иллюстратор — Ольга Цай <br>
          Фотограф-видеограф — Акерке Сыбанкулова <br>
          Редакторы: Данеля Ходжаева, Жасмин Ризабекова, Молдир Мухит, Анеля Балагозинова <br>

          Если вы хотите стать частью нашей команды, отправляйте резюме на info@tabigatmedia.kz с пометкой «стажер» или
          «редактор». <br><br>

          Мы всегда находимся в поиске авторов для рубрики «Бёердвочинг» и «Наука», поэтому если вы хотите писать для
          нас на эти темы, то отправляйте свое резюме на tabigat.media@gmail.com <br><br>

          По вопросам сотрудничества с редакцией пишите на info@tabigatmedia.kz. Мы внимательно читаем всё, что приходит
          на почту.
        </div>

        <div class="about-page__rubrics">
          <h6>Рубрики</h6>
          <ul>
            <nuxt-link tag="li"
                       :to="'/' + rubric.slug + ':' + rubric.id"
                       v-for="rubric in loadedRubrics"
                       :key="rubric.id">
              {{ rubric.title }}
            </nuxt-link>
          </ul>
        </div>

      </div>

      <mail-box class="about-page__mail-box"></mail-box>
    </div>

  </div>
</template>

<script>
import MailBox from "../components/MailBox";

export default {
  components: {
    MailBox
  },
  computed: {
    loadedRubrics() {
      return this.$store.getters.loadedRubrics
    }
  }
}
</script>
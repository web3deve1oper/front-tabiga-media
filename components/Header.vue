<template>
  <header class="header" :class="{'header--active' : searchShow, 'header--fixed' : sidebarShow}">
    <div class="header__container">
      <img src="../assets/img/header-logo.svg" alt="" class="header__logo">

      <ul class="header__links header__links--w510">
        <nuxt-link tag="li" :to="'/' + rubric.slug + ':' + rubric.id"
                   class="header__link"
                   v-for="(rubric, i) in loadedRubrics" :key="rubric.id"
                   v-if="i < 5">{{ rubric.title }}</nuxt-link>
<!--        <li class="header__link header__link&#45;&#45;red">Красная книга</li>-->
      </ul>
      <ul class="header__links">
<!--        <li class="header__link" v-for="rubric in loadedRubrics">{{ rubric.title }}</li>-->
        <nuxt-link tag="li" to="/red-book" class="header__link header__link--red">Красная книга</nuxt-link>
      </ul>

      <button class="header__btn button" @click="showModal = true">
        Подписаться
      </button>

      <form class="header__search-box">
        <input type="text" class="header__search-input" placeholder="Введите ваш запрос..." v-model="searchData">

        <div class="header__icon-box" @click="search">
          <svg class="header__search" width="24" height="24">
            <use href="../assets/img/icons.svg#search"></use>
          </svg>
        </div>
      </form>

      <svg class="header__burger" width="30" height="30"
           v-show="(!searchShow && !sidebarShow)"
           @click="openSidebar">
        <use href="../assets/img/icons.svg#burger"></use>
      </svg>

      <svg class="header__burger" width="24" height="24"
           v-show="sidebarShow || searchShow"
           @click="closeAll">
        <use href="../assets/img/icons.svg#cross"></use>
      </svg>

    </div>

    <div class="header__sidebar sidebar" :class="{'sidebar--active' : sidebarShow}">
      <div class="sidebar__container">
        <div class="sidebar__heading">
          Меню
        </div>

        <div class="sidebar__items">
          <div class="sidebar__item">О проекте</div>
          <div class="sidebar__item">Обратная связь</div>
          <button class="sidebar__btn button" @click="showModal = true">
            Подписаться на рассылку
          </button>
        </div>

        <div class="sidebar__title">
          Рубрики
        </div>

        <ul class="sidebar__rubrics">
          <nuxt-link tag="li" :to="'/nauka:' + rubric.id"
                     v-for="rubric in loadedRubrics"
                     :key="rubric.id">{{ rubric.title }}</nuxt-link>
        </ul>
      </div>
    </div>

    <success-modal v-if="showModal"
                   @close="showModal = false"
                   :title="modalTitle"
                   :subtitle="modalText"
                   :type="modalType"></success-modal>
  </header>
</template>

<script>
import SuccessModal from "./SuccessModal";

export default {
  components: {
    SuccessModal
  },
  data() {
    return {
      sidebarShow: false,
      searchShow: false,
      searchData: '',
      showModal: false,
      modalTitle: 'Спасибо!',
      modalText: 'Вы успешно подписались на рассылку от Tabigat media',
      modalType: true
    };
  },
  computed: {
    loadedRubrics() {
      return this.$store.getters.loadedRubrics
    }
  },
  mounted() {
    console.log(this.loadedRubrics)
  },
  methods: {
    search() {
      if(this.searchShow) {
        this.$router.push('/search/' + this.searchData)
      } else {
        this.searchShow = true
      }
    },
    openSidebar() {
      this.sidebarShow = true;
    },
    closeAll() {
      this.searchShow = false;
      this.sidebarShow = false;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

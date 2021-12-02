<template>
  <header class="header" :class="{'header--active' : searchShow, 'header--fixed' : sidebarShow, 'header--fixed' : scrollPosition > 0}">
    <div class="header__container">
      <nuxt-link to="/">
        <img src="../assets/img/header-logo.svg" alt="" class="header__logo">
      </nuxt-link>

      <ul class="header__links header__links--w510">
        <nuxt-link tag="li" :to="'/' + rubric.slug + ':' + rubric.id"
                   class="header__link"
                   v-for="(rubric, i) in loadedRubrics"
                   :key="rubric.id"
                   v-if="i < 5">{{ rubric.title }}
        </nuxt-link>
        <!--        <li class="header__link header__link&#45;&#45;red">Красная книга</li>-->
      </ul>
      <ul class="header__links">
        <!--        <li class="header__link" v-for="rubric in loadedRubrics">{{ rubric.title }}</li>-->
        <nuxt-link tag="li" to="/red-book" class="header__link header__link--red">Красная книга</nuxt-link>
      </ul>

      <button class="header__btn button"
              v-scroll-to="{el:'#mail-box', duration: 700, offset: -300, onDone: onDone}">
        Подписаться
      </button>

      <div class="header__search-box">
        <input type="text" class="header__search-input" placeholder="Введите ваш запрос..." v-model="searchData">

        <div class="header__icon-box" @click="search">
          <svg class="header__search" width="24" height="24">
            <use href="../assets/img/icons.svg#search"></use>
          </svg>
        </div>
      </div>

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

        <ul class="sidebar__rubrics">
          <nuxt-link tag="div"
                     to="/red-book"
                     @click.native="sidebarShow = false"
                     class="sidebar__item sidebar__item--red">Красная книга</nuxt-link>
          <nuxt-link tag="li"
                     :to="'/nauka:' + rubric.id"
                     @click.native="sidebarShow = false"
                     v-for="rubric in loadedRubrics"
                     :key="rubric.id">{{ rubric.title }}
          </nuxt-link>
        </ul>

        <div class="sidebar__items">
          <nuxt-link tag="div"
                     to="/about"
                     @click.native="sidebarShow = false"
                     class="sidebar__item">О проекте</nuxt-link>
          <nuxt-link tag="div"
                     to="/contact"
                     @click.native="sidebarShow = false"
                     class="sidebar__item">Обратная связь</nuxt-link>
        </div>
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
      modalType: true,
      scrollPosition: null
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
    updateScroll() {
      this.scrollPosition = window.scrollY
    },

    search() {
      if (this.searchShow) {
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
    },
    onDone() {
      this.sidebarShow = false;
    }
  },
  created() {
    if(!this.$isServer) {
      window.addEventListener('scroll', this.updateScroll);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

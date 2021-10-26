<template>
  <header class="header" :class="{'header--active' : searchShow}">
    <div class="header__container">
      <img src="../assets/img/header-logo.svg" alt="" class="header__logo">

      <ul class="header__links">
        <li class="header__link">Наука</li>
        <li class="header__link">Дикая природа</li>
        <li class="header__link">Советы</li>
        <li class="header__link">Бёрдвочинг</li>
        <li class="header__link">Мнения</li>
        <li class="header__link header__link--red">Красная книга</li>
      </ul>

      <button class="header__btn button" @click="showModal = true">
        Подписаться
      </button>

      <form class="header__search-box">
        <input type="text" class="header__search-input" v-model="searchData">

        <div class="header__icon-box" @click="search">
          <svg class="header__search" width="24" height="24">
            <use href="../assets/img/icons.svg#search"></use>
          </svg>
        </div>
      </form>

      <svg class="header__burger" width="30" height="30" v-if="!searchShow">
        <use href="../assets/img/icons.svg#burger"></use>
      </svg>

      <svg class="header__burger" width="24" height="24"
           v-else
           @click="searchShow = false">
        <use href="../assets/img/icons.svg#cross"></use>
      </svg>

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
      searchShow: false,
      searchData: '',
      showModal: false,
      modalTitle: 'Спасибо!',
      modalText: 'Вы успешно подписались на рассылку от Tabigat media',
      modalType: false
    };
  },
  methods: {
    search() {
      if(this.searchShow) {
        this.$router.push('/search/' + this.searchData)
      } else {
        this.searchShow = true
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

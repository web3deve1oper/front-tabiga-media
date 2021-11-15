<template>
  <div class="contact-page">
    <img src="../assets/img/contact-bg-left.svg" alt="" class="contact-page__bg contact-page__bg--left">
    <img src="../assets/img/contact-bg-right.svg" alt="" class="contact-page__bg contact-page__bg--right">
    <div class="contact-page__container">

      <div class="contact-page__breadcrumb breadcrumb">
        Главная / <span>Контакты</span>
      </div>

      <div class="contact-page__heading heading-large">
        Как с нами связаться
      </div>

      <div class="contact-page__subtitle">
        Мы всегда готовы помочь и ответить на все ваши вопросы.
      </div>

      <div class="contact-page__row">
        <div class="contact-page__item">
          <svg width="24" height="24">
            <use href="../assets/img/icons.svg#mail-2"></use>
          </svg>
          info@tabigatmedia.kz
        </div>

        <div class="contact-page__item">
          <svg width="24" height="24">
            <use href="../assets/img/icons.svg#phone"></use>
          </svg>
          +7 (ххх) ххх хх хх
        </div>

        <div class="contact-page__item contact-page__item--start">
          <svg width="24" height="24">
            <use href="../assets/img/icons.svg#pin"></use>
          </svg>
          Казахстан, г. Алматы <br>
          ул Байзакова 280
        </div>
      </div>

      <div class="contact-page__box contact-box">

        <div class="contact-box__title">
          Обратная связь
        </div>

        <form class="contact-box__form" @submit.prevent="sendRequest">

          <div class="contact-box__input-box">
            <svg width="24" height="24">
              <use href="../assets/img/icons.svg#user"></use>
            </svg>
            <input type="text" class="contact-box__input" placeholder="Имя" v-model="fullName">
          </div>

          <div class="contact-box__input-box">
            <svg width="24" height="24">
              <use href="../assets/img/icons.svg#mail-2"></use>
            </svg>
            <input type="email" class="contact-box__input" placeholder="E-mail" required v-model="email">
          </div>

          <div class="contact-box__input-box contact-box__input-box--select">
            <div class="contact-box__select"
                 :class="{'contact-box__select--active' : textState}"
                 @click="dropdownToggle">
              <p>{{ contactType }}</p>
              <svg width="24" height="24"
                   class="contact-box__arrow"
                   :class="{'contact-box__arrow--active' : dropdownShow}">
                <use href="../assets/img/icons.svg#arrow-down"></use>
              </svg>
            </div>

            <div class="contact-box__dropdown" v-show="dropdownShow">
              <div class="contact-box__dropdown-item" @click="chooseType('Обратная связь')">
                <p>Обратная связь</p>
                <svg width="24" height="24" v-if="contactType === 'Обратная связь'">
                  <use href="../assets/img/icons.svg#radio-active"></use>
                </svg>
                <svg width="24" height="24" v-else>
                  <use href="../assets/img/icons.svg#radio"></use>
                </svg>
              </div>

              <div class="contact-box__dropdown-item" @click="chooseType('Предложения')">
                <p>Предложение</p>
                <svg width="24" height="24" v-if="contactType === 'Предложения'">
                  <use href="../assets/img/icons.svg#radio-active"></use>
                </svg>
                <svg width="24" height="24" v-else>
                  <use href="../assets/img/icons.svg#radio"></use>
                </svg>
              </div>
            </div>

          </div>

          <textarea class="contact-box__textarea" placeholder="Ваше сообщение" v-model="message"></textarea>

          <button class="contact-box__btn" type="submit">Отправить</button>

        </form>

      </div>
    </div>

    <success-modal v-if="showModal"
                   @close="showModal = false"
                   :title="modalTitle"
                   :subtitle="modalSubtitle"
                   :type="modalType"></success-modal>

  </div>
</template>

<script>
import SuccessModal from "../components/SuccessModal";

export default {
  components: {
    SuccessModal
  },
  data() {
    return {
      contactType: 'Выберите тип обратной связи',
      dropdownShow: false,
      textState: false,
      fullName: '',
      email: '',
      type: '',
      message: '',
      modalType: false,
      showModal: false,
      modalTitle: '',
      modalSubtitle: ''
    };
  },
  methods: {
    dropdownToggle() {
      this.dropdownShow = !this.dropdownShow
    },
    chooseType(type) {
      this.contactType = type;
      this.dropdownShow = false;
      this.textState = true;
    },
    sendRequest() {
      this.$axios.post(process.env.API + 'feedbacks/create', {
        full_name: this.fullName,
        email: this.email,
        type: this.contactType,
        message: this.message
      })
          .then(response => {
            if (response.data.message === "OK") {
              this.modalType = true
              this.showModal = true
              this.modalTitle = 'Спасибо!'
              this.modalSubtitle = 'С вами свяжутся в ближайшее время'
            } else {
              this.modalType = false
              this.showModal = true
              this.modalTitle = 'Упс!'
              this.modalSubtitle = 'Произошла ошибка, попробуйте снова'
            }
          })
          .catch(e => {
            if (e.response.data.errors.full_name[0] === "The full name field is required." || e.response.data.errors.full_name[0] === "The full name must be a string.") {
              this.modalType = false
              this.showModal = true
              this.modalTitle = 'Упс!'
              this.modalSubtitle = 'Произошла ошибка, введите пожалуйста ваше имя'
            } else {
              this.modalType = false
              this.showModal = true
              this.modalTitle = 'Упс!'
              this.modalSubtitle = 'Произошла ошибка, попробуйте снова'
            }
          })
    }
  }
}
</script>
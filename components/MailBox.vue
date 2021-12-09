<template>
  <section class="mailing-section" id="mail-box">
    <div class="mailing-section__container">
      <div class="mailing-section__info">
        <div class="mailing-section__title">
          Подписаться на рассылку
        </div>

        <div class="mailing-section__subtitle">
          Подпишись на рассылку от Tabigat media, чтобы читать самые свежие и интересные статьи первымs
        </div>
      </div>

      <form class="mailing-section__active-box" @submit.prevent="subscribe">
        <div class="mailing-section__input-box">
          <svg width="24" height="24">
            <use href="../assets/img/icons.svg#mail"></use>
          </svg>

          <input type="email"
                 class="mailing-section__input"
                 name="email"
                 required
                 placeholder="Введите ваш email ( example@gmail.com )"
                 v-model="mail">
        </div>

        <button class="mailing-section__btn">
          Подписаться
        </button>
      </form>

      <success-modal v-if="showModal"
                     @close="showModal = false"
                     :title="modalTitle"
                     :subtitle="modalSubtitle"
                     :type="modalType"></success-modal>
    </div>
  </section>
</template>

<script>
import SuccessModal from "./SuccessModal";

export default {
  components: {
    SuccessModal
  },
  data() {
    return {
      mail: '',
      modalType: false,
      showModal: false,
      modalTitle: '',
      modalSubtitle: ''
    }
  },
  methods: {
    subscribe() {
      this.$axios.post(process.env.API + 'mailings/subscribe/', {
        email: this.mail
      })
          .then(response => {
            this.$axios.post('https://api.sendpulse.com/addressbooks/' + localStorage.bookId + '/emails', {
              emails: this.mail
            })
                .then(response => {
                  console.log(response)
                })
            // if (response.data.message === "OK") {
            //   this.modalType = true
            //   this.showModal = true
            //   this.modalTitle = 'Спасибо!'
            //   this.modalSubtitle = 'Вы успешно подписались на рассылку от Tabigat media'
            //   this.mail = ''
            // } else {
            //   this.modalType = false
            //   this.showModal = true
            //   this.modalTitle = 'Упс!'
            //   this.modalSubtitle = 'Произошла ошибка, попробуйте снова'
            //   this.mail = ''
            // }
          })
          .catch(e => {
            if (e.response.data.errors.email[0] === "The email has already been taken.") {
              this.modalType = false
              this.showModal = true
              this.modalTitle = 'Упс!'
              this.modalSubtitle = 'Произошла ошибка, данная почта уже подписана на рассылку'
              this.mail = ''
            } else {
              this.modalType = false
              this.showModal = true
              this.modalTitle = 'Упс!'
              this.modalSubtitle = 'Произошла ошибка, попробуйте снова'
              this.mail = ''
            }
          })

      // this.$axios.post(process.env.API + 'feedbacks/create', {
      //   full_name: 'Asle',
      //   email: 'asd@asd.et',
      //   type: 'kekek',
      //   message: 'asdasd'
      // })
      //     .then(response => {
      //       console.log(response)
      //     })
      //     .catch(e => console.log(e))
    }
  },
  mounted() {
    this.$axios.post('https://api.sendpulse.com/oauth/access_token', {
      "grant_type": "client_credentials",
      "client_id": process.env.clientId,
      "client_secret": process.env.clientSecret
    })
        .then(response => {
          localStorage.access_token = response.data.access_token

          this.$axios.get('https://api.sendpulse.com/addressbooks?limit=10', {
            headers: {
              'Authorization': 'Bearer ' + response.data.access_token
            }
          })
              .then(response => {
                console.log(response.data)
                localStorage.bookId = response.data[0].id
              })
              .catch(e => console.log(e))
        })
        .catch(e => console.log(e))
  }
}
</script>
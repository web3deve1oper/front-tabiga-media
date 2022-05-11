<template>
  <div class="rubric-page">
    <loader-block v-if="loader"></loader-block>
    <div class="rubric-page__container" v-else>
      <div class="rubric-page__breadcrumb breadcrumb">
        <nuxt-link to="/">Главная</nuxt-link>
        /
        <nuxt-link to="/red-book">Красная книга Казахстана</nuxt-link>
        /
        <span>{{ card.name }}</span>
      </div>

      <div class="rubric-page__main">

        <h4 class="rubric-page__heading">Красная книга Казахстана</h4>

        <p class="rubric-page__phone-name">{{ card.name }}</p>

        <div class="rubric-page__img-box rubric-page__img-box--h600">

          <img :src="card.preview_image_big_url" alt="" class="rubric-page__img">

          <div class="rubric-page__img-info rubric-page__img-info--redbook rubric-page__img-info--tab-none">

            <h4>{{ card.name }}</h4>

            <div v-if="card.kingdom !== null">
              <span>Царство:</span>
              <span>{{ card.kingdom }}</span>
            </div>

            <div v-if="card.type !== null">
              <span>Тип:</span>
              <span>{{ card.type }}</span>
            </div>

            <div v-if="card.class !== null">
              <span>Класс:</span>
              <span>{{ card.class }}</span>
            </div>

            <div v-if="card.squad !== null">
              <span>Отряд:</span>
              <span>{{ card.squad }}</span>
            </div>

            <div v-if="card.family !== null">
              <span>Семейство:</span>
              <span>{{ card.family }}</span>
            </div>

            <div v-if="card.genus !== null">
              <span>Род:</span>
              <span>{{ card.genus }}</span>
            </div>

            <div v-if="card.kind !== null">
              <span>Вид:</span>
              <span>{{ card.kind }}</span>
            </div>

            <div v-if="card.subkind !== null">
              <span>Подвид:</span>
              <span>{{ card.subkind }}</span>
            </div>

          </div>

        </div>

        <div class="rubric-page__img-info rubric-page__img-info--redbook rubric-page__img-info--desktop-none">

          <h4>{{ card.name }}</h4>

          <div v-if="card.kingdom !== null">
            <span>Царство:</span>
            <span>{{ card.kingdom }}</span>
          </div>

          <div v-if="card.type !== null">
            <span>Тип:</span>
            <span>{{ card.type }}</span>
          </div>

          <div v-if="card.class !== null">
            <span>Класс:</span>
            <span>{{ card.class }}</span>
          </div>

          <div v-if="card.squad !== null">
            <span>Отряд:</span>
            <span>{{ card.squad }}</span>
          </div>

          <div v-if="card.family !== null">
            <span>Семейство:</span>
            <span>{{ card.family }}</span>
          </div>

          <div v-if="card.genus !== null">
            <span>Род:</span>
            <span>{{ card.genus }}</span>
          </div>

          <div v-if="card.kind !== null">
            <span>Вид:</span>
            <span>{{ card.kind }}</span>
          </div>

          <div v-if="card.subkind !== null">
            <span>Подвид:</span>
            <span>{{ card.subkind }}</span>
          </div>

        </div>

        <div class="rubric-page__status-box status-box status-box--desktop-none" v-if="card.status !== null">

          <div class="status-box__title">
            Статус
          </div>

          <ul class="status-box__list">
            <li v-for="s in card.status">{{ s }}</li>
          </ul>

        </div>

        <div class="rubric-page__row rubric-page__row--phone-column">

          <div class="rubric-page__column rubric-page__column--mb20 rubric-page__column--w690">

            <div class="rubric-page__text" v-html="card.content"></div>

          </div>

          <div class="rubric-page__column rubric-page__column--w470">

            <div class="rubric-page__status-box status-box status-box--desktop-show" v-if="card.status !== null">

              <div class="status-box__title">
                Статус
              </div>

              <ul class="status-box__list">
                <li v-for="s in card.status">{{ s }}</li>
              </ul>

            </div>

            <div class="rubric-page__facts status-box status-box--green" v-if="card.facts !== null">
              <div class="status-box__title">
                Интересные факты:
              </div>

              <ul class="status-box__list">
                <li v-for="f in card.facts">{{ f }}</li>
              </ul>
            </div>

          </div>

        </div>

      </div>

      <div class="rubric-page__interest">

        <div class="rubric-page__title-row">
          <div class="rubric-page__interest-title rubric-page__interest-title--mb0">
            Другие виды из Красной книги
          </div>

          <nuxt-link tag="div" to="/red-book" class="rubric-page__title-more">
            <a>Смотреть все</a>
            <svg width="24" height="24">
              <use href="../../assets/img/icons.svg#arrow-right"></use>
            </svg>
          </nuxt-link>
        </div>

        <div class="rubric-page__interest-list rubric-page__interest-list--grid4">

          <nuxt-link tag="a"
                     :to="'/red-book/' + card.slug + ':' + card.id"
                     class="rubric-page__card red-card red-card--w170"
                     v-for="card in otherCards"
                     :key="card.id">
            <img :src="card.preview_image_small_url" alt="" class="red-card__img">

            <div class="red-card__info">
              <div class="red-card__heading">
                Красная книга Казахстана
              </div>

              <div class="red-card__title red-card__title--w150">
                -{{ card.name }} <br>
                -{{ card.name_latin }}
              </div>

              <div class="red-card__subtitle">
                {{ card.description }}
              </div>
            </div>
          </nuxt-link>

        </div>

      </div>

      <mail-box class="rubric-page__mail-box"></mail-box>

    </div>
  </div>
</template>

<script>
import Swiper, {Pagination} from 'swiper';
import MailBox from "../../components/MailBox";
import LoaderBlock from "../../components/LoaderBlock"

Swiper.use([Pagination]);

export default {
  components: {
    MailBox,
    LoaderBlock
  },
  data() {
    return {
      rubricSwiper2: null,
      card: {},
      loader: true,
      otherCards: [],
      head_title: '',
      head_discription: '',
      og_images: '',
      og_discription: '',
    }
  },
  computed: {
    curId() {
      return this.$route.params.id.split(':')[1]
    },
    curUrl() {
      return window.location.href
    }
  },
  mounted() {
    this.$axios.get(process.env.API + 'red-book/' + this.curId)
        .then(response => {
          this.card = response.data.data
            this.head_title = this.card.name
            this.head_discription = this.card.content.substring(0, 400)+'...'
            this.og_images = this.card.preview_image_big_url
            this.og_discription = this.card.content.replace(/(<([^>]+)>)/gi, "").substr(0, 400)+'...';
          this.$axios.get(process.env.API + 'red-book')
              .then(response => {
                response.data.data.data.forEach(elem => {
                  if (elem.id !== parseInt(this.curId)) {
                    this.otherCards.push(elem)
                  }
                })
                this.loader = false
              })
              .catch(e => console.log(e))
        })
        .catch(e => console.log(e))
  },
    head() {
        return {
            title: this.head_title,
            description: this.head_discription,
            meta: [
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: "article"
                },
                {
                    hid: 'og:image',
                    name: 'og:image',
                    content: this.og_images
                },
                {
                    property: "og:image:width",
                    content: "1200"
                },

                {
                    property: "og:image:height",
                    content: "630"
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.head_title
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: this.og_discription
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: this.curUrl
                },
                {
                    hid: "twitter:url",
                    name: "twitter:url",
                    content: this.curUrl,
                },
                {
                    hid: "twitter:title",
                    name: "twitter:title",
                    content: this.head_title,
                },
                {
                    hid: "twitter:description",
                    name: "twitter:description",
                    content: this.og_discription,
                },
                {
                    hid: "twitter:image",
                    name: "twitter:image",
                    content: this.og_images,
                }
            ]
        };
    },
}
</script>
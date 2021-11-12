<template>
  <div class="rubric-page">
    <loader-block v-if="loader"></loader-block>

    <div v-else-if="article.length > 0" v-for="(a, k) in article">
      <div class="rubric-page__container" v-if="k === 0">
        <div class="rubric-page__breadcrumb breadcrumb">
          <nuxt-link to="/">Главная</nuxt-link>
          /
          <nuxt-link :to="'/' + a.rubric.slug + ':' + a.rubric.id">Новости</nuxt-link>
          /
          <span>Статья</span>
        </div>

        <div class="rubric-page__main" v-if="!a.is_long_read">

          <div class="rubric-page__phone-top">

            <div class="rubric-page__img-title">
              {{ a.title }}
            </div>

            <div class="rubric-page__img-desc">
              {{ a.description }}
            </div>

            <div class="rubric-page__phone-details">
              <div class="rubric-page__details-w-icon rubric-page__details-w-icon--active">
                <svg width="18" height="18">
                  <use href="../../assets/img/icons.svg#pen"></use>
                </svg>
                {{ a.author.full_name }}
              </div>
              <div class="rubric-page__details-w-icon">
                <svg width="18" height="18">
                  <use href="../../assets/img/icons.svg#clock"></use>
                </svg>
                {{ a.read_time }}
              </div>
            </div>

          </div>

          <div class="rubric-page__img-box">

            <img :src="a.preview_image_big_url" alt="" class="rubric-page__img">


            <div class="rubric-page__views rubric-page__views--phone">
              <svg width="24" height="24">
                <use href="../../assets/img/icons.svg#eye"></use>
              </svg>
              147k
            </div>

            <div class="rubric-page__img-info">

              <div class="rubric-page__views rubric-page__views--mb10">
                <svg width="24" height="24">
                  <use href="../../assets/img/icons.svg#eye"></use>
                </svg>
                147k
              </div>

              <div class="rubric-page__img-title">
                {{ a.title }}
              </div>

              <div class="rubric-page__img-desc">
                {{ a.description }}
              </div>

            </div>

          </div>

          <div class="rubric-page__row">

            <div class="rubric-page__column rubric-page__column--tab-none rubric-page__column--w285">

              <div class="rubric-page__details-box rubric-details">
                <div class="rubric-details__row">
                  <span class="rubric-details__grey">Автор:</span>
                  <span class="rubric-details__green">{{ a.author.full_name }}</span>
                </div>
                <div class="rubric-details__row">
                  <span class="rubric-details__grey">Дата:</span>
                  <span class="rubric-details__green">{{ $dateFns.format(a.posted_at, 'dd MMMM yyyy') }}</span>
                </div>
                <div class="rubric-details__row">
                  <span class="rubric-details__grey">Время прочтения:</span>
                  <span class="rubric-details__green">{{ a.read_time }}</span>
                </div>
                <div class="rubric-details__row rubric-details__row--center">
                  <span class="rubric-details__grey">Поделиться:</span>
                  <span class="rubric-details__socials">
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#twitter-brown"></use>
                  </svg>
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#fb-brown"></use>
                  </svg>
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#vk-brown"></use>
                  </svg>
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#inst-brown"></use>
                  </svg>
                </span>
                </div>
                <div class="rubric-details__row">
                  <span class="rubric-details__grey rubric-details__grey--italic">Фотография: Pexels</span>
                </div>
              </div>

              <div class="rubric-page__collaborators collaborators-box">
                <div class="collaborators-box__title">
                  В создании статьи также участвовали:
                </div>

                <div class="collaborators-box__row" v-for="s in a.staff">
                  <span class="collaborators-box__name">{{ s.title }}:</span>
                  <span class="collaborators-box__value">{{ s.full_name }}</span>
                </div>
              </div>

            </div>

            <div class="rubric-page__column rubric-page__column--w570">

              <div class="ql-snow">
                <div class="rubric-page__text ql-editor" v-html="a.content"></div>
              </div>

              <div class="rubric-page__grey-text rubric-page__grey-text--mb20">
                Автор: {{ a.author.full_name }}
              </div>
              <div class="rubric-page__grey-text rubric-page__grey-text--mb20 rubric-page__grey-text--phone">
                {{ $dateFns.format(a.posted_at, 'dd MMMM yyyy') }}
              </div>

              <div class="rubric-page__tags">
                <div class="rubric-page__tag" v-for="tag in a.tags">
                  #{{ tag.name }}
                </div>
              </div>

              <div class="rubric-page__share">
                <span>Поделиться:</span>

                <div class="rubric-page__socials">
                  <svg width="30" height="30">
                    <use href="../../assets/img/icons.svg#twitter-green"></use>
                  </svg>
                  <svg width="30" height="30">
                    <use href="../../assets/img/icons.svg#fb-green"></use>
                  </svg>
                  <svg width="30" height="30">
                    <use href="../../assets/img/icons.svg#vk-green"></use>
                  </svg>
                  <svg width="30" height="30">
                    <use href="../../assets/img/icons.svg#inst-green"></use>
                  </svg>
                </div>
              </div>
            </div>

            <div class="rubric-page__column rubric-page__column--phone-none rubric-page__column--w285">
              <div class="rubric-page__recommends recommend-box">
                <div class="recommend-box__title">
                  РЕКОМЕНДУЕМОЕ
                </div>

                <div class="recommend-box__list">
                  <div class="recommend-box__item" v-for="rec in recs">
                    <div class="recommend-box__item-heading">
                      {{ rec.rubric.title }}
                    </div>
                    <div class="recommend-box__item-title">
                      {{ rec.title }}
                    </div>
                    <div class="recommend-box__item-date">
                      {{ $dateFns.format(rec.posted_at, 'dd MMMM yyyy') }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="rubric-page__details-box rubric-details rubric-details--tab">
            <div class="rubric-details__row">
              <span class="rubric-details__grey">Автор:</span>
              <span class="rubric-details__green">{{ a.author.full_name }}</span>
            </div>
            <div class="rubric-details__row">
              <span class="rubric-details__grey">Дата:</span>
              <span class="rubric-details__green">{{ $dateFns.format(a.posted_at, 'dd MMMM yyyy') }}</span>
            </div>
            <div class="rubric-details__row">
              <span class="rubric-details__grey">Время прочтения:</span>
              <span class="rubric-details__green">{{ a.read_time }}</span>
            </div>
            <div class="rubric-details__row rubric-details__row--center">
              <span class="rubric-details__grey">Поделиться:</span>
              <span class="rubric-details__socials">
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#twitter-brown"></use>
                  </svg>
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#fb-brown"></use>
                  </svg>
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#vk-brown"></use>
                  </svg>
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#inst-brown"></use>
                  </svg>
                </span>
            </div>
            <div class="rubric-details__row">
              <span class="rubric-details__grey rubric-details__grey--italic">Фотография: Pexels</span>
            </div>
          </div>

          <div class="rubric-page__collaborators collaborators-box collaborators-box--tab">
            <div class="collaborators-box__title">
              В создании статьи также участвовали:
            </div>

            <div class="collaborators-box__row" v-for="s in a.staff">
              <span class="collaborators-box__name">{{ s.title }}:</span>
              <span class="collaborators-box__value">{{ s.full_name }}</span>
            </div>
          </div>

          <div class="rubric-page__recommends recommend-box recommend-box--phone">
            <div class="recommend-box__title">
              РЕКОМЕНДУЕМОЕ
            </div>

            <div class="recommend-box__list">
              <div class="recommend-box__item" v-for="rec in recs">
                <div class="recommend-box__item-heading">
                  {{ rec.rubric.title }}
                </div>
                <div class="recommend-box__item-title">
                  {{ rec.title }}
                </div>
                <div class="recommend-box__item-date">
                  {{ $dateFns.format(rec.posted_at, 'dd MMMM yyyy') }}
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="rubric-page__main" v-else>

          <div class="rubric-page__phone-top">

            <div class="rubric-page__img-title">
              {{ a.title }}
            </div>

            <div class="rubric-page__phone-details">
              <div class="rubric-page__details-w-icon rubric-page__details-w-icon--active">
                <svg width="18" height="18">
                  <use href="../../assets/img/icons.svg#pen"></use>
                </svg>
                {{ a.author.full_name }}
              </div>
              <div class="rubric-page__details-w-icon">
                <svg width="18" height="18">
                  <use href="../../assets/img/icons.svg#clock"></use>
                </svg>
                {{ a.read_time }}
              </div>
            </div>

          </div>

          <div class="rubric-page__row rubric-page__row--phone-column">

            <div class="rubric-page__column rubric-page__column--mb20 rubric-page__column--w793">

              <div class="ql-snow">
                <div class="rubric-page__text ql-editor" v-html="a.content"></div>
              </div>

              <div class="rubric-page__grey-text rubric-page__grey-text--mb20">
                Автор: {{ a.author.full_name }}
              </div>

              <div class="rubric-page__grey-text rubric-page__grey-text--mb20 rubric-page__grey-text--phone">
                {{ $dateFns.format(a.posted_at, 'dd MMMM yyyy') }}
              </div>

              <div class="rubric-page__tags">
                <div class="rubric-page__tag" v-for="tag in a.tags">
                  #{{ tag.name }}
                </div>
              </div>

              <div class="rubric-page__share">
                <span>Поделиться:</span>

                <div class="rubric-page__socials">
                  <svg width="30" height="30">
                    <use href="../../assets/img/icons.svg#twitter-green"></use>
                  </svg>
                  <svg width="30" height="30">
                    <use href="../../assets/img/icons.svg#fb-green"></use>
                  </svg>
                  <svg width="30" height="30">
                    <use href="../../assets/img/icons.svg#vk-green"></use>
                  </svg>
                  <svg width="30" height="30">
                    <use href="../../assets/img/icons.svg#inst-green"></use>
                  </svg>
                </div>
              </div>
            </div>

            <div class="rubric-page__column rubric-page__column--w367">

              <div class="rubric-page__details-box rubric-details rubric-details--only-desktop">
                <div class="rubric-details__row">
                  <span class="rubric-details__grey">Автор:</span>
                  <span class="rubric-details__green">{{ a.author.full_name }}</span>
                </div>
                <div class="rubric-details__row">
                  <span class="rubric-details__grey">Дата:</span>
                  <span class="rubric-details__green">{{ $dateFns.format(a.posted_at, 'dd MMMM yyyy') }}</span>
                </div>
                <div class="rubric-details__row">
                  <span class="rubric-details__grey">Время прочтения:</span>
                  <span class="rubric-details__green">{{ a.read_time }}</span>
                </div>
                <div class="rubric-details__row rubric-details__row--center">
                  <span class="rubric-details__grey">Поделиться:</span>
                  <span class="rubric-details__socials">
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#twitter-brown"></use>
                  </svg>
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#fb-brown"></use>
                  </svg>
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#vk-brown"></use>
                  </svg>
                  <svg width="24" height="24">
                    <use href="../../assets/img/icons.svg#inst-brown"></use>
                  </svg>
                </span>
                </div>
                <div class="rubric-details__row">
                  <span class="rubric-details__grey rubric-details__grey--italic">Фотография: Pexels</span>
                </div>
              </div>

              <div class="rubric-page__collaborators collaborators-box" v-if="a.staff.length > 0">
                <div class="collaborators-box__title">
                  В создании статьи также участвовали:
                </div>

                <div class="collaborators-box__row" v-for="s in a.staff">
                  <span class="collaborators-box__name">{{ s.title }}:</span>
                  <span class="collaborators-box__value">{{ s.full_name }}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        <div class="rubric-page__interest">

          <div class="rubric-page__interest-title">
            Вас также могут заинтересовать
          </div>

          <div class="rubric-page__interest-list">

            <div class="rubric-page__card card card--w327 card--nopadding" v-for="article in interests">

              <div class="card__img-box">
                <img :src="article.preview_image_small_url" alt="" class="card__img card__img--bywidth">

                <div class="card__views">
                  <svg width="20" height="20">
                    <use href="../../assets/img/icons.svg#eye"></use>
                  </svg>
                  147k
                </div>

              </div>

              <div class="card__info">

                <div class="card__author card__author--sm">
                  {{ article.author.full_name }}
                </div>

                <div class="card__title card__title--two-line">
                  {{ article.title }}
                </div>

                <div class="card__desc card__desc--mb12">
                  {{ article.description }}
                </div>

                <div class="card__details card__details--sm card__details--tab">
                  <span>{{ $dateFns.format(a.posted_at, 'dd MMMM yyyy') }}</span>
                  <span>читать {{ article.read_time }}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        <mail-box class="rubric-page__mail-box"></mail-box>


      </div>
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
      article: [],
      loader: true,
      interests: [],
      recs: []
    }
  },
  computed: {
    articleId() {
      return this.$route.params.id.split(':')[1]
    },
    rubricId() {
      return this.$route.params.rubrics.split(':')[1]
    }
  },
  mounted() {
    this.$axios.get(process.env.API + 'articles?filter[id]=' + this.articleId + '&include=rubric,author')
        .then(response => {
          this.article = response.data.data.data

          this.$axios.get(process.env.API + 'articles/' + this.articleId + '/recommended-articles?' +
              'filter[rubric.id]=' + this.rubricId + '&include=rubric,author&itemsPerPage=3')
              .then(response => {
                this.interests = response.data.data

                this.$axios.get(process.env.API + 'articles/' + this.articleId + '/recommended-articles?' +
                    'include=rubric,author&itemsPerPage=10')
                    .then(response => {
                      this.recs = response.data.data

                      this.loader = false
                    })
                    .catch(e => console.log(e))
              })
              .catch(e => console.log(e))
        })
        .catch(e => console.log(e))
  }
}
</script>

<style lang="css">
@import "../../node_modules/vue2-editor/dist/vue2-editor.css";

/* Import the Quill styles you want */
@import '../../node_modules/quill/dist/quill.core.css';
@import '../../node_modules/quill/dist/quill.bubble.css';
@import '../../node_modules/quill/dist/quill.snow.css';
</style>
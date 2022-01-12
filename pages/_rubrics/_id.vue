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
          <span>{{ a.title }}</span>
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
              <nuxt-link tag="div"
                         :to="'/author/' + a.author.slug + ':' + a.author.id"
                         class="rubric-page__details-w-icon rubric-page__details-w-icon--pointer rubric-page__details-w-icon--active">
                <svg width="18" height="18">
                  <use href="../../assets/img/icons.svg#pen"></use>
                </svg>
                {{ a.author.full_name }}
              </nuxt-link>
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
              {{ a.views }}
            </div>

            <div class="rubric-page__img-info rubric-page__img-info--phone-none">

              <div class="rubric-page__views rubric-page__views--mb10">
                <svg width="24" height="24">
                  <use href="../../assets/img/icons.svg#eye"></use>
                </svg>
                {{ a.views }}
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
                  <nuxt-link tag="span"
                             :to="'/author/' + a.author.slug + ':' + a.author.id"
                             class="rubric-details__green rubric-details__green--pointer">
                    {{ a.author.full_name }}
                  </nuxt-link>
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
                  <share-social class="rubric-details__socials" :title="a.title"></share-social>
                </div>
                <div class="rubric-details__row" v-if="a.photography !== null">
                  <span class="rubric-details__grey rubric-details__grey--italic">Фотография: {{ a.photography }}</span>
                </div>
              </div>

              <div class="rubric-page__collaborators collaborators-box" v-if="a.staff !== null">
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

              <div class="rubric-page__text" v-html="a.content"></div>

              <nuxt-link tag="div"
                         :to="'/author/' + a.author.slug + ':' + a.author.id"
                         class="rubric-page__grey-text rubric-page__grey-text--mb20 rubric-page__grey-text--pointer">
                {{ a.author.full_name }}
              </nuxt-link>
              <div class="rubric-page__grey-text rubric-page__grey-text--mb20 rubric-page__grey-text--phone">
                {{ $dateFns.format(a.posted_at, 'dd MMMM yyyy') }}
              </div>

              <div class="rubric-page__tags">
                <div class="rubric-page__tag" v-for="tag in a.tags" @click="search(tag.name)">
                  #{{ tag.name }}
                </div>
              </div>

              <div class="rubric-page__share">
                <span>Поделиться:</span>

                <share-social class="rubric-page__socials" :title="a.title"></share-social>
              </div>
            </div>

            <div class="rubric-page__column rubric-page__column--phone-none rubric-page__column--w285">
              <div class="rubric-page__recommends recommend-box">
                <div class="recommend-box__title">
                  РЕКОМЕНДУЕМОЕ
                </div>

                <div class="recommend-box__list">
                  <nuxt-link tag="div"
                             :to="'/' + rec.rubric.slag + ':' + rec.rubric.id + '/' + rec.slag + ':' + rec.id"
                             class="recommend-box__item"
                             v-for="rec in recs"
                             :key="rec.id">
                    <div class="recommend-box__item-heading">
                      {{ rec.rubric.title }}
                    </div>
                    <div class="recommend-box__item-title">
                      {{ rec.title }}
                    </div>
                    <div class="recommend-box__item-date">
                      {{ $dateFns.format(rec.posted_at, 'dd MMMM yyyy') }}
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>

          </div>

          <div class="rubric-page__details-box rubric-details rubric-details--tab">
            <div class="rubric-details__row">
              <span class="rubric-details__grey">Автор:</span>
              <nuxt-link tag="span"
                         :to="'/author/' + a.author.slug + ':' + a.author.id"
                         class="rubric-details__green rubric-details__green--pointer">
                {{ a.author.full_name }}
              </nuxt-link>
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
              <share-social class="rubric-details__socials" :title="a.title"></share-social>
            </div>
            <div class="rubric-details__row" v-if="a.photography !== null">
              <span class="rubric-details__grey rubric-details__grey--italic">Фотография: {{ a.photography }}</span>
            </div>
          </div>

          <div class="rubric-page__collaborators collaborators-box collaborators-box--tab" v-if="a.staff !== null">
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
              <nuxt-link tag="div"
                         :to="'/' + rec.rubric.slag + ':' + rec.rubric.id + '/' + rec.slag + ':' + rec.id"
                         class="recommend-box__item"
                         v-for="rec in recs" :key="rec.id">
                <div class="recommend-box__item-heading">
                  {{ rec.rubric.title }}
                </div>
                <div class="recommend-box__item-title">
                  {{ rec.title }}
                </div>
                <div class="recommend-box__item-date">
                  {{ $dateFns.format(rec.posted_at, 'dd MMMM yyyy') }}
                </div>
              </nuxt-link>
            </div>
          </div>

        </div>

        <div class="rubric-page__main" v-else>

          <div class="rubric-page__phone-top">

            <div class="rubric-page__img-title">
              {{ a.title }}
            </div>

            <div class="rubric-page__phone-details">
              <nuxt-link tag="div"
                         :to="'/author/' + a.author.slug + ':' + a.author.id"
                         class="rubric-page__details-w-icon rubric-page__details-w-icon--pointer rubric-page__details-w-icon--active">
                <svg width="18" height="18">
                  <use href="../../assets/img/icons.svg#pen"></use>
                </svg>
                {{ a.author.full_name }}
              </nuxt-link>
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

              <div class="rubric-page__longread-title">
                {{ a.title }}
              </div>

              <div class="rubric-page__text" v-html="a.content"></div>

              <nuxt-link tag="div"
                         :to="'/author/' + a.author.slug + ':' + a.author.id"
                         class="rubric-page__grey-text rubric-page__grey-text--mb20 rubric-page__grey-text--pointer">
                Автор: {{ a.author.full_name }}
              </nuxt-link>

              <div class="rubric-page__grey-text rubric-page__grey-text--mb20 rubric-page__grey-text--phone">
                {{ $dateFns.format(a.posted_at, 'dd MMMM yyyy') }}
              </div>

              <div class="rubric-page__tags">
                <div class="rubric-page__tag" v-for="tag in a.tags" @click="search(tag.name)">
                  #{{ tag.name }}
                </div>
              </div>

              <div class="rubric-page__collaborators collaborators-box collaborators-box--phone-only"
                   v-if="a.staff !== null">
                <div class="collaborators-box__title">
                  В создании статьи также участвовали:
                </div>

                <div class="collaborators-box__row" v-for="s in a.staff">
                  <span class="collaborators-box__name">{{ s.title }}:</span>
                  <span class="collaborators-box__value">{{ s.full_name }}</span>
                </div>
              </div>

              <div class="rubric-page__share">
                <span>Поделиться:</span>

                <share-social class="rubric-page__socials" :title="a.title"></share-social>
              </div>
            </div>

            <div class="rubric-page__column rubric-page__column--w367">

              <div class="rubric-page__details-box rubric-details rubric-details--only-desktop">
                <div class="rubric-details__row">
                  <span class="rubric-details__grey">Автор:</span>
                  <nuxt-link tag="span"
                             :to="'/author/' + a.author.slug + ':' + a.author.id"
                             class="rubric-details__green rubric-details__green--pointer">
                    {{ a.author.full_name }}
                  </nuxt-link>
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
                  <share-social class="rubric-details__socials" :title="a.title"></share-social>
                </div>
                <div class="rubric-details__row" v-if="a.photography !== null">
                  <span class="rubric-details__grey rubric-details__grey--italic">Фотография: {{ a.photography }}</span>
                </div>
              </div>

              <div class="rubric-page__collaborators collaborators-box collaborators-box--phone-hidden"
                   v-if="a.staff !== null">
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

            <nuxt-link tag="div"
                       class="rubric-page__card card card--w327 card--nopadding"
                       :to="'/' + article.rubric.slag + ':' + article.rubric.id + '/' + article.slag + ':' + article.id"
                       v-for="article in interests"
                       :key="article.id">

              <div class="card__img-box">
                <img :src="article.preview_image_small_url" alt="" class="card__img card__img--bywidth">

                <div class="card__views">
                  <svg width="20" height="20">
                    <use href="../../assets/img/icons.svg#eye"></use>
                  </svg>
                  {{ article.views }}
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

            </nuxt-link>

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
import ShareSocial from "../../components/ShareSocial"

Swiper.use([Pagination]);

export default {
  components: {
    MailBox,
    LoaderBlock,
    ShareSocial
  },
  data() {
    return {
      article: [],
      loader: true,
      interests: [],
      recs: [],
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
  methods: {
    search(tag) {
      this.$router.push('/search/' + tag)
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    this.$axios.get(process.env.API + 'articles?filter[id]=' + this.articleId + '&include=rubric,author')
        .then(response => {
          this.article = response.data.data.data
          this.$axios.get(process.env.API + 'articles/' + this.articleId + '/recommended-articles?' +
              'filter[rubric.id]=' + this.rubricId + 'filter[posted]=1&&include=rubric,author&itemsPerPage=3')
              .then(response => {
                this.interests = response.data.data
                this.$axios.get(process.env.API + 'articles/' + this.articleId + '/recommended-articles?' +
                    'filter[posted]=1&include=rubric,author&itemsPerPage=10')
                    .then(response => {
                      this.recs = response.data.data
                      this.loader = false
                    })
                    .catch(e => console.log(e))
              })
              .catch(e => console.log(e))
        })
        .catch(e => console.log(e))

    this.$axios.post(process.env.API + 'articles/' + this.articleId + '/visited')
        .catch(e => console.log(e))
  },
}
</script>
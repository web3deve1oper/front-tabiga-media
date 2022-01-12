<template>
  <div class="author-page">
    <loader-block v-if="loader"></loader-block>

    <div class="author-page__container" v-else-if="Object.keys(author).length > 0">

      <div class="author-page__breadcrumb breadcrumb">
        <nuxt-link to="/">Главная</nuxt-link>
        / <span>{{ author.full_name }}</span>
      </div>

      <div class="author-page__row">
        <div class="author-page__img-box">
          <img :src="author.preview_image_url" alt="" class="author-page__img">
        </div>

        <div class="author-page__info">
          <div class="author-page__name">
            {{ author.full_name }}
          </div>

          <div class="ql-snow">
            <div class="author-page__desc ql-editor" v-html="author.biography"></div>
          </div>
        </div>

      </div>

      <div class="author-page__heading heading-medium">
        Статьи автора
      </div>

      <div class="author-page__rubrics">
        <div class="author-page__rubric"
             @click="rubricFilter = ''"
             :class="{'author-page__rubric--active' : rubricFilter === ''}">Все</div>
        <div class="author-page__rubric"
             :class="{'author-page__rubric--active' : rubricFilter === a}"
             v-for="a in rubrics"
             @click="sortByRubric(a)">{{ a }}</div>
      </div>

      <div class="author-page__list">

        <nuxt-link tag="div"
                   :to="'/' + article.rubric.slug + ':' + article.rubric.id + '/' + article.slug + ':' + article.id"
                   class="author-page__card card card--w100 card--w-desc"
                   v-for="article in articles"
                   v-if="article.rubric.title === rubricFilter || rubricFilter === ''"
                   :key="article.id">

          <div class="card__img-box card__img-box--h217">
            <img :src="article.preview_image_small_url" alt="" class="card__img">

            <div class="card__views">
              <svg width="20" height="20">
                <use href="../../assets/img/icons.svg#eye"></use>
              </svg>
              {{ article.views }}
            </div>

          </div>

          <div class="card__info">

            <div class="card__row">
              <div class="card__heading">{{ article.rubric.title }}</div>

              <div class="card__date">{{ $dateFns.format(article.posted_at, 'dd MMMM yyyy') }}</div>
            </div>

            <div class="card__title">
              {{ article.title }}
            </div>

            <div class="card__desc">
              {{ article.description }}
            </div>
          </div>

        </nuxt-link>

      </div>

      <mail-box class="author-page__mail-box"></mail-box>

    </div>
  </div>
</template>

<script>
import MailBox from "../../components/MailBox";
import LoaderBLock from "../../components/LoaderBlock";

export default {
  components: {
    MailBox,
    LoaderBLock
  },
  scrollToTop: true,
  data() {
    return {
      loader: true,
      author: {},
      articles: [],
      rubrics: [],
      rubricFilter: ''
    }
  },
  computed: {
    curId() {
      return this.$route.params.id.split(':')[1]
    }
  },
  methods: {
    sortByRubric(r) {
      this.rubricFilter = r
    }
  },
  mounted() {
    this.$axios.get(process.env.API + 'authors/' + this.curId)
        .then(response => {
          this.author = response.data.data

          this.$axios.get(process.env.API + 'articles?filter[author.id]=' + this.curId + '&filter[posted]=1&sort=-posted_at&include=rubric')
              .then(response => {
                this.articles = response.data.data.data
                let tmp = []
                response.data.data.data.forEach(elem => {
                  tmp.push(elem.rubric.title)
                })
                this.rubrics = [...new Set(tmp)]
                this.loader = false
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
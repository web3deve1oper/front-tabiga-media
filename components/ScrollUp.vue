<template>
  <svg width="48"
       height="48"
       v-scroll-to="{el:'#top-dot', duration: 700, offset: 0,}">
    <use href="../assets/img/icons.svg#arrow-up"></use>
  </svg>
</template>

<script>
export default {
  data() {
    return {
      // scrollPosition: null
    };
  },
  methods: {
    // updateScroll() {
    //   this.scrollPosition = window.scrollY
    // }
  },
  computed: {
    // endPoint() {
      // return document.getElementsByClassName('rubric-page__scroll-container').offsetTop - window.innerHeight + 110
    // }
  },
  watch: {
    // scrollPosition() {
    //   console.log(this.scrollPosition)
    // }
  },
  created() {
    // if(!this.$isServer) {
    //   window.addEventListener('scroll', this.updateScroll);
    // }
  },
}
</script>

<style scoped lang="scss">
@import "assets/scss/abstracts/mixins";
svg {
  position: absolute;
  cursor: pointer;
  bottom: 0;
  right: -100px;

  @include respond(phone) {
    display: none;
  }
}
</style>
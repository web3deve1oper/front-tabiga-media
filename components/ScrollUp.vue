<template>
  <svg width="48"
       height="48"
       v-scroll-to="{el:'#top-dot', duration: 700, offset: 0,}" v-if="scrollPosition > 250">
    <use href="../assets/img/icons.svg#arrow-up"></use>
  </svg>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  computed: {
  },
  // watch: {
  //   scrollPosition() {
  //     console.log(this.scrollPosition)
  //   }
  // },
  created() {
    if (!this.$isServer) {
      window.addEventListener('scroll', this.updateScroll);
    }
  },
}
</script>

<style scoped lang="scss">
@import "assets/scss/abstracts/mixins";
svg {
  position: fixed;
  cursor: pointer;
  bottom: 40px;
  right: 20px;

  @include respond(phone) {
    display: none;
  }
}
</style>
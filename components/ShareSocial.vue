<template>
  <div>
    <svg width="24" height="24" @click="shareTwitter">
      <use href="../assets/img/icons.svg#twitter-brown"></use>
    </svg>
    <svg width="24" height="24" @click="shareFacebook">
      <use href="../assets/img/icons.svg#fb-brown"></use>
    </svg>
    <svg width="24" height="24" @click="shareVk">
      <use href="../assets/img/icons.svg#vk-brown"></use>
    </svg>
    <svg width="24" height="24" @click="shareTg">
      <use href="../assets/img/icons.svg#tg-brown"></use>
    </svg>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      curUrl: window.location.href,
    };
  },
  computed: {

  },
  methods: {
    shareTwitter() {
      window.open('https://twitter.com/share?url=' + this.curUrl + '&text=' + this.title, '_blank');
    },
    shareFacebook() {
      window.open('https://www.facebook.com/sharer.php?u=' + this.curUrl, '_blank');
    },
    shareVk() {
      window.open('https://vk.com/share.php?url=' + this.curUrl, '_blank');
    },
    shareTg() {
      window.open('https://t.me/share/url?url=' + this.curUrl + '&text=' + this.title, '_blank');
    }
  }
}
</script>
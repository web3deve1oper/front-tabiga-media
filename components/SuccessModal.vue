<template>
  <div class="modal">
    <div class="modal__wrapper">

      <svg class="modal__close"
           width="20"
           height="20"
           @click="$emit('close')">
        <use href="../assets/img/icons.svg#cross"></use>
      </svg>

      <svg class="modal__icon" width="120" height="120" v-if="type">
        <use href="../assets/img/icons.svg#approve"></use>
      </svg>

      <div class="modal__icon modal__icon--cross" v-else>
        <svg width="60" height="60">
          <use href="../assets/img/icons.svg#cross"></use>
        </svg>
      </div>

      <div class="modal__title">
        {{ title }}
      </div>

      <div class="modal__subtitle">
        {{ subtitle }}
      </div>

      <button class="modal__btn" @click="$emit('close')">
        Понятно!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'type']
}
</script>
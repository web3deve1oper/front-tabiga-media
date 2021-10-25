<template>
  <section class="mailing-section">
    <div class="mailing-section__container">
      <div class="mailing-section__info">
        <div class="mailing-section__title">
          Подписаться на рассылку
        </div>

        <div class="mailing-section__subtitle">
          Подпишись на рассылку от Tabigat media, чтобы читать самые свежие и интересные статьи первым
        </div>
      </div>

      <form class="mailing-section__active-box">
        <div class="mailing-section__input-box">
          <svg width="24" height="24">
            <use href="../assets/img/icons.svg#mail"></use>
          </svg>

          <input type="email" class="mailing-section__input"
                 name="email"
                 required
                 placeholder="Введите ваш email ( example@gmail.com )">
        </div>

        <button class="mailing-section__btn">
          Подписаться
        </button>
      </form>

    </div>
  </section>
</template>

<script>
export default {}
</script>
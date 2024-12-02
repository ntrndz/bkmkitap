<template>
  <div id="app">
    <Swiper
      ref="swiperRef"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      pagination
      navigation
      effect="fade"
      class="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/YIL-SONU-INDIRIMLERI-KAMPANYASI-BANNER.webp"
          alt="Banner 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/YIL-SONU-INDIRIMLERI-KAMPANYASI-HAYYKITAP-BANNER.webp"
          alt="Banner 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/YIL-SONU-INDIRIMLERI-KAMPANYASI-PEGASUS-YAYINLARI-BANNER.webp"
          alt="Banner 3"
        />
      </SwiperSlide>
    </Swiper>

   
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade, Swiper as SwiperInstance } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Swiper modüllerini kaydedin
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

export default defineComponent({
  name: 'App',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // swiperRef'e tip ataması yapıyoruz
    const swiperRef = ref<SwiperInstance | null>(null);

    // Önceki slide'a git
    const goToPrevSlide = () => {
      if (swiperRef.value) {
        swiperRef.value.slidePrev();
      }
    };

    // Sonraki slide'a git
    const goToNextSlide = () => {
      if (swiperRef.value) {
        swiperRef.value.slideNext();
      }
    };

    return {
      swiperRef,
      goToPrevSlide,
      goToNextSlide,
    };
  },
});
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 500px; /* Slider yüksekliği */
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Resmin tam ekranı doldurmasını sağlar */
}

/* Navigasyon butonları stilleri */
.swiper-button-next, .swiper-button-prev {
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 50%;
  z-index: 10; /* Üst katmana taşı */
}

/* Pagination stilleri */
.swiper-pagination-bullet {
  background-color: rgba(0, 0, 0, 0.5);
}

/* Butonlar üzerine hover efekt */
.swiper-button-next:hover, .swiper-button-prev:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
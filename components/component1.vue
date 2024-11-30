<template>
    <div id="app">
      <Swiper
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        pagination
        effect="fade"
        class="mySwiper"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }"
      >
        <!-- SwiperSlide'lar Swiper içinde kullanılıyor -->
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
  
        <!-- Butonlar Burada Ekleniyor -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </Swiper>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import "swiper/css"; 
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/effect-fade";
  
  export default defineComponent({
    name: 'App',
    components: {
      Swiper,
      SwiperSlide,
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
  
  /* Swiper button stilleri */
  .swiper-button-next, .swiper-button-prev {
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 50%;
  }
  </style>
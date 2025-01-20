<template>
  <div class="button-container">
    <div class="button-item">
      <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon1.svg" alt="Top 100" />
      <div class="text-h6">Top 100</div>
    </div>
    <div class="button-item">
      <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon2.svg" alt="Manga" />
      <div class="text-h6">Manga</div>
    </div>
    <div class="button-item">
      <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon3.svg" alt="Bilim Kurgu" />
      <div class="text-h6">Bilim Kurgu</div>
    </div>
    <div class="button-item">
      <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon4.svg" alt="Harry Potter" />
      <div class="text-h6">Harry Potter</div>
    </div>
    <div class="button-item">
      <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon5.svg" alt="Suç ve Gizem" />
      <div class="text-h6">Suç ve Gizem</div>
    </div>
    <div class="button-item" @click="goToBookDetail">
      <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon6.svg" alt="Fantastik" />
      <div class="text-h6">Fantastik</div>
    </div>
    <div class="button-item">
      <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon7.svg" alt="Defter" />
      <div class="text-h6">Defter</div>
    </div>
    <div class="button-item">
      <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon8.svg" alt="Aksesuar" />
      <div class="text-h6">Aksesuar</div>
    </div>
  </div>
</template>

<script lang="ts">
import { navigateTo } from "nuxt/app"; // Nuxt yönlendirme fonksiyonu

export default {
  name: "Component3",
  setup() {
 

 const goToBookDetail = () => {
      navigateTo("/page6"); // Page 6'ye yönlendir
    };

return {
      
      goToBookDetail,
      
    };
  },
};
</script>

<style scoped>
.button-container {
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap; /* Butonları sarmak için wrap kullanıyoruz */
  gap: 20px; /* Butonlar arasında boşluk artırıldı */
  justify-content: center; /* Ortaladı */
}

.button-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #e5e5e5;
  padding: 20px; /* Kutunun iç boşluğu büyütüldü */
  border-radius: 40px; /* Oval kenarlar için */
  transition: border-color 0.3s ease; /* Hover sırasında kenar renginin geçişi */
  width: 150px; /* Kutunun genişliği artırıldı */
  height: 150px; /* Kutunun yüksekliği artırıldı */
}

.button-item img {
  margin-bottom: 8px;
  max-width: 60px; /* Görsel boyutları kontrol edildi */
  max-height: 60px;
}

.button-item:hover {
  border-color: red; /* Hover durumunda kırmızı renkte kenar */
}

.text-h6 {
  font-size: 15px; /* Yazı boyutu büyütüldü */
  font-family: "hinted-subset-AvenirNextLTPro-Demi";
  padding: 10px 0 0 0;
  color: #4d4d4d;
}

</style>
<template>
  <div class="footer-section">
    

    <div class="footer-right">
      <div class="footer-column">
        <h4 class="footer-title">Kategoriler</h4>
        <ul class="footer-list">
          <li v-for="(item, index) in categories" :key="index">
            <a href="#" class="footer-link">{{ item }}</a>
          </li>
        </ul>
      </div>

      <div class="footer-column">
        <h4 class="footer-title">Önemli Bilgiler</h4>
        <ul class="footer-list">
          <li v-for="(item, index) in importantInfo" :key="index">
            <a href="#" class="footer-link">{{ item }}</a>
          </li>
        </ul>
      </div>

      <div class="footer-column">
        <h4 class="footer-title">Hızlı Erişim</h4>
        <ul class="footer-list">
          <li v-for="(item, index) in quickAccess" :key="index">
            <a href="#" class="footer-link">{{ item }}</a>
          </li>
        </ul>
      </div>

      <div class="footer-column">
        <h4 class="footer-title">Üye</h4>
        <ul class="footer-list">
          <li v-for="(item, index) in memberSection" :key="index">
            <a href="#" class="footer-link">{{ item }}</a>
          </li>
        </ul>
      </div>

      <div class="footer-socials">
        <q-btn round color="primary" class="social-icon" icon="logo-instagram" />
        <q-btn round color="primary" class="social-icon" icon="logo-twitter" />
        <q-btn round color="primary" class="social-icon" icon="logo-facebook" />
      </div>
    </div>

    <div class="footer-left">
      <div class="w-100 menu-item">
        <div class="menu-item-wrapper">
         <div class="d-none d-md-flex justify-content-end social-title mb-1">
            Sosyal medyada bizi takip edin, <strong>ayrıcalıklardan haberdar olun!</strong>
         </div>
          <div id="footer-social-list" class="row list-style-none d-flex align-items-center flex-wrap justify-content-end">
            <div class="col-12 col-md-12">
              <div class="col-12 d-flex d-md-none social-title">
               Sosyal medyada bizi takip edin, <strong>ayrıcalıklardan haberdar olun!</strong>
             </div>
            </div>
            <div class="col-12 col-md-12 d-flex align-items-center justify-content-end gap-2">
              <div v-for="socialMedia in socialMediaList" :key="socialMedia.id">
                <a :href="socialMedia.url" target="_blank" class="overflow-hidden ease position-relative" :title="socialMedia.title">
                 <img :src="socialMedia.imageSrc" width="40" height="40" :alt="socialMedia.title">
                </a>
              </div>
            </div>
         </div>
        </div>
        <div class="w-100">
         <div class="w-100 py-2">
            <div class="row justify-content-end">
              <div class="col-6 col-lg-auto footer-mail border-right border-gray d-flex align-items-center gap-5px">
               <svg width="37" height="26" viewBox="0 0 37 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- SVG path code here -->
                </svg>
                <a href="mailto:info@bkmkitap.com" class="menu-link">info@bkmkitap.com</a>
              </div>
             <div class="col-6 col-lg-auto footer-phone d-flex align-items-center gap-5px">
                <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- SVG path code here -->
                  </svg>
                  <div class="col d-flex flex-direction-column">
                  <span class="d-block text-black">Müşteri Hizmetleri</span>
                  <a href="tel:08502550256" class="text-black">0850 255 0 256</a>
                  </div>
                </div>
            </div>
          </div>
          </div>
        </div>
        <div class="col-12 px-0 align-items-center py-1 d-none d-md-flex justify-content-flex-end flex-wrap gap-1">
        <div class="d-flex align-items-center gap-10px">
        <div v-for="logo in paymentLogos" :key="logo.id" class="d-flex align-items-center">
          <img :src="logo.imageSrc" width="84" height="41" loading="lazy" :alt="logo.alt">
        </div>
      </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const categories = ref(["Edebiyat Kitaplari", "Tarih Kitaplari", "Hazırlık Kitaplari", "Çocuk Kitaplari", "Kırtasiye","Oyuncak"]);
const importantInfo = ref(["Hakkımızda", "Kişisel Verilerin Korunması", "Teslimat KOşulları", "Satış Sözleşmesi", "Garanti ve İade Koşulları"]);
const quickAccess = ref(["İletişim", "Mağazalarımız", "Yeni Çıkan Kitaplar", "Çok Satan Kitaplar", "İşlem Rehberi"]);
const memberSection = ref(["Sık Sorulan Sorular", "Yeni Üyelik", "Üye Girişi"]);




const socialMediaList = ref([
  { id: 1, url: "https://www.instagram.com/bkmkitapcom", imageSrc: "//cdn.bkmkitap.com/Data/img/menu_item/0/tr_img_1_30.svg", title: "Instagram" },
  { id: 2, url: "https://x.com/bkmkitap", imageSrc: "//cdn.bkmkitap.com/Data/img/menu_item/1/tr_img_1_31.svg", title: "X" },
  { id: 3, url: "https://www.youtube.com/c/bkmkitap", imageSrc: "//cdn.bkmkitap.com/Data/img/menu_item/2/tr_img_1_32.svg", title: "Youtube" },
  { id: 4, url: "https://www.facebook.com/bkmkitapcom", imageSrc: "//cdn.bkmkitap.com/Data/img/menu_item/3/tr_img_1_33.svg", title: "Facebook" },
  { id: 5, url: "https://www.linkedin.com/company/14818000", imageSrc: "//cdn.bkmkitap.com/Data/img/menu_item/4/tr_img_1_34.svg", title: "Linkedin" },
  { id: 6, url: "https://www.tiktok.com/@bkmkitap", imageSrc: "//cdn.bkmkitap.com/Data/img/menu_item/5/tr_img_1_35.svg", title: "Tiktok" }
]);

const paymentLogos = ref([
  { id: 1, imageSrc: "//cdn.bkmkitap.com/theme/v5-bkm/assets/footer/iyzico.svg", alt: "iyzico" },
  { id: 2, imageSrc: "//cdn.bkmkitap.com/theme/v5-bkm/assets/footer/mastercard.svg", alt: "mastercard" },
  { id: 3, imageSrc: "//cdn.bkmkitap.com/theme/v5-bkm/assets/footer/maestro.svg", alt: "maestro" },
  { id: 4, imageSrc: "//cdn.bkmkitap.com/theme/v5-bkm/assets/footer/visa.svg", alt: "Visa" },
  { id: 5, imageSrc: "//cdn.bkmkitap.com/theme/v5-bkm/assets/footer/visa-electron.svg", alt: "visa-electron" },
  { id: 6, imageSrc: "//cdn.bkmkitap.com/theme/v5-bkm/assets/footer/american.svg", alt: "american" },
  { id: 7, imageSrc: "//cdn.bkmkitap.com/theme/v5-bkm/assets/footer/troy.svg", alt: "Troy" },
  { id: 8, imageSrc: "//cdn.bkmkitap.com/theme/v5-bkm/assets/footer/security.svg", alt: "security" }
]);
</script>

<style scoped>
.footer-section {
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 20px;
  border-top: 2px solid #ddd;
  flex-wrap: wrap;
}

.footer-left {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center; 
  width: 60%;
}

.footer-right {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60%;
}

.footer-column {
  width: 22%;
  margin: 10px 0;
}

.footer-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-list {
  list-style-type: none;
  padding-left: 0;
}

.footer-link {
  text-decoration: none;
  color: #333;
}

.footer-link:hover {
  color: #ff0000;
}

.footer-socials {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.social-title {
  font-size: 14px;
  margin-bottom: 5px;
}

.social-icon {
  position: relative;  /* Konumlandırma için ekledim */
  transition: transform 0.5s ease;
  z-index: 1;  /* Kaymanın ön planda olması için */
}

.social-icon:hover {
  transform: translateY(30px); /* 10px aşağı kaydırma */
}
</style>
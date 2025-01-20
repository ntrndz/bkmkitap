<template>
  <div class="footer-section">
    <div class="container">
      <div class="row py-2">
        <!-- Menü Başlıkları -->
        <nav id="footer-menu" class="col-12 col-md-7 pb-3 pb-md-0">
          <ul class="row">
            <!-- Kategoriler -->
            <li class="col-12 col-md-3 menu-item">
              <div class="menu-item-wrapper">
                <h4 class="footer-title">Kategoriler</h4>
                <ul class="footer-list">
                  <li v-for="(item, index) in categories" :key="index">
                    <a href="#" class="footer-link">{{ item }}</a>
                  </li>
                  <li>
                    <a
                      id="menu-footer-59"
                      href="https://www.bkmkitap.com/blog"
                      target=""
                      class="menu-link d-flex align-items-center gap-10px"
                    >
                      <img
                        src="//cdn.bkmkitap.com/Data/img/menu_item/9/tr_img_1_59.png"
                        width="84"
                        height="55"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <!-- Önemli Bilgiler -->
            <li class="col-12 col-md-3 menu-item">
              <div class="menu-item-wrapper">
                <h4 class="footer-title">Önemli Bilgiler</h4>
                <ul class="footer-list">
                  <li v-for="(item, index) in importantInfo" :key="index">
                    <a href="#" class="footer-link">{{ item }}</a>
                  </li>
                </ul>
              </div>
            </li>

            <!-- Hızlı Erişim -->
            <li class="col-12 col-md-3 menu-item">
              <div class="menu-item-wrapper">
                <h4 class="footer-title">Hızlı Erişim</h4>
                <ul class="footer-list">
                  <li v-for="(item, index) in quickAccess" :key="index">
                    <a href="#" class="footer-link">{{ item }}</a>
                  </li>
                </ul>
              </div>
            </li>

            <!-- Üye -->
            <li class="col-12 col-md-3 menu-item">
              <div class="menu-item-wrapper">
                <h4 class="footer-title">Üye</h4>
                <ul class="footer-list">
                  <li v-for="(item, index) in memberSection" :key="index">
                    <a href="#" class="footer-link">{{ item }}</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <!-- Sosyal Medya ve İletişim -->
        <div class="col-12 col-md-5 pt-3 pt-md-0 social-info">
          <div class="menu-item-wrapper">
            <div class="d-none d-md-flex justify-content-end social-title mb-1">
              Sosyal medyada bizi takip edin,
              <strong>ayrıcalıklardan haberdar olun!</strong>
            </div>
            <div
              id="footer-social-list"
              class="d-flex align-items-center justify-content-end gap-2"
            >
              <div v-for="socialMedia in socialMediaList" :key="socialMedia.id">
                <a
                  :href="socialMedia.url"
                  target="_blank"
                  :title="socialMedia.title"
                >
                  <img
                    :src="socialMedia.imageSrc"
                    width="40"
                    height="40"
                    :alt="socialMedia.title"
                  />
                </a>
              </div>
            </div>
          </div>

          <div class="row justify-content-end pt-3">
            <div class="col-auto footer-mail d-flex align-items-center gap-5px">
              <svg width="37" height="26" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2.82874C0.163927 2.30587 0.378282 1.80039 0.640015 1.31897C0.925635 0.899327 1.31314 0.558828 1.76611 0.329715C2.21909 0.100603 2.7227 -0.00968801 3.22998 0.00891438H32.6901C33.3228 -0.0390865 33.9551 0.107572 34.5021 0.429325C35.0491 0.751077 35.4845 1.23233 35.75 1.80872C35.9547 2.26903 36.0669 2.76508 36.0801 3.26868C36.0801 9.54868 36.0801 15.8352 36.0801 22.1285C36.0905 22.5676 36.0098 23.0044 35.8431 23.4108C35.6765 23.8171 35.4275 24.1841 35.1118 24.4894C34.7962 24.7947 34.4207 25.0317 34.009 25.1847C33.5974 25.3377 33.1584 25.4035 32.72 25.3785H8.44006C6.79006 25.3785 5.15 25.3785 3.5 25.3785C2.67802 25.4385 1.86358 25.1872 1.21875 24.674C0.573921 24.1607 0.145985 23.423 0.0200195 22.6085C0.0200195 22.6085 0.0200195 22.609 0.0200195 22.549L0 2.82874ZM3.65002 2.1388L3.82007 2.31897C7.78007 6.25897 11.7434 10.1988 15.7101 14.1388C15.9223 14.3615 16.1646 14.5532 16.4301 14.7086C17.0601 15.0952 17.806 15.2481 18.5372 15.1403C19.2685 15.0324 19.9385 14.6708 20.4301 14.1188L32.23 2.34876L32.4301 2.12854L3.65002 2.1388ZM3.85999 23.2389H32.24L23.3401 14.1588L21.87 15.6486C21.3746 16.163 20.7805 16.5726 20.1233 16.8522C19.4661 17.1317 18.7592 17.2755 18.045 17.2755C17.3308 17.2755 16.6239 17.1317 15.9667 16.8522C15.3094 16.5726 14.7154 16.163 14.22 15.6486L12.76 14.1588L3.85999 23.2389ZM2.14001 3.60852V21.7789L11.0701 12.6788L2.14001 3.60852ZM25.0701 12.6686L33.9601 21.7286V3.6388L25.0701 12.6686Z" fill="#E30613"></path>
              </svg>
              <a href="mailto:info@bkmkitap.com" class="menu-link"
                >info@bkmkitap.com</a
              >
            </div>
            <div
              class="col-auto footer-phone d-flex align-items-center gap-5px"
            >
              <svg width="37" height="35" xmlns="http://www.w3.org/2000/svg">
                <!-- SVG Path -->
              </svg>
              <div class="d-flex flex-column">
                <span>Müşteri Hizmetleri</span>
                <a href="tel:08502550256" class="menu-link">0850 255 0 256</a>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-end gap-2 flex-wrap pt-3">
            <div
              v-for="logo in paymentLogos"
              :key="logo.id"
              class="payment-logo"
            >
              <img
                :src="logo.imageSrc"
                width="84"
                height="41"
                :alt="logo.alt"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const title = "Component9";

const categories = ref([
  "Edebiyat Kitaplari",
  "Tarih Kitaplari",
  "Hazırlık Kitaplari",
  "Çocuk Kitaplari",
  "Kırtasiye",
  "Oyuncak",
]);

const importantInfo = ref([
  "Hakkımızda",
  "Kişisel Verilerin Korunması",
  "Teslimat Koşulları",
  "Satış Sözleşmesi",
  "Garanti ve İade Koşulları",
]);

const quickAccess = ref([
  "İletişim",
  "Mağazalarımız",
  "Yeni Çıkan Kitaplar",
  "Çok Satan Kitaplar",
  "İşlem Rehberi",
]);

const memberSection = ref(["Sık Sorulan Sorular", "Yeni Üyelik", "Üye Girişi"]);

const socialMediaList = ref([
  {
    id: 1,
    url: "https://www.instagram.com/bkmkitapcom",
    imageSrc: "//cdn.bkmkitap.com/Data/img/menu_item/0/tr_img_1_30.svg",
    title: "Instagram",
  },
  {
    id: 2,
    url: "https://x.com/bkmkitap",
    imageSrc: "//cdn.bkmkitap.com/Data/img/menu_item/1/tr_img_1_31.svg",
    title: "X",
  },
  {
    id: 3,
    url: "https://www.youtube.com/c/bkmkitap",
    imageSrc: "//cdn.bkmkitap.com/Data/img/menu_item/2/tr_img_1_32.svg",
    title: "YouTube",
  },
  {
    id: 4,
    url: "https://www.facebook.com/bkmkitapcom",
    imageSrc: "//cdn.bkmkitap.com/Data/img/menu_item/3/tr_img_1_33.svg",
    title: "Facebook",
  },
  {
    id: 5,
    url: "https://www.linkedin.com/company/14818000",
    imageSrc: "//cdn.bkmkitap.com/Data/img/menu_item/4/tr_img_1_34.svg",
    title: "Linkedin",
  },
  {
    id: 6,
    url: "https://www.tiktok.com/@bkmkitap",
    imageSrc: "//cdn.bkmkitap.com/Data/img/menu_item/5/tr_img_1_35.svg",
    title: "Tiktok",
  },
]);

const paymentLogos = ref([
  {
    id: 1,
    imageSrc: "//cdn.bkmkitap.com/theme/v5-bkm/assets/footer/iyzico.svg",
    alt: "iyzico",
  },
  {
    id: 2,
    imageSrc: "//cdn.bkmkitap.com/theme/v5-bkm/assets/footer/mastercard.svg",
    alt: "mastercard",
  },
  {
    id: 3,
    imageSrc: "//cdn.bkmkitap.com/theme/v5-bkm/assets/footer/maestro.svg",
    alt: "maestro",
  },
  {
    id: 4,
    imageSrc: "//cdn.bkmkitap.com/theme/v5-bkm/assets/footer/visa.svg",
    alt: "Visa",
  },
  {
    id: 5,
    imageSrc: "//cdn.bkmkitap.com/theme/v5-bkm/assets/footer/visa-electron.svg",
    alt: "Visa Electron",
  },
]);



</script>

<style scoped>
.footer-section {
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 20px 0;
  border-top: 2px solid #ddd;
}

.footer-title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
}

.footer-list {
  list-style: none; /* Noktaları kaldırır */
  padding: 0;
  margin: 0; /* Margin de sıfırlanır */
}
.footer-list > li {
  list-style: none;
}

.footer-link {
  text-decoration: none;
  color: #333;
}

.footer-link:hover {
  color: #e30613;
}

.social-title {
  font-size: 14px;
}

.payment-logo img {
  border-radius: 4px;
}
ul,
li {
  list-style: none !important;
  padding: 0 !important;
  margin: 0 !important;
}
</style>

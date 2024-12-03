<template>
  <div class="popular-section">
    <!-- Banner -->
    <div id="relation|291" class="relArea col-12 v5-bkm folder-banner tpl-custom-default">
      <div class="row">
        <div class="col-12 py-2 border-top border-bottom">
          <div class="row">
            <div class="col-12 d-flex">
              <a class="w-100 d-block position-relative effect-wrapper" aria-label="Banner">
                <picture class="w-100 h-100 d-flex overflow-hidden">
                  <img
                    src="//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/291/populer-yayinevleri-tr-1.webp?1733000874"
                    alt="Banner"
                    class="w-100 fit-cover ls-is-cached lazyloaded"
                    loading="lazy"
                    width="1200"
                    height="185"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Popüler Yayınlar Başlık -->
    <div class="row">
      <!-- Popüler Yayınlar Fotoğrafları -->
      <div v-for="(publisher, index) in publishers" :key="index" class="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 mb-2 d-flex publish">
        <a :href="publisher.url" class="w-100 d-block position-relative effect-wrapper" :aria-label="publisher.name">
          <div class="image-container">
            <img :src="publisher.imgSrc" :alt="publisher.name" class="publisher-img lazyloaded" loading="lazy" width="200" height="200" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopularPublishersWithBanner",
  data() {
    return {
      publishers: [
        { name: "İş Bankası Kültür Yayınları", url: "https://www.bkmkitap.com/is-bankasi-kultur-yayinlari", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/is-bankasi-kultur-yayinlari-1-tr.webp?1733000874" },
        { name: "Ketebe Yayınları", url: "https://www.bkmkitap.com/ketebe-yayinlari", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/ketebe-yayinlari-2-tr.webp?1733000874" },
        { name: "Ephesus Yayınları", url: "https://www.bkmkitap.com/ephesus-yayinlari", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/12-yay-nevi-ephesus-3-tr.webp?1733000874" },
        { name: "İndigo Kitap", url: "https://www.bkmkitap.com/indigo-kitap", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/indigo-kitap-4-tr.webp?1733000874" },
        { name: "Epsilon Yayınevi", url: "https://www.bkmkitap.com/epsilon-yayinevi", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/epsilon-yayinevi-5-tr.webp?1733000874" },
        { name: "Kronik Kitap", url: "https://www.bkmkitap.com/kronik-kitap", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/kronik-kitap-6-tr.webp?1733000874" },
        { name: "Olimpos Yayınları", url: "https://www.bkmkitap.com/olimpos-yayinlari", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/olimpos-yayinlari-8-tr.webp?1733000874" },
        { name: "Destek Yayınları", url: "https://www.bkmkitap.com/destek-yayinlari", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/destek-yayinlari-9-tr.png?1733000874" },
        { name: "Timaş Yayınları", url: "https://www.bkmkitap.com/timas-yayinlari", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/timas-yayinlari-10-tr.webp?1733000874" },
        { name: "Dokuz Yayınları", url: "https://www.bkmkitap.com/dokuz-yayinlari", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/dokuz-yayinlari-11-tr.png?1733000874" },
        { name: "Artemis Yayınları", url: "https://www.bkmkitap.com/artemis-yayinlari", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/artemis-yayinlari-12-tr.webp?1733000874" },
        { name: "Üç Dört Beş Yayınları", url: "https://www.bkmkitap.com/uc-dort-bes-yayincilik", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/uc-dort-bes-yayinlari-14-tr.webp?1733000874" },
        { name: "İşler Yayın Grubu", url: "https://www.bkmkitap.com/isler-yayin-grubu", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/isler-yayin-grubu-15-tr.webp?1733000874" },
        { name: "Antrenmanlarla Matematik Yayıncılık", url: "https://www.bkmkitap.com/antrenmanlarla-matematik-yayincilik", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/antrenmanlarla-matematik-yayincilik-16-tr.webp?1733000874" },
        { name: "Ren Kitap", url: "https://www.bkmkitap.com/ren-kitap", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/ren-kitap-logo-tr-17.webp?1733000874" },
        { name: "3D Yayınları", url: "https://www.bkmkitap.com/3d-yayinlari", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/3d-yayinlari-18-tr.webp?1733000874" },
        { name: "İthaki Yayınları", url: "https://www.bkmkitap.com/ithaki-yayinlari", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/ithaki-yayinlari-tr-20.webp?1733000874" },
        { name: "Paraf Yayınları", url: "https://www.bkmkitap.com/paraf-yayinlari-kitaplari", imgSrc: "//cdn.bkmkitap.com/Data/BlockUploadData/banner/img1/292/paraf-yayinlari-tr-19.webp?1733000874" }
      ]
    };
  }
};
</script>

<style scoped>
/* Genel stil */
.popular-section {
  margin: 0 auto;
  padding: 20px;
  width: 80%; /* Div genişliğini kısıtla */
  max-width: 1200px; /* Maksimum genişlik belirle */
  margin-top: 20px; /* Üstten biraz boşluk bırak */
  display: flex;
  flex-direction: column;
  align-items: center; /* İçeriği yatayda ortala */
}

.publish {
  position: relative;
}

.publish a {
  text-decoration: none;
  position: relative;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #e9e9e9; /* Kutu kenarlığı */
  border-radius: 55px; /* Kutu köşe yuvarlatma */
  background-color: white; /* Kutu arka planı */

  transition: all 0.3s ease; /* Kutu efektleri için geçiş */
}

.publish img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%; /* Fotoğrafın kenarlarını ovalleştir */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.publish a:hover .image-container {
  box-shadow: 0 0 3px 1px rgba(255, 0, 0, 0.8); /* Hover durumunda kırmızı gölge efekti */
}

.publish a:hover img {
  transform: scale(1.1); /* Hover durumunda fotoğrafı biraz büyütme efekti */
}

/* Banner kısmı */
.effect-wrapper {
  transition: none; /* Artık herhangi bir geçiş efekti olmayacak */
}

/* TailwindCSS ile varsayılan stil ekleme */
.relArea {
  position: relative;
}
</style>   
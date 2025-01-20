<template>
  <div class="layout">
    <!-- Header Section -->
    <header class="navbar">
      <!-- Logo and Menu Section -->
      <div class="fixed-header">
        <!-- Logo -->
         <div>
        <button class="logo" @click="goToHome">
          <img
            src="https://cdn.bkmkitap.com/Data/EditorFiles/logonew23.png"
            alt="Logo"
            class="logo-image"
          />
        </button>
        </div>

      

        <!-- Menu Button -->
        <div class="menu">
          <button @click="toggleMenu" class="menu-button">
            <span class="menu-icon">☰</span> Menu &#x02C5
          </button>
          <div v-if="menuOpen" class="menu-dropdown">
            <ul>
              <li><button >Edebiyat Kitapları</button></li>
              <li><button>Çocuk Kitapları</button></li>
              <li><button>Gezi ve Rehber Kitapları</button></li>
              <li><button>Hobi & Oyuncak</button></li>
            </ul>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="search">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Aradığınız ürünün adını yazınız."
            class="search-input"
          />
        </div>

        <!-- Login, Signup, and Cart Buttons -->
        <div class="auth-cart">
          <button class="auth-button" @click="goToFavorites">
            <img src="/public/images/favicon.png" alt="Favoriler" class="button-icon" />
          </button>
        <!-- Profil veya Login Durumu -->
        <button class="auth-button" @click="handleAuthButton">
              <img
              :src="authStore.user ? '/images/profil.png' : '/images/profil.png'"
              alt="Profil"
              class="button-icon"
            />

            <span v-if="authStore.user">Profil</span>
            <span v-else></span>
          </button>

          <button class="cart-button" @click="goToSepet">
            <img src="/public/images/sepet.png" alt="Sepet" class="button-icon" />
            <span class="cart-badge">0</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Category Banner -->
    <div class="category-banner">
  <div
    v-for="item in categories"
    :key="item"
    class="category-item"
    @click="handleCategoryClick(item)" 
  >
    {{ item }}
  </div>
</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { navigateTo } from "nuxt/app"; // Nuxt yönlendirme fonksiyonu
import { useRouter } from "vue-router"; // Vue Router kullanımı
import { useAuthStore } from "@/stores/auth"; // Pinia Store

export default defineComponent({
  name: "Component2",
  setup() {
    const menuOpen = ref(false);
    const searchQuery = ref("");
    const categories = ref([
      "EDEBİYAT KİTAPLARI",
      "KIRTASİYE",
      "OKULA YARDIMCI",
      "OYUNCAK",
      "SINAVLARA HAZIRLIK",
      "KİTAP TAVSİYE",
      "TÜM KAMPANYALAR",
      "ÇOK SATANLAR",
    ]);

    const router = useRouter(); // Yönlendirme için Router
    const authStore = useAuthStore(); // Kullanıcı durumunu kontrol etmek için Pinia store
    const handleCategoryClick = (category: string) => {
      if (category === "EDEBİYAT KİTAPLARI") {
        router.push("/page5"); // Edebiyat Kitapları için yönlendirme
      } else {
        console.log(`${category} için bir yönlendirme tanımlanmadı.`);
      }
    };



    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };



    // Favoriler sayfasına yönlendirme
    const goToFavorites = () => {
      navigateTo("/page7"); // Page 7'ye yönlendir
    };

    const goToSepet = () => {
      navigateTo("/page4"); // Page 4'ye yönlendir
    };

  // Login veya Profil butonuna tıklandığında:
  const handleAuthButton = () => {
      if (authStore.user) {
        // Kullanıcı giriş yapmışsa Profil sayfasına yönlendir
        router.push("/page3");
      } else {
        // Kullanıcı giriş yapmamışsa Giriş/Kayıt sayfasına yönlendir
        router.push("/page2");
      }
    };
    const goToHome = () => {
  router.push("/page1"); // Page 1'e yönlendirme
};


    return {
      menuOpen,
      searchQuery,
      categories,
      toggleMenu,
      goToFavorites,
      handleCategoryClick,
      goToSepet,
      handleAuthButton,
      authStore, // Kullanıcı durumunu kullanmak için store'u döndür
      goToHome,
    };
  },
});
</script>





<style scoped lang="scss">
.fixed-header {
  position: fixed; /* Sabit pozisyon */
  top: 0; /* Sayfanın üst kısmına sabitler */
  left: 0;
  right: 0; /* Ortalamak için sağ sınırı belirle */
  width: 100%; /* Tüm genişliği kaplar */
  background-color: white; /* Arka plan rengi */
  z-index: 1000; /* Diğer öğelerin üzerine çıkması için */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Hafif bir gölge */
  display: flex;
  justify-content: space-between; /* İçeriği yaymak için */
  align-items: center;
  padding: 10px 20px; /* İç boşluklar */
  max-width: 1450px; /* Maksimum genişlik belirle */
  margin: 0 auto; /* Yatayda ortalar */
}

.layout {
  font-family: "Avenir", sans-serif;
  margin: 0;
  padding: 0;
}

.toolbar {
  display: flex;
  height: 70px;
  width: 100%;
}

.banner {
  width: 100%;
  height: 10%;
  
}

.banner-image {
  width: 100%;
  height: 20%;
  object-fit: cover;
}

.toolbar {
  max-width: 1450px; /* Üst kısım için de maksimum genişlik */
  margin-left: auto; /* Ortalamak için */
  margin-right: auto; /* Ortalamak için */
  padding: 0 20px; /* Sağ ve sol boşluk ekle */
  box-sizing: border-box; /* Padding'in genişlik dahil olmasını sağlar */
}

.logo {
  margin-right: 20px;
  border: none; /* Kenarlığı kaldırır */
  box-shadow: none; /* Herhangi bir gölgeyi kaldırır */
 
  background-color: transparent; /* Arka planı şeffaf yapar */


}

.logo-image {
  height: 60px;
  border: none; /* Kenarlığı kaldırır */
  box-shadow: none; /* Herhangi bir gölgeyi kaldırır */
}


.menu {
  display: flex;
  align-items: center;
  
}

.menu-icon{
  padding: 10px;
}

.menu-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 23px;
  transition: background-color 0.3s ease; /* Hover geçiş efekti */
}

.menu-button:hover {
  background-color: #e30613; /* Kırmızı arka plan */
  color: #ffffff; /* Beyaz yazı rengi */
  border-radius: 5px; /* Hafif yuvarlak köşeler */
  padding: 5px; /* Hover sırasında kutunun genişlemesi */
}

.menu-dropdown {
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.menu-dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-dropdown li {
  padding: 8px;
}

.search {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.search-input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.auth-cart {
  display: flex;
  align-items: center;
  
}

.auth-button {
  background-color: #ffffff;
  border: 1px solid transparent;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.auth-button:hover {
  border-color: #e30613;
  box-shadow: 0 0 5px rgba(227, 6, 19, 0.5);
}

.cart-button {
  background-color: #ffffff;
  border: 1px solid transparent;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.cart-button:hover {
  border-color: #e30613;
  box-shadow: 0 0 5px rgba(227, 6, 19, 0.5);
}

/* Görüntüyü küçültme */
.cart-button .button-icon {
  width:40px; /* Genişlik */
  height: 40px; /* Yükseklik */
  object-fit: contain; /* Orantılı ölçekleme */
}

.cart-badge {
  background-color: #e30613;
  color: #ffffff;
  padding: 3px 8px;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
}

.category-banner {
  display: flex;
  justify-content: space-between; /* Kategorileri eşit boşluklarla hizala */
  align-items: center; /* Dikey hizalama */
  background-color: #fff;
  padding: 2px 20px; /* Üst ve alt için 2px, sağ ve sol için 20px */
  border-bottom: 1px solid #ddd;
  margin-top: 70px;
  margin-bottom: 20px;
  max-width: 1450px; /* Üst kısımla aynı genişlik */
  margin-left: auto; /* Yatayda ortalamak için */
  margin-right: auto; /* Yatayda ortalamak için */
  height: 50px; /* Üst kısımla aynı yüksekliği ayarla */
  box-sizing: border-box; /* Padding'in genişlik dahil olmasını sağlar */
}

.category-item {
  font-size: 14px;
  font-weight: bold;
  color: #000;
  text-align: center;
  cursor: pointer;
  position: relative; /* Pseudo-element için konumlandırma */
  padding: 0 10px; /* Sağ ve sol arasında boşluk */
}

.category-item::after {
  content: "|"; /* Çizgi sembolü */
  position: absolute;
  right: -25px; /* Çizgiyi kategori öğesinin sağına yerleştir */
  top: 50%; /* Ortalamak için */
  transform: translateY(-50%); /* Dikeyde tam ortalamayı sağlar */
  color: #e30613; /* Çizgi rengi */
  font-size: 26px; /* Çizgi boyutu */
}

.category-item:last-child::after {
  content: ""; /* Son öğede çizgiyi gizle */
}

.category-item:hover {
  background-color: #e30613; /* Hover durumunda arka plan kırmızı */
  color: #fff; /* Yazı rengi beyaz */
  border-radius: 7px; /* Hover sırasında köşeleri daha yuvarlak yap */
}

.highlight {
  color: #e30613;
  font-weight: bold;
}
</style>

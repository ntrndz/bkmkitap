<template>
  <div class="layout">
    <!-- Header Section -->
    <header class="navbar">
      <!-- Banner Image -->
      <div class="banner">
        <img
          src="https://cdn.bkmkitap.com/Data/EditorFiles/yil-sonu-indirimleri-kampanyasi-top-banner.webp"
          alt="Banner"
          class="banner-image"
        />
      </div>

      <!-- Logo and Menu Section -->
      <div class="toolbar">
        <!-- Logo -->
        <div class="logo">
          <img
            src="https://cdn.bkmkitap.com/Data/EditorFiles/logonew23.png"
            alt="Logo"
            class="logo-image"
          />
        </div>

        <!-- Menu Button -->
        <div class="menu">
          <button @click="toggleMenu" class="menu-button">
            <span class="menu-icon">☰</span> Menu &#x02C5
          </button>
          <div v-if="menuOpen" class="menu-dropdown">
            <ul>
              <li><button>Çocuk Kitapları</button></li>
              <li><button>Edebiyat Kitapları</button></li>
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
          <button class="auth-button">
            <img src="/public/images/favicon.png" alt="Üye Ol" class="button-icon" />
          </button>
          <button class="auth-button">
            <img src="/public/images/profil.png" alt="Profil" class="button-icon" />
          </button>

          <button class="cart-button">
            <img src="/public/images/sepet.png" alt="Sepet" class="button-icon" />
            <span class="cart-badge">0</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Category Banner -->
    <div class="category-banner">
      <div v-for="item in categories" :key="item" class="category-item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HeaderComponent",
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

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    return {
      menuOpen,
      searchQuery,
      categories,
      toggleMenu,
    };
  },
});
</script>

<style scoped lang="scss">
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.logo {
  margin-right: 20px;
}

.logo-image {
  height: 60px;
}

.menu {
  position: relative;
  margin-right: 5px;
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
  justify-content: space-between;
  background-color: #fff;
  padding: 2px 200px;
  border-bottom: 1px solid #ddd;
}

.category-item {
  padding: 8px 10px;
  font-size: 14px;
  font-weight: bold;
  color: #000;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all 0.3s ease;
  margin-right: 5px;

}

.category-item:not(:last-child) {
  border-right: 1px solid #e30613;
}

.category-item:hover {
  background-color: #e30613;
  color: #fff;
  border-radius: 15px;
}

.highlight {
  color: #e30613;
  font-weight: bold;
}
</style>

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
              <span class="menu-icon">☰</span> Menu
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
            <button class="auth-button">GİRİŞ YAP</button>
            <button class="auth-button">ÜYE OL</button>
            <button class="cart-button">
              <span class="cart-icon">🛒</span> SEPET
              <span class="cart-badge">0</span>
            </button>
          </div>
        </div>
      </header>
  
      <!-- Category Banner -->
      <div class="category-banner">
        <div class="category-item">EDEBİYAT KİTAPLARI</div>
        <div class="category-item">KIRTASİYE</div>
        <div class="category-item">OKULA YARDIMCI</div>
        <div class="category-item">OYUNCAK</div>
        <div class="category-item">SINAVLARA HAZIRLIK</div>
        <div class="category-item">KİTAP TAVSİYELERİ</div>
        <div class="category-item">TÜM KAMPANYALAR</div>
        <div class="category-item highlight">FIRSAT ÜRÜNLERİ</div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    name: 'HeaderComponent',
    data() {
      return {
        menuOpen: false,
        searchQuery: '',
      }
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen
      }
    }
  })
  </script>
  
  <style scoped lang="scss">
  .layout {
    font-family: "Avenir", sans-serif;
    margin: 0;
    padding: 0;
  }
  
  .toolbar{
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
    padding: 0 ;
  }
  
  .logo {
    margin-right: 20px;
  }
  
  .logo-image {
    height: 60px;
  }
  
  .menu {
    position: relative;
    margin-right : 50px;
  }
  
  .menu-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
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
    background-color: #e30613;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
  }
  
  .cart-button {
    background-color: #e30613;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    position: relative;
  }
  
  .cart-icon {
    margin-right: 8px;
  }
  
  .cart-badge {
    background-color: #fff;
    color: #e30613;
    padding: 3px 8px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
  }
  
  .category-banner {
    display: flex;
    justify-content: space-around;
    background-color: #e6e6e6;
    padding: 20px 0;
  }
  
  .category-item {
    font-size: 16px;
    color: #585856;
    cursor: pointer;
  }
  
  .category-item:hover {
    text-decoration: underline;
  }
  
  .highlight {
    color: #e30613;
    font-weight: bold;
  }
  
  </style>
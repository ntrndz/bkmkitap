<template>
  <div class="container">
    <!-- Kullanıcı Bilgileri ve Profil -->
    <div class="user-info">
      <div class="avatar">
        <img src="public/images/avatar.png" alt="avatar" />
      </div>
      <div class="user-details">
        <p class="user-name">Nehir Tirindaz</p>
        <p class="user-email">nehir_tirindaz@hotmail.com</p>
        <button class="account-button">Hesabım</button>
      </div>
      <div class="menu-item">
        <button class="menu-btn">
          <i class="menu-icon">👤Kişisel Bilgilerim</i> 
        </button>
      </div>
      <div class="menu-item">
        <button class="menu-btn">
          <i class="menu-icon">📧Mesajlarım</i> 
        </button>
      </div>
      <div class="menu-item">
        <button class="menu-btn">
          <i class="menu-icon">🚪</i> Çıkış
        </button>
      </div>
    </div>

    <!-- Menü -->
    <div class="menu">
     
      
      <!-- Üst Satır Menüsü -->
      <div class="menu-row top-row">
 <!-- Sipariş Takip Arama -->
       <div class="order-tracking">
        <p class="order-title">SİPARİŞ TAKİP</p>
        <input v-model="orderNumber" type="text" class="order-input" placeholder="Sipariş Numarası" />
        <button @click="searchOrder" class="search-btn">ARA</button>
      </div>

        <div class="menu-item1">
          <button class="menu-btn1">
            <i class="menu-icon1">🛒</i> Siparişlerim
          </button>
        </div>
        <div class="menu-item1">
          <button class="menu-btn1">
            <i class="menu-icon1">❤️</i> Favorilerim
          </button>
        </div>
        <div class="menu-item1">
          <button class="menu-btn1">
            <i class="menu-icon1">🎁</i> Hediye Çeklerim
          </button>
        </div>
      </div>

      <!-- Alt Satır Menüsü -->
      <div class="menu-row bottom-row">
        <div class="menu-item1">
          <button class="menu-btn1">
            <i class="menu-icon1">📍</i> Adreslerim
          </button>
        </div>
        <div class="menu-item1">
          <button class="menu-btn1">
            <i class="menu-icon1">⭐</i> Puanlarım
          </button>
        </div>
        <div class="menu-item1">
          <button class="menu-btn1">
            <i class="menu-icon1">⏰</i> Stok Alarm Listem
          </button>
        </div>
        <div class="menu-item1">
          <button class="menu-btn1">
            <i class="menu-icon1">🔔</i> Fiyat Alarm Listem
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const orderNumber = ref<string>('');

// Sipariş numarası arama işlevi
const searchOrder = () => {
  if (orderNumber.value) {
    console.log(`Sipariş numarası: ${orderNumber.value}`);
    // Burada API veya başka bir işlev çağrılabilir.
  }
};
</script>

<style scoped>
.container {
  display: flex;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.user-info {
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  align-items: center;
  width: 250px; /* Sol alan genişliği */
  background-color: #f9f9f9; /* Arka plan */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.avatar img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.user-details {
  text-align: center;
}

.user-name {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 5px 0;
}

.user-email {
  font-size: 14px;
  color: #666;
  margin-bottom: 2px;
}

.account-button {
  padding: 10px 20px;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-bottom: 6px;
}

.account-button:hover {
  color: #e74c3c;
}

.menu {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.order-tracking {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 500px;
}

.order-input {
  flex: 1;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.search-btn {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.search-btn:hover {
  background-color: #2980b9;
}

.menu-row {
  display: grid;
  gap: 15px;
}

.top-row {
  grid-template-columns: repeat(10, 1fr); /* Üst sıra için 3 sütun */
}

.bottom-row {
  grid-template-columns: repeat(5, 1fr); /* Alt sıra için 4 sütun */
}

.menu-item {
  text-align: center;
}

.menu-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  height: 120px; /* Kutu yüksekliği */
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.menu-btn:hover {
  background-color: #f9f9f9;
  border-color: #e74c3c;
}

.menu-icon {
  font-size: 24px; /* İkon boyutu */
  color: #333;
}

.menu-btn:hover .menu-icon {
  color: #e74c3c; /* İkon rengi hover durumu */
}

.menu-btn span {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}








.menu-item1 {
  text-align: center;
}

.menu-btn1 {
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  height: 120px; /* Kutu yüksekliği */
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.menu-btn1:hover {
  background-color: #f9f9f9;
  border-color: #e74c3c;
}

.menu-icon1 {
  font-size: 24px; /* İkon boyutu */
  color: #333;
}

.menu-btn1:hover .menu-icon {
  color: #e74c3c; /* İkon rengi hover durumu */
}

.menu-btn1 span {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}







</style>

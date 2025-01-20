<template>
  <div class="container">
    <!-- Kullanıcı Bilgileri ve Profil -->
    <div class="user-info">
      <div class="avatar">
        <img src="/images/avatar.png" alt="avatar" />
      </div>
      <div class="user-details">
        <p class="user-name">{{ authStore.user?.email || "Kullanıcı Adı" }}</p>
        <p class="user-email">{{ authStore.user?.email || "E-posta adresi bulunamadı" }}</p>
        <button class="account-button">Hesabım</button>
      </div>
      <div class="menu-list">
        <button class="menu-item">
          <img src="/images/avatar.png" alt="Icon" class="menu-icon1" />
          <span>KİŞİSEL BİLGİLERİM</span>
        </button>
        <button class="menu-item">
          <img src="/images/messages.png" alt="Icon" class="menu-icon1" />
          <span>MESAJLARIM</span>
        </button>
        <button class="menu-item" @click="logout">
          <img src="/images/Exit.png" alt="Icon" class="menu-icon1" />
          <span>ÇIKIŞ</span>
        </button>
      </div>
    </div>

    <!-- Menü -->
    <div class="menu">
      <!-- Üst Satır -->
      <div class="menu-row top-row">
        <div class="menu-item">
          <button class="menu-btn">
            <i class="menu-icon">🛒</i> Siparişlerim
          </button>
        </div>
        <div class="menu-item">
          <button class="menu-btn">
            <i class="menu-icon">❤</i> Favorilerim
          </button>
        </div>
        <div class="menu-item">
          <button class="menu-btn">
            <i class="menu-icon">🎁</i> Hediye Çeklerim
          </button>
        </div>
      </div>

      <!-- Alt Satır -->
      <div class="menu-row bottom-row">
        <div class="menu-item">
          <button class="menu-btn">
            <i class="menu-icon">📍</i> Adreslerim
          </button>
        </div>
        <div class="menu-item">
          <button class="menu-btn">
            <i class="menu-icon">⭐</i> Puanlarım
          </button>
        </div>
        <div class="menu-item">
          <button class="menu-btn">
            <i class="menu-icon">⏰</i> Stok Alarm Listem
          </button>
        </div>
        <div class="menu-item">
          <button class="menu-btn">
            <i class="menu-icon">🔔</i> Havale Bildirimi
          </button>
        </div>
        <div class="menu-item">
          <button class="menu-btn">
            <i class="menu-icon">💡</i> Fiyat Alarm Listem
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth"; // Pinia store'dan auth

const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  if (!authStore.user) {
    router.push("/page2"); // Giriş yapılmamışsa giriş ekranına yönlendir
  }
});

const logout = async () => {
  try {
    await authStore.logout();
    router.push("/page2"); // Çıkış yaptıktan sonra giriş ekranına yönlendir
  } catch (error) {
    console.error("Çıkış yaparken hata oluştu:", error);
  }
};
</script>

<style scoped>
/* Genel Yapı */
.container {
  display: flex;
  gap: 20px;
  padding: 20px;
  font-family: Arial, sans-serif;
  margin-bottom: 30px;
}

/* Sol Sütun (Profilim) Alanı */
.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #ddd;
  margin-bottom: 15px;
}

.user-details {
  text-align: center;
  margin-bottom: 15px;
}

.user-name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.user-email {
  font-size: 14px;
  color: #e74c3c;
  margin-bottom: 15px;
}

/* Hesabım Butonu */
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

/* Menü Öğeleri */
.menu-list {
  width: 100%;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 10px;
  background-color: #fff;
  color: #333;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 0px solid #ddd;
}

.menu-item:hover {
  background-color: #f9f9f9;
  border-color: #e74c3c;
}

.menu-icon {
  font-size: 18px;
  margin-right: 10px;
  color: #333;
}

.notification-badge {
  display: inline-block;
  background-color: #28a745;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 12px;
}

/* Sağ Menü Alanı */
.menu {
  flex: 1;
}

.menu-row {
  display: grid;
  gap: 20px;
  margin-bottom: 20px;
}

.top-row {
  grid-template-columns: 2fr 1fr 1fr 1fr; /* Sipariş Takip + 3 kutu */
}

.bottom-row {
  grid-template-columns: repeat(5, 1fr); /* Alt satırda 5 eşit sütun */
}

.order-tracking {
  padding: 10px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.order-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.order-input-container {
  display: flex;
  gap: 10px;
}

.order-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.search-btn {
  background: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.search-btn:hover {
  background: #2980b9;
}

.menu-btn {
  width: 100%;
  height: 120px;
  padding: 15px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.menu-btn:hover {
  border-color: #e74c3c;
}

.menu-btn:hover .menu-icon {
  color: #e74c3c;
}

.menu-icon {
  font-size: 24px;
  margin-bottom: 5px;
  color: #333;
}
.menu-item i {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-light);
  border-radius: 50%;
  width: 30px; /* İkon boyutu */
  height: 30px; /* İkon boyutu */
  font-size: 18px;
  margin-right: 10px;
}
.menu-icon1{
  width: 20%;
  background-color:#e74c3c;
}

</style>
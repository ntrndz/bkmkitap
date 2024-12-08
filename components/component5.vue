<template>
  <div class="favorite-list">
    <!-- Header -->
    <div class="header">
      <div class="tabs">
        <button class="tab-button active">Favorilerim</button>
        <button class="tab-button">Koleksiyonlarım</button>
      </div>
      <button class="tab-button back-button">GERİ</button>
    </div>

    <!-- Item List -->
    <div class="list">
      <div v-for="(item, index) in items" :key="index" class="list-item">
        <div class="item-box">
          <div class="item-left">
            <div class="checkbox-container">
              <input type="checkbox" class="checkbox" />
            </div>
            <img :src="item.image" :alt="item.title" class="item-image" />
          </div>
          <div class="item-details">
            <h3 class="item-publisher">{{ item.publisher }}</h3>
            <p class="item-title">{{ item.title }}</p>
          </div>
          <div class="item-right">
            <div class="price-trash-container">
              <p class="item-price">{{ item.price }} TL</p>
              <button @click="removeItem(index)" class="delete-button">
                🗑️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="actions-container">
      <button class="action-button add-to-cart">
        🛒 Seçilenleri Sepete Ekle
      </button>
      <button class="action-button delete-selected">
        🗑️ Seçilenleri Sil
      </button>
      <button class="action-button print">
        🖨️ Yazdır
      </button>
      <button class="action-button share">
        🔗 Paylaş
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FavoriteListComponent",
  data() {
    return {
      items: [
        {
          image: "https://cdn.bkmkitap.com/bulbul-kapani-1-hediyeli-ozel-kutu-13648029-88-K.jpg",
          publisher: "Ephesus Yayınları",
          title: "Bülbül Kapanı 1 Hediyeli Özel Kutu",
          price: "239,40",
        },
        {
          image: "https://cdn.bkmkitap.com/gokcen-iki-kitaplik-set-866047-13625715-86-K.jpg",
          publisher: "Ephesus Yayınları",
          title: "Gökçen İki Kitaplık Set",
          price: "400,80",
        },
        {
          image: "https://cdn.bkmkitap.com/gokcen-3-guz-yagmurlari-hediyeli-ozel-kutu-13631546-87-K.jpg",
          publisher: "Ephesus Yayınları",
          title: "Gökçen 3: Güz Yağmurları - Hediyeli Özel Kutu",
          price: "239,40",
        },
      ],
    };
  },
  methods: {
    removeItem(index: number) {
      this.items.splice(index, 1);
    },
  },
});
</script>

<style scoped>
/* Genel Stil */
.favorite-list {
  background-color: white;
  color: #000;
  padding: 20px;
  border-radius: 10px;
  font-family: Arial, sans-serif;
}

/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.tabs {
  display: flex;
  gap: 20px;
}

.tab-button {
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: white;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.tab-button.active {
  color: red;
  border-bottom: 2px solid red;
}

.tab-button:hover {
  background-color: #f5f5f5;
  color: red;
}

.back-button {
  background-color: white;
  color: #000;
  border: 1px solid #ccc;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.back-button:hover {
  background-color: #ddd;
}

/* Liste */
.list {
  margin-bottom: 20px;
}

.list-item {
  margin-bottom: 15px;
}

.item-box {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.item-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.checkbox-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkbox {
  width: 18px;
  height: 18px;
  border-radius: 30%;
  border: 2px solid #ddd;
  appearance: none;
  background-color: white;
  cursor: pointer;
  position: relative;
}

.checkbox:checked::after {
  content: "✓";
  color: red;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.item-image {
  width: 60px;
  height: auto;
  border-radius: 5px;
}

.item-details {
  flex: 1;
  margin-left: 10px;
}

.item-publisher {
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
  font-size: 14px;
}

.item-title {
  color: #555;
  font-size: 13px;
}

.item-right {
  text-align: right;
  display: flex;
  align-items: center;
}

.price-trash-container {
  display: flex;
  align-items: center;
  gap: 10px; /* Fiyat ve çöp kutusu arasında boşluk */
}

.item-price {
  color: red;
  font-weight: bold;
  font-size: 14px;
}

.delete-button {
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 18px; /* İkon boyutu */
}

.delete-button:hover {
  color: #ff0000;
}

/* Actions */
.actions-container {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.action-button {
  padding: 5px 15px; /* Daha küçük padding */
  font-size: 13px; /* Yazı boyutunu biraz küçülttüm */
  font-weight: bold;
  border-radius: 4px; /* Daha az yuvarlatılmış kenarlar */
  border: 1px solid #ddd;
  background-color: white;
  color: #000;
  display: flex;
  align-items: center;
  gap: 5px; /* İkon ile yazı arasındaki boşluk azaldı */
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-button:hover {
  background-color: #f5f5f5;
}

.add-to-cart {
  background-color: red;
  color: white;
  border: none;
}

.add-to-cart:hover {
  background-color: #e60000;
}
</style>           